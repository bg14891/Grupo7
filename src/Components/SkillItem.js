import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"; 

function SkillItem({ index, skill, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSkill, setEditedSkill] = useState(skill);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedSkill({
      ...editedSkill,
      [name]: value,
    });
  };

  const handleSaveEdit = () => {
    onEdit(index, editedSkill);
    setIsEditing(false);
  };

  return (
    <div className="skill-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="name"
            value={editedSkill.name}
            onChange={handleEditChange}
            className="input-edit"
          />
          <select
            name="category"
            value={editedSkill.category}
            onChange={handleEditChange}
            className="category-edit"
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Soft Skills">Soft Skills</option>
          </select>
          <div className="stars-container">
            {[...Array(5)].map((_, idx) => {
              if (editedSkill.level > idx) {
                return (
                  <FaStar
                    key={idx}
                    onClick={() => setEditedSkill({ ...editedSkill, level: idx + 1 })}
                    size={30}
                    color="#FFD700"
                  />
                );
              } else {
                return (
                  <FaStar
                    key={idx}
                    onClick={() => setEditedSkill({ ...editedSkill, level: idx + 1 })}
                    size={30}
                    color="#ccc"
                  />
                );
              }
            })}
          </div>
          <button onClick={handleSaveEdit} className="save-button">Guardar</button>
        </div>
      ) : (
        <div className="skill-info">
          <span>{skill.name}</span>
          <span>{`Nivel:`}</span>
          <div className="stars-container">
            {[...Array(5)].map((_, idx) => {
              return (
                <FaStar
                  key={idx}
                  size={20}
                  color={idx < skill.level ? "#FFD700" : "#ccc"}
                />
              );
            })}
          </div>
          <button onClick={() => onDelete(index)} className="delete-button">Eliminar</button>
          <button onClick={() => setIsEditing(true)} className="edit-button">Editar</button>
        </div>
      )}
    </div>
  );
}

export default SkillItem;

