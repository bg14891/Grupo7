import React, { useState, useEffect, useRef} from 'react';
import './Proyect.css';
import previe from '../Components/imagenes/preview.png'


function ProjectForm({onTextChange}) {
  const [arrastrar, setarrastrar] = useState(false);
  const [files, setFiles] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [textarea, settextarea] = useState('');

  /*useEffect(() => {
    console.log('TextChange prop received in ProjectForm:', onTextChange); // Verificar la prop
  }, [onTextChange]); */

  
  const handleChange = (e) => {
    settextarea(e.target.value);
    //console.log('TextChange received:', onTextChange); // Verifica la prop recibida
    //console.log('Value to send:', e.target.value); // Verificar el valor del evento
    onTextChange(e.target.value);
  };
  



  useEffect(() => {
    if (files.length === 0) {
      setImagesUrl([]); // Limpia la vista previa si no hay archivos
      return;
    }
    const imagesPreview = files.map((file) => URL.createObjectURL(file));
    setImagesUrl(imagesPreview);
    return () => {
      imagesUrl.forEach((image) => URL.revokeObjectURL(image));
    };
  }, [files]);

  function handleDragOver(event) {
    event.preventDefault();
    setarrastrar(true);
  }

  function handleDragLeave() {
    setarrastrar(false);
  }

  function handleDrop(event) {{/*su función es evitar el comportamiento predeterminado del navegador cuando se suelta un archivo*/}
    event.preventDefault();
    setarrastrar(false);
    handleFiles(Array.from(event.dataTransfer.files));   
  }

  function handleFiles(fileList) {/* permite que el area pueda  capturar las imagenes  */
    if (!fileList.every((file) => file.type.startsWith('image/'))) {
      setFiles([]);
      return;
    }
    setFiles(fileList);
    }
  

  function handleFileChange(event) {
    handleFiles(Array.from(event.target.files));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Seccion De Proyectos</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="nombre">Nombre Del Proyecto:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="form">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" value={textarea} onChange={handleChange}></textarea>
        </div>
        <div className="form">
          <label htmlFor="tecnologias">Tecnologías Usadas:</label>
          <input type="text" id="tecnologias" name="tecnologias" />
        </div>
        
        <label For="url" className="imgbtn">
              Selecciona una Imagen
            </label>    
        
        {imagesUrl.length === 0 ? ( // si imgnURL esta vacia, se renderiza el form 
          <div className="form">
            <input
              className="img"
              accept="image/*"
              multiple
              type="file"
              id="url"
              name="imagen"
              onChange={handleFileChange} 
            />
          </div>
        ) : ( // si img no esta vacio se renderiza un div con estilos para img, el metodo .map,
          <div className='contenedor-imagenes'> 
            {imagesUrl.map((image, index) => (
              <img src={image}
               key={index} 
               alt={`preview-${index}`} 
               className="imagen-estilizada"/>

            ))}
          </div>
          
        )}
 
        <div // cambia de estado al area.
          className="area"
          style={{ backgroundColor: arrastrar ? 'lightgray' : 'white' }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>      
          <img className="preview" id="prw" src= {''} alt="preview" />
        </div>
       
        <button type="submit">Subir</button>
      </form>
    </div>
  );
}

export default ProjectForm;
