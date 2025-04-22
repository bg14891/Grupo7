import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox'; 
import 'react-image-lightbox/style.css';
import './Proyect.css';
import jsPDF from 'jspdf';


const ProjectForm = ({ onSave }) => {
  // Estado inicial cargando desde localStorage
  const [projectName, setProjectName] = useState( 
    localStorage.getItem('projectName') || ''   
  );
  const [description, setDescription] = useState(
    localStorage.getItem('projectDescription') || ''
  );
  const [technologies, setTechnologies] = useState(
    JSON.parse(localStorage.getItem('projectTechnologies')) || []
  );
  const [currentTech, setCurrentTech] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // Estado para mostrar la vista previa


  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Configuración inicial
    let yPos = 20;
    
    // Título
    doc.setFontSize(22);
    doc.text(`Proyecto: ${projectName}`, 20, yPos);
    yPos += 15;
  
    // Descripción
    doc.setFontSize(16);
    doc.text('Descripción:', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    const splitDescription = doc.splitTextToSize(description, 170);
    doc.text(splitDescription, 20, yPos);
    yPos += splitDescription.length * 7 + 10;
  
    // Tecnologías
    doc.setFontSize(16);
    doc.text('Tecnologías:', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    technologies.forEach((tech, index) => {
      doc.text(`• ${tech}`, 20, yPos);
      yPos += 7;
    });
    yPos += 10;
  
    // Imágenes
    if (selectedImages.length > 0) {
      doc.setFontSize(10);
      doc.text('Imágenes:', 20, yPos);
      yPos += 15;
      
      selectedImages.forEach((img, index) => {
        if (index % 2 === 0 && index !== 0) {
          doc.addPage();
          yPos = 20;
        }
        
        const imgWidth = 80;
        const imgHeight = (imgWidth * 0.75);
        
        doc.addImage(
          img.preview,
          'JPEG',
          index % 2 === 0 ? 20 : 110,
          yPos,
          imgWidth,
          imgHeight
        );
        
        if (index % 2 !== 0) yPos += imgHeight + 10;
      });
    }
  
    // Guardar PDF
    doc.save(`${projectName || 'proyecto'}.pdf`);
  };




  // Efecto para guardar automáticamente en localStorage
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
    const validImages = files.filter(file => file.type.startsWith('image/'));

    const imagesWithPreview = await Promise.all(
      validImages.map(async (file) => {
        const preview = await convertToBase64(file);
        return {
          file,
          preview,
          id: crypto.randomUUID() // Mejor método para IDs únicos
        };
      })
    );

    setSelectedImages(prev => [...prev, ...imagesWithPreview]);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const removeImage = (id) => { 
    setSelectedImages(prev => {
      const newImages = prev.filter(img => img.id !== id);
      // Ajustar el lightboxIndex si es necesario
      if (isOpen && newImages.length === 0) {
        setIsOpen(false);
      }
      return newImages;
    });
  };

  const handleAddTech = (e) => {
    e.preventDefault();
    if (currentTech.trim()) {
      setTechnologies(prev => [...prev, currentTech.trim()]);
      setCurrentTech('');
    }
  };

  const handleRemoveTech = (index) => {
    setTechnologies(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    
    const projectData = {  
      projectName, 
      description,
      technologies,
      images: selectedImages
    };

    onSave(projectData);

    // Opción 1: Limpiar solo imágenes (mantener otros datos)
    setSelectedImages([]);
    
    
    setProjectName('');
    setDescription('');
    setTechnologies([]);
    setSelectedImages([]);
    // Opción 2: Limpiar completamente (descomentar si prefieres)
    /*
    localStorage.removeItem('projectName');
    localStorage.removeItem('projectDescription');
    localStorage.removeItem('projectTechnologies');
    */
  };

  return (
    <div className="project-form">
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
          type="button" 
          className="preview-button"
          onClick={() => setShowPreview(true)}
          disabled={!projectName && !description && technologies.length === 0}
      >
         Vista Previa
        </button>

        <button 
          type="submit" 
          className="save-button"
          disabled={!projectName || !description}
        >
          Guardar Proyecto
        </button>

        <button 
    type="button" 
    className="pdf-button"
    onClick={generatePDF}
    disabled={!projectName && !description && technologies.length === 0}
  >
    Descargar PDF
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
                else setLightboxIndex(prev => Math.max(0, prev - 1));
              }}
            >
              🗑️
            </button>
          ]}
        />
      )}



{showPreview && (
  <div className="preview-modal">
    <div className="preview-content">
      <button 
        className="close-preview"
        onClick={() => setShowPreview(false)}
      >
        &times;
      </button>
      
      <h2>Vista Previa del Proyecto</h2>
      
      <div className="preview-section">
        <h3>Nombre del Proyecto:</h3>
        <p>{projectName}</p>
      </div>
      
      <div className="preview-section">
        <h3>Descripción:</h3>
        <p>{description}</p>
      </div>
      
      <div className="preview-section">
        <h3>Tecnologías:</h3>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      
      {selectedImages.length > 0 && (
        <div className="preview-section">
          <h3>Imágenes:</h3>
          <div className="preview-images">
            {selectedImages.map((image, index) => (
              <img
                key={image.id}
                src={image.preview}
                alt={`Preview ${index + 1}`}
                className="preview-thumbnail"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
)}
    </div>
  );
};

export default ProjectForm;