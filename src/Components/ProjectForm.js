import React, { useState, useEffect, useRef } from 'react';
import localforage from 'localforage';//  para el almacenamiento de datos en el navegador
import './Proyect.css';
import jsPDF from 'jspdf'; //  para la generación de PDF
import html2canvas from 'html2canvas';//  para el renderizado de HTML a canvas
import preview from './imagenes/preview.png';

function ProjectForm() {
    const [arrastrar, setArrastrar] = useState(false);
    const [files, setFiles] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);
    const [formData, setFormData] = useState({ 
        nombre: '',
        descripcion: '',
        tecnologias: '',
        imagenes: []
    });

    const fileInputRef = useRef(null); // Referencia para el input de archivos

    useEffect(() => { // Carga los datos guardados al montar el componente
        const cargarDatos = async () => { // Carga los datos guardados al montar el componente
            try {
                const datosGuardados = await localforage.getItem('proyecto');// Obtiene los datos guardados/
                if (datosGuardados) {//si hay datos guardados, los establece en el estado formData
                    setFormData(datosGuardados);//
                    setImagesUrl(datosGuardados.imagenes || []); // Inicializa con imágenes guardadas
                }
            } catch (error) {
                console.error('Error cargando datos:', error);
            }
        };
        cargarDatos();
    }, []); 

    useEffect(() => {
        // Genera URLs para las nuevas imágenes y combínalas con las existentes (base64)
        // Permite volver a cargar las imágenes al cambiar el estado de files
        const newFilesPreviews = files.map(file => URL.createObjectURL(file)); 
        setImagesUrl([...formData.imagenes, ...newFilesPreviews]);

        return () => {
            // Revoca las URLs de las nuevas imágenes al desmontar
            newFilesPreviews.forEach(preview => URL.revokeObjectURL(preview));
        };
    }, [files, formData.imagenes]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const convertirImagenesABase64 = (files) => {
        return Promise.all(
            files.map(file => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
            })
        );
    };


                // Genera un PDF con los datos del proyecto
    const guardarProyectoComoPDF = async () => { 
        const input = document.getElementById('project-form-pdf'); // Obtiene el formulario

        html2canvas(input) // Convierte el formulario a un canvas
            .then((canvas) => {// Genera el PDF con el canvas
                const imgData = canvas.toDataURL('image/png'); // Convierte el canvas a base64
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0); // Añade el canvas al PDF
                pdf.save('Seccion_De_proyecto.pdf');// Guarda el PDF con el nombre 'proyecto.pdf'
            });
    };

    const handleSubmit = async (e) => { // Maneja el envío del formulario
        e.preventDefault();// Previene el comportamiento por defecto del formulario

        try { // Convierte las imágenes a base64 y guarda los datos en localforage 
            const imagenesBase64 = await convertirImagenesABase64(files);
            const datosCompletos = {// Combina los datos del formulario con las imágenes en base64
                ...formData,
                imagenes: [...formData.imagenes, ...imagenesBase64]// Guarda los datos en localforage
            };

            await localforage.setItem('proyecto', datosCompletos);
            setFormData({       // Limpia el formulario después de guardar
                nombre: '',
                descripcion: '',
                tecnologias: '',
                imagenes: []
                
            });
            setImagesUrl([]); 
            setFiles([]); 
            
            alert('Datos guardados exitosamente!');
            guardarProyectoComoPDF();
            
        } catch (error) {
            console.error('Error guardando datos:', error);
            alert('Error al guardar los datos');
        }
    };

    

    const handleDragOver = (e) => { // Previene el comportamiento por defecto del navegador
        e.preventDefault();
        setArrastrar(true);
    };

    const handleDragLeave = () => { // Cambia el color de fondo al salir del área de arrastre
        setArrastrar(false);
    };

    const handleDrop = (e) => {  
        e.preventDefault();
        setArrastrar(false);
        handleFiles(Array.from(e.dataTransfer.files));
    };
// Filtra los archivos de imagen y los añade al estado
    const handleFiles = (fileList) => { 
        const validFiles = fileList.filter(file => file.type.startsWith('image/'));
        if (validFiles.length === 0) {
            alert('Por favor, selecciona solo archivos de imagen.');
            return;
        }
        setFiles(prev => [...prev, ...validFiles]);// actualiza el estado con los archivos de imagen válidos
        if (fileInputRef.current) { 
            fileInputRef.current.value = ''; //  limpia el valor del campo de entrada de archivos.
        }
    };

    const handleFileChange = (e) => {
        handleFiles(Array.from(e.target.files));
    };


    return (
        <div className="container">
            <h1>Seccion De Proyectos</h1>
            <form onSubmit={handleSubmit} id="project-form-pdf">
                <div className="form">
                    <label htmlFor="nombre">Nombre Del Proyecto:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form">
                    <label htmlFor="tecnologias">Tecnologías Usadas:</label>
                    <input
                        type="text"
                        id="tecnologias"
                        name="tecnologias"
                        value={formData.tecnologias}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form">
                    <label htmlFor="url" className="imgbtn">
                        Selecciona Imágenes
                    </label>
                    <input
                        ref={fileInputRef}
                        className="img"
                        accept="image/*"
                        multiple
                        type="file"
                        id="url"
                        name="imagen"
                        onChange={handleFileChange}
                    />
                </div>

                {imagesUrl.length > 0 && (
                    <div className="contenedor-imagenes">
                        {imagesUrl.map((image, index) => (
                            <img
                                src={image}
                                key={index}
                                alt={`preview-${index}`}
                                className="imagen-estilizada"
                            />
                        ))}
                    </div>
                )}


                <div
                    className="area"
                    style={{ backgroundColor: arrastrar ? 'lightgray' : 'white' }} // Cambia el color de fondo al arrastrar
                    onDragOver={handleDragOver} // Previene el comportamiento por defecto del navegador
                    onDragLeave={handleDragLeave}// Cambia el color de fondo al salir del área de arrastre
                    onDrop={handleDrop}// Maneja el evento de soltar los archivos
                >
                    <img className="preview" id="prw" src={preview} alt="preview" 
                     style={{
                      opacity: 0.5, // Ajusta la transparencia (0 a 1)
                      display: 'block', // Necesario para centrar con margin: auto
                      margin: 'auto', // Centra la imagen horizontalmente
                      maxWidth: '100%', // Asegura que la imagen no exceda el ancho del contenedor
                      maxHeight: '100%', // Asegura que la imagen no exceda el alto del contenedor
                      objectFit: 'contain' // Asegura que la imagen se ajuste dentro del contenedor sin distorsionarse
                  }}/>
                </div>

                <button type="submit">Subir</button>
            </form>
        </div>
    );  
}

export default ProjectForm;