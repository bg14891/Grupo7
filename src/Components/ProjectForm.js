import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Proyect.css';
import jsPDF from 'jspdf';

const ProjectForm = ({ onSave }) => {
  // Estados para la información del proyecto
  const [projectName, setProjectName] = useState(localStorage.getItem('projectName') || '');
  const [description, setDescription] = useState(localStorage.getItem('projectDescription') || '');
  const [technologies, setTechnologies] = useState(JSON.parse(localStorage.getItem('projectTechnologies')) || []);
  const [currentTech, setCurrentTech] = useState('');

  // Estados para la gestión de imágenes
  const [selectedImages, setSelectedImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);



  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 20;

    // Configuración de estilos base
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 51, 51); // Color #333

    // Encabezado del proyecto
    doc.setFontSize(22);
    doc.setFont('helvetica',"bold");
    doc.text(`Proyecto: ${projectName || 'Sin nombre'}`, 20, yPos);
    yPos += 15;

    // Descripción
    doc.setFontSize(16);
    doc.setFont('helvetica',"bold");
    doc.text('Descripción:', 20, yPos);
    yPos += 8;
    doc.setFontSize(12);
    doc.setFont('helvetica',"normal");
    const splitDescription = doc.splitTextToSize(description || 'No hay descripción proporcionada', 170);
    doc.text(splitDescription, 20, yPos);
    yPos += splitDescription.length * 7 + 12;

    // Tecnologías
    doc.setFontSize(16);
    doc.setFont('helvetica',"bold");
    doc.text('Tecnologías:', 20, yPos);
    yPos += 8;
    doc.setFontSize(12);
    doc.setFont('helvetica',"normal");
    if (technologies.length > 0) {
      technologies.forEach((tech, index) => {
        doc.text(`• ${tech}`, 20, yPos);
        yPos += 7;
      });
    } else {
      doc.text('No se han añadido tecnologías', 20, yPos);
      yPos += 7;
    }
    yPos += 10;

    // Imágenes (estilo similar a la vista previa)
    if (selectedImages.length > 0) {
      doc.setFontSize(16);
      doc.setFont('helvetica',"bold");
      doc.text('Imágenes:', 20, yPos);
      yPos += 10;

      const imgSize = 40;// Tamaño mas pequeño de las imágenes
      const spacing = 10;

      selectedImages.forEach((img, index) => {
        const xPos = 20 + (index % 4) * (imgSize + spacing);// colocación horizontal

        // Verificar espacio en página
        if (xPos + imgSize > doc.internal.pageSize.width - 20) {
          yPos += imgSize + spacing;
          doc.text('', 20, yPos); // Forzar nueva línea
        }

        // Nueva página si es necesario
        if (yPos + imgSize > doc.internal.pageSize.height - 20) {
          doc.addPage();
          yPos = 20;
        }

        try {
          doc.addImage(img.preview, 'JPEG', xPos, yPos, imgSize, imgSize);
        } catch (error) {
          console.error('Error al agregar imagen:', error);
        }

        // Actualizar posición solo cada 4 imágenes
        if ((index + 1) % 4 === 0) {
          yPos += imgSize + spacing;
        }
      });

      yPos += imgSize + 15;
    }

    // Bordes decorativos (opcional)
    doc.setDrawColor(200, 200, 200); // Color gris claro
    doc.setLineWidth(0.5);
    doc.rect(15, 15, 180, yPos + 10); // Rectángulo contenedor

    // Guardar PDF
    doc.save(`${projectName || 'proyecto'}.pdf`);
  };

  // Efectos para guardar automáticamente en localStorage (EXISTENTES)
  useEffect(() => {
    localStorage.setItem('projectName', projectName);
  }, [projectName]);

  useEffect(() => {
    localStorage.setItem('projectDescription', description);
  }, [description]);

  useEffect(() => {
    localStorage.setItem('projectTechnologies', JSON.stringify(technologies));
  }, [technologies]);

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const validImages = files.filter((file) => file.type.startsWith('image/'));

    const imagesWithPreview = await Promise.all(
      validImages.map(async (file) => {
        const preview = await convertToBase64(file);
        return { file, preview, id: crypto.randomUUID() };
      })
    );

    setSelectedImages((prev) => [...prev, ...imagesWithPreview]);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const removeImage = (id) => {
    setSelectedImages((prev) => {
      const newImages = prev.filter((img) => img.id !== id);
      if (isOpen && newImages.length === 0) {
        setIsOpen(false);
      }
      return newImages;
    });
  };

  const handleAddTech = (e) => {
    e.preventDefault();
    if (currentTech.trim()) {
      setTechnologies((prev) => [...prev, currentTech.trim()]);
      setCurrentTech('');
    }
  };

  const handleRemoveTech = (index) => {
    setTechnologies((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const projectData = {
      projectName,
      description,
      technologies,
      images: selectedImages,
    };

    onSave(projectData);

    setProjectName('');
    setDescription('');
    setTechnologies([]);
    setSelectedImages([]);
  };

  return (
    <div className="project-form-container">
      <div className="form-container">
        <h2>Nuevo Proyecto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre del Proyecto:</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Tecnologías utilizadas:</label>
            <div className="tech-input">
              <input
                type="text"
                value={currentTech}
                onChange={(e) => setCurrentTech(e.target.value)}
                placeholder="Agregar tecnología"
              />
              <button
                onClick={handleAddTech}
                className="save-button"
                disabled={!currentTech.trim()}
              >
                Agregar
              </button>
            </div>
            <div className="tech-list">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleRemoveTech(index)}
                    className="tech-remove"
                  >
                    x
                  </button>
                </span>
              ))}
            </div>
          </div>


          <div className="form-group">
            <label>Imágenes del proyecto:</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              id="file-input"
              className="file-input"
            />
            <label htmlFor="file-input" className="file-label">Seleccionar</label>

            <div className="image-preview">
              {selectedImages.map((image, index) => (
                <div key={image.id} className="preview-item">
                  <img
                    src={image.preview}
                    alt="preview"
                    className="preview-image"
                    onClick={() => {
                      setLightboxIndex(index);
                      setIsOpen(true);
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(image.id);
                    }}
                    className="delete-button"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="save-button"
            disabled={!projectName || !description}
          >
            Guardar Proyecto
          </button>
        </form>

        {isOpen && (
          <Lightbox
            mainSrc={selectedImages[lightboxIndex]?.preview}
            nextSrc={selectedImages[(lightboxIndex + 1) % selectedImages.length]?.preview}
            prevSrc={selectedImages[(lightboxIndex + selectedImages.length - 1) % selectedImages.length]?.preview}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setLightboxIndex((prev) => (prev + selectedImages.length - 1) % selectedImages.length)
            }
            onMoveNextRequest={() =>
              setLightboxIndex((prev) => (prev + 1) % selectedImages.length)
            }
            toolbarButtons={[
              <button
                key="delete"
                className="lb-btn-delete"
                onClick={() => {
                  removeImage(selectedImages[lightboxIndex].id);
                  if (selectedImages.length === 1) setIsOpen(false);
                  else setLightboxIndex((prev) => Math.max(0, prev - 1));
                }}
              >
                🗑️
              </button>,
            ]}
          />
        )}

      </div>
        {/* Vista Previa */}
      <div className="preview-sidebar">
        <h2>Vista Previa</h2>

        <div className="preview-section">
          <h3>Nombre del Proyecto:</h3>
          <p>{projectName || <span className="placeholder">Escribe un nombre</span>}</p>
        </div>

        <div className="preview-section">
          <h3>Descripción:</h3>
          <p>{description || <span className="placeholder">Agrega una descripción</span>}</p>
        </div>

        <div className="preview-section">
          <h3>Tecnologías:</h3>
          <ul>
            {technologies.length > 0 ? (
              technologies.map((tech, index) => <li key={index}>{tech}</li>)
            ) : (
              <li className="placeholder">Añade tecnologías</li>
            )}
          </ul>
        </div>

        <div className="preview-section">
          <h3>Imágenes:</h3>
          <div className="preview-images">
            {selectedImages.length > 0 ? (
              selectedImages.map((image) => (
                <img
                  key={image.id}
                  src={image.preview}
                  alt="Preview"
                  className="preview-thumbnail"
                  onClick={() => {
                    setLightboxIndex(selectedImages.indexOf(image));
                    setIsOpen(true);
                  }}
                />
              ))
            ) : (
              <p className="placeholder">Selecciona imágenes</p>
            )}
          </div>
        </div>

        <button
          type="button"
          className="pdf-button preview-pdf"
          onClick={generatePDF}
          disabled={!projectName && !description && technologies.length === 0 &&  selectedImages.length === 0}
        >
          Descargar PDF
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;