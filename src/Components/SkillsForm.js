import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import SkillItem from "./SkillItem";
import "./SkillsForm.css";

const SkillsForm = () => {
    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState(1);
    const [category, setCategory] = useState("Frontend");
    const [skillsList, setSkillsList] = useState({
        Frontend: [],
        Backend: [],
        "Soft Skills": [],
    });

    useEffect(() => {
        const storedSkills = JSON.parse(localStorage.getItem("skills"));
        if (storedSkills && typeof storedSkills === 'object' && !Array.isArray(storedSkills)) {
            setSkillsList(storedSkills);
        } else {
            setSkillsList({
                Frontend: [],
                Backend: [],
                "Soft Skills": [],
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("skills", JSON.stringify(skillsList));
    }, [skillsList]);

    const handleAddSkill = () => {
        if (skill.trim() !== "") {
            const newSkill = { name: skill, level: level };
            setSkillsList(prevSkills => ({
                ...prevSkills,
                [category]: [...prevSkills[category], newSkill],
            }));
            setSkill("");
            setLevel(1);
        }
    };

    const handleDeleteSkill = (category, index) => {
        setSkillsList(prevSkills => ({
            ...prevSkills,
            [category]: prevSkills[category].filter((_, i) => i !== index),
        }));
    };

    const handleEditSkill = (category, index, updatedSkill) => {
        setSkillsList(prevSkills => ({
            ...prevSkills,
            [category]: prevSkills[category].map((skill, i) =>
                i === index ? updatedSkill : skill
            ),
        }));
    };

    return (
        <div className="skills-container">
            <h2>Mis Habilidades</h2>
            <div className="form-container">
                <input
                    type="text"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="Nombre de la habilidad"
                    className="input-field"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="category-select"
                >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Soft Skills">Soft Skills</option>
                </select>

                <div className="stars-container">
                    {[...Array(5)].map((_, idx) => {
                        if (level > idx) {
                            return (
                                <FaStar
                                    key={idx}
                                    className="star"
                                    onClick={() => setLevel(idx + 1)}
                                    size={30}
                                    color="#FFD700"
                                />
                            );
                        } else {
                            return (
                                <FaRegStar
                                    key={idx}
                                    className="star"
                                    onClick={() => setLevel(idx + 1)}
                                    size={30}
                                    color="#FFD700"
                                />
                            );
                        }
                    })}
                </div>

                <button onClick={handleAddSkill} className="add-button">Añadir Habilidad</button>
            </div>

            {Object.entries(skillsList).map(([categoryName, skills]) => (
                <div key={categoryName}>
                    <h3>{categoryName}</h3>
                    <div className="skills-list">
                        {skills.map((skill, index) => (
                            <SkillItem
                                key={index}
                                index={index}
                                skill={skill}
                                onDelete={() => handleDeleteSkill(categoryName, index)}
                                onEdit={(updatedSkill) => handleEditSkill(categoryName, index, updatedSkill)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsForm;
