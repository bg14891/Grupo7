import React, {useState} from 'react'
import ProjectForm from './ProjectForm';

function Portafolio(){
  const [recitext,setRecitext] = useState('');

const handleTextChange = (textarea) => {
  setRecitext(textarea);
};
console.log('handleTextChange:', handleTextChange); // Verifica la función antes de pasarla

return (
  <div>
    <ProjectForm onTextChange={handleTextChange}/>
    <p> Descripción Del Proyecto:{recitext} </p>
  </div>
)





}


export default Portafolio;

