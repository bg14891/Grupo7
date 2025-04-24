import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit, FaPlus, FaGraduationCap, FaUserTie, FaBriefcase, FaStar, FaRegStar, FaLanguage, FaQuoteLeft, FaUser, FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaGlobe, FaPhone, FaMapMarker, FaQuoteRight, FaProjectDiagram, FaImage } from 'react-icons/fa';
import './PersonalInfoForm.css';

const Preview = ({
  personalInfo,
  educations,
  experiences,
  projects,
  skills,
  languages,
  references,
  contactInfo,
  formatDate,
  renderStars,
  skillCategories,
  onEditSection
}) => {
  return (
    <div className="preview-container">
      {personalInfo.fullName && (
        <section className="preview-section">
          <div className="section-header">
            <h2><FaUserTie /> Información Personal</h2>
            <div className="section-actions">
              <button onClick={() => onEditSection('personal')} className="edit-button">
                <FaEdit /> Editar
              </button>
              <button onClick={() => onEditSection('personal', true)} className="delete-button">
                <FaTrash /> Borrar
              </button>
            </div>
          </div>
          <h3>{personalInfo.fullName}</h3>
          <p className="profession">{personalInfo.profession}</p>
          <p className="occupation">{personalInfo.occupation}</p>
          <div className="contact-info">
            {personalInfo.email && <div><FaEnvelope /> {personalInfo.email}</div>}
            {personalInfo.phone && <div><FaPhone /> {personalInfo.phone}</div>}
            {personalInfo.location && <div><FaMapMarker /> {personalInfo.location}</div>}
          </div>
        </section>
      )}

      {educations?.length > 0 && (
        <section className="preview-section">
          <div className="section-header">
            <h2><FaGraduationCap /> Educación</h2>
          </div>
          {educations.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="item-actions">
                <button onClick={() => onEditSection('education', false, index)} className="edit-button">
                  <FaEdit /> Editar
                </button>
                <button onClick={() => onEditSection('education', true, index)} className="delete-button">
                  <FaTrash /> Borrar
                </button>
              </div>
              {edu.institution && <p><strong>Institución:</strong> {edu.institution}</p>}
              {edu.degree && <p><strong>Título:</strong> {edu.degree}</p>}
              <p><strong>Periodo:</strong> {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Presente' : formatDate(edu.endDate)}</p>
              {edu.description && <p><strong>Descripción:</strong> {edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {experiences.length > 0 && (
        <section className="preview-section">
          <div className="section-header">
            <h2><FaBriefcase /> Experiencia Laboral</h2>
          </div>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="item-actions">
                <button onClick={() => onEditSection('experience', false, index)} className="edit-button">
                  <FaEdit /> Editar
                </button>
                <button onClick={() => onEditSection('experience', true, index)} className="delete-button">
                  <FaTrash /> Borrar
                </button>
              </div>
              <p><strong>Empresa:</strong> {exp.company}</p>
              <p><strong>Cargo:</strong> {exp.position}</p>
              <p><strong>Periodo:</strong> {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Presente' : formatDate(exp.endDate)}</p>
              {exp.responsibilities && <p><strong>Responsabilidades:</strong> {exp.responsibilities}</p>}
              {exp.achievements && <p><strong>Logros:</strong> {exp.achievements}</p>}
            </div>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section className="preview-section">
          <div className="section-header">
            <h2><FaProjectDiagram /> Proyectos</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="item-actions">
                  <button onClick={() => onEditSection('projects', false, index)} className="edit-button">
                    <FaEdit /> Editar
                  </button>
                  <button onClick={() => onEditSection('projects', true, index)} className="delete-button">
                    <FaTrash /> Borrar
                  </button>
                </div>
                <h3>{project.name}</h3>
                {project.description && <p><strong>Descripción:</strong> {project.description}</p>}
                {project.technologies && <p><strong>Tecnologías:</strong> {project.technologies}</p>}
                {project.link && (
                  <p>
                    <strong>Enlace:</strong> 
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.link}
                    </a>
                  </p>
                )}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="project-screenshots">
                    <strong>Capturas:</strong>
                    <div className="screenshots-grid">
                      {project.screenshots.map((screenshot, i) => (
                        <div key={i} className="screenshot-thumbnail">
                          <img 
                            src={screenshot} 
                            alt={`Captura ${i + 1} del proyecto ${project.name}`} 
                            onClick={() => window.open(screenshot, '_blank')}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section className="preview-section">
          <div className="section-header">
            <h2><FaStar /> Habilidades</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="item-actions">
                  <button onClick={() => onEditSection('skills', false, index)} className="edit-button">
                    <FaEdit /> Editar
                  </button>
                  <button onClick={() => onEditSection('skills', true, index)} className="delete-button">
                    <FaTrash /> Borrar
                  </button>
                </div>
                <p><strong>{skill.name}</strong> ({skill.category})</p>
                <div className="skill-level">{renderStars(skill.level)}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {languages.length > 0 && (
        <section className="preview-section">
          <div className="section-header">
            <h2><FaLanguage /> Idiomas</h2>
          </div>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <div className="item-actions">
                  <button onClick={() => onEditSection('languages', false, index)} className="edit-button">
                    <FaEdit /> Editar
                  </button>
                  <button onClick={() => onEditSection('languages', true, index)} className="delete-button">
                    <FaTrash /> Borrar
                  </button>
                </div>
                <p><strong>{lang.name}</strong> - {lang.level}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {references.length > 0 && (
        <section className="preview-section">
          <div className="section-header">
            <h2><FaQuoteLeft /> Referencias</h2>
          </div>
          <div className="references-grid">
            {references.map((ref, index) => (
              <div key={index} className="reference-item">
                <div className="item-actions">
                  <button onClick={() => onEditSection('references', false, index)} className="edit-button">
                    <FaEdit /> Editar
                  </button>
                  <button onClick={() => onEditSection('references', true, index)} className="delete-button">
                    <FaTrash /> Borrar
                  </button>
                </div>
                <p><strong>{ref.name}</strong> ({ref.relationship})</p>
                <p>"{ref.testimonial}"</p>
                {ref.contact && <p><strong>Contacto:</strong> {ref.contact}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {(contactInfo.email || contactInfo.linkedin || contactInfo.github || contactInfo.twitter || contactInfo.website) && (
        <section className="preview-section">
          <div className="section-header">
            <h2><FaEnvelope /> Contacto</h2>
            <div className="section-actions">
              <button onClick={() => onEditSection('contact')} className="edit-button">
                <FaEdit /> Editar
              </button>
              <button onClick={() => onEditSection('contact', true)} className="delete-button">
                <FaTrash /> Borrar
              </button>
            </div>
          </div>
          <div className="contact-info">
            {contactInfo.email && <div><FaEnvelope /> {contactInfo.email}</div>}
            {contactInfo.linkedin && <div><FaLinkedin /> {contactInfo.linkedin}</div>}
            {contactInfo.github && <div><FaGithub /> {contactInfo.github}</div>}
            {contactInfo.twitter && <div><FaTwitter /> {contactInfo.twitter}</div>}
            {contactInfo.website && <div><FaGlobe /> {contactInfo.website}</div>}
          </div>
        </section>
      )}
    </div>
  );
};

export default function PersonalInfoForm() {
  const navigate = useNavigate();
  const [editingIndex, setEditingIndex] = useState(null);

  // 1. Información Personal
  const { 
    register: registerPersonal, 
    handleSubmit: handlePersonalSubmit, 
    reset: resetPersonal,
    formState: { errors: personalErrors },
    setValue: setPersonalValue
  } = useForm();

  const [personalInfo, setPersonalInfo] = useState(() => {
    const savedInfo = localStorage.getItem('personalInfo');
    return savedInfo ? JSON.parse(savedInfo) : {};
  });

  useEffect(() => {
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
  }, [personalInfo]);

  const onPersonalSubmit = (data) => {
    setPersonalInfo(data);
    resetPersonal();
    setEditingIndex(null);
  };

  // 2. Educación
  const { 
    register: registerEducation, 
    handleSubmit: handleEducationSubmit, 
    reset: resetEducation,
    watch: watchEducation,
    setValue: setEducationValue
  } = useForm();

  const [educations, setEducations] = useState(() => {
    const saved = localStorage.getItem('educations');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('educations', JSON.stringify(educations));
  }, [educations]);

  const onEducationSubmit = (data) => {
    if (editingIndex !== null) {
      const updated = [...educations];
      updated[editingIndex] = data;
      setEducations(updated);
    } else {
      setEducations([...educations, data]);
    }
    resetEducation();
    setEditingIndex(null);
  };

  // 3. Experiencia
  const { 
    register: registerExperience, 
    handleSubmit: handleExperienceSubmit, 
    reset: resetExperience,
    watch: watchExperience,
    setValue: setExperienceValue
  } = useForm();

  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem('experiences');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('experiences', JSON.stringify(experiences));
  }, [experiences]);

  const onExperienceSubmit = (data) => {
    if (editingIndex !== null) {
      const updated = [...experiences];
      updated[editingIndex] = data;
      setExperiences(updated);
    } else {
      setExperiences([...experiences, data]);
    }
    resetExperience();
    setEditingIndex(null);
  };

  // 4. Proyectos
  const { 
    register: registerProject, 
    handleSubmit: handleProjectSubmit, 
    reset: resetProject,
    setValue: setProjectValue
  } = useForm();

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const onProjectSubmit = (data) => {
    if (data.screenshots && typeof data.screenshots === 'string') {
      data.screenshots = data.screenshots.split('\n').filter(url => url.trim() !== '');
    }

    if (editingIndex !== null) {
      const updated = [...projects];
      updated[editingIndex] = data;
      setProjects(updated);
    } else {
      setProjects([...projects, data]);
    }
    resetProject();
    setEditingIndex(null);
  };

  // 5. Habilidades
  const { 
    register: registerSkill, 
    handleSubmit: handleSkillSubmit, 
    reset: resetSkill,
    setValue: setSkillValue
  } = useForm();

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('skills');
    return saved ? JSON.parse(saved) : [];
  });

  const skillCategories = ['Frontend', 'Backend', 'Base de Datos', 'DevOps', 'Soft Skills'];

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  const onSkillSubmit = (data) => {
    if (editingIndex !== null) {
      const updated = [...skills];
      updated[editingIndex] = data;
      setSkills(updated);
    } else {
      setSkills([...skills, data]);
    }
    resetSkill();
    setEditingIndex(null);
  };

  // 6. Idiomas
  const { 
    register: registerLanguage, 
    handleSubmit: handleLanguageSubmit, 
    reset: resetLanguage,
    setValue: setLanguageValue
  } = useForm();

  const [languages, setLanguages] = useState(() => {
    const saved = localStorage.getItem('languages');
    return saved ? JSON.parse(saved) : [];
  });

  const languageLevels = ['Básico', 'Intermedio', 'Avanzado', 'Nativo'];

  useEffect(() => {
    localStorage.setItem('languages', JSON.stringify(languages));
  }, [languages]);

  const onLanguageSubmit = (data) => {
    if (editingIndex !== null) {
      const updated = [...languages];
      updated[editingIndex] = data;
      setLanguages(updated);
    } else {
      setLanguages([...languages, data]);
    }
    resetLanguage();
    setEditingIndex(null);
  };

  // 7. Referencias
  const { 
    register: registerReference, 
    handleSubmit: handleReferenceSubmit, 
    reset: resetReference,
    setValue: setReferenceValue
  } = useForm();

  const [references, setReferences] = useState(() => {
    const saved = localStorage.getItem('references');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('references', JSON.stringify(references));
  }, [references]);

  const onReferenceSubmit = (data) => {
    if (editingIndex !== null) {
      const updated = [...references];
      updated[editingIndex] = data;
      setReferences(updated);
    } else {
      setReferences([...references, data]);
    }
    resetReference();
    setEditingIndex(null);
  };

  // 8. Contacto
  const { 
    register: registerContact, 
    handleSubmit: handleContactSubmit, 
    reset: resetContact,
    formState: { errors: contactErrors },
    setValue: setContactValue
  } = useForm();

  const [contactInfo, setContactInfo] = useState(() => {
    const saved = localStorage.getItem('contactInfo');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
  }, [contactInfo]);

  const onContactSubmit = (data) => {
    setContactInfo(data);
    resetContact();
    setEditingIndex(null);
  };

  const renderStars = (level) => {
    return Array(5).fill(0).map((_, i) => 
      i < level ? <FaStar key={i} className="star-filled" /> : <FaRegStar key={i} className="star-empty" />
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Presente';
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const isValidUrl = (url) => {
    try { new URL(url); return true; } catch { return false; }
  };

  const handleEditFromPreview = (section, isDelete = false, index = null) => {
    if (isDelete) {
      if (section === 'personal') {
        setPersonalInfo({});
        localStorage.removeItem('personalInfo');
      } 
      else if (section === 'contact') {
        setContactInfo({});
        localStorage.removeItem('contactInfo');
      }
      else if (index !== null) {
        const updateState = {
          education: setEducations,
          experience: setExperiences,
          projects: setProjects,
          skills: setSkills,
          languages: setLanguages,
          references: setReferences
        };
        const currentData = {
          education: educations,
          experience: experiences,
          projects: projects,
          skills: skills,
          languages: languages,
          references: references
        };
        
        const updated = currentData[section].filter((_, i) => i !== index);
        updateState[section](updated);
      }
      return;
    }

    setEditingIndex(index);

    if (index !== null) {
      const data = {
        education: educations[index],
        experience: experiences[index],
        projects: projects[index],
        skills: skills[index],
        languages: languages[index],
        references: references[index]
      };
      
      const resetFunctions = {
        education: resetEducation,
        experience: resetExperience,
        projects: resetProject,
        skills: resetSkill,
        languages: resetLanguage,
        references: resetReference
      };
      
      resetFunctions[section](data[section]);

      if (section === 'projects' && data.projects.screenshots) {
        setProjectValue('screenshots', data.projects.screenshots.join('\n'));
      }
    } 
    else if (section === 'personal') {
      Object.entries(personalInfo).forEach(([key, value]) => {
        setPersonalValue(key, value);
      });
    } 
    else if (section === 'contact') {
      Object.entries(contactInfo).forEach(([key, value]) => {
        setContactValue(key, value);
      });
    }

    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="form-background">
      <div className="form-stack">
        <div className="form-sections-container">
          
          <div id="personal" className="form-container personal-info-container">
            <h2><FaUserTie /> Información Personal</h2>
            <form onSubmit={handlePersonalSubmit(onPersonalSubmit)}>
              <div className="form-group">
                <label>Nombre Completo*</label>
                <input
                  type="text"
                  {...registerPersonal('fullName', { required: 'Campo requerido' })}
                  placeholder="Tu nombre completo"
                />
                {personalErrors.fullName && <span className="error">{personalErrors.fullName.message}</span>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Profesión*</label>
                  <input
                    type="text"
                    {...registerPersonal('profession', { required: 'Campo requerido' })}
                    placeholder="Tu profesión"
                  />
                </div>
                
                <div className="form-group">
                  <label>Ocupación*</label>
                  <select
                    {...registerPersonal('occupation', { required: 'Campo requerido' })}
                  >
                    <option value="">Seleccione</option>
                    <option value="Estudiante">Estudiante</option>
                    <option value="Profesional">Profesional</option>
                    <option value="Independiente">Independiente</option>
                    <option value="Empleado">Empleado</option>
                    <option value="Desempleado">Desempleado</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  {...registerPersonal('email', { 
                    required: 'Campo requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                  placeholder="tu@email.com"
                />
                {personalErrors.email && <span className="error">{personalErrors.email.message}</span>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Teléfono*</label>
                  <input
                    type="tel"
                    {...registerPersonal('phone', { required: 'Campo requerido' })}
                    placeholder="Número de teléfono"
                  />
                </div>
                
                <div className="form-group">
                  <label>Ubicación*</label>
                  <input
                    type="text"
                    {...registerPersonal('location', { required: 'Campo requerido' })}
                    placeholder="Ciudad, País"
                  />
                </div>
              </div>
              
              <button type="submit" className="submit-button">
                {editingIndex !== null ? 'Actualizar' : 'Guardar'}
              </button>
            </form>
          </div>

          <div id="education" className="form-container education-container">
            <h2><FaGraduationCap /> Educación</h2>
            <form onSubmit={handleEducationSubmit(onEducationSubmit)}>
              <div className="form-group">
                <label>Institución*</label>
                <input
                  type="text"
                  {...registerEducation('institution', { required: 'Campo requerido' })}
                  placeholder="Nombre de la institución"
                />
              </div>
              
              <div className="form-group">
                <label>Título*</label>
                <input
                  type="text"
                  {...registerEducation('degree', { required: 'Campo requerido' })}
                  placeholder="Título obtenido"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Fecha Inicio*</label>
                  <input
                    type="date"
                    {...registerEducation('startDate', { required: 'Campo requerido' })}
                  />
                </div>
                
                <div className="form-group">
                  <label>Fecha Fin</label>
                  <input
                    type="date"
                    {...registerEducation('endDate')}
                    disabled={watchEducation('currentlyStudying')}
                  />
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      {...registerEducation('currentlyStudying')}
                    />
                    Actualmente estudiando
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label>Descripción</label>
                <textarea
                  {...registerEducation('description')}
                  rows="3"
                  placeholder="Logros, actividades relevantes..."
                />
              </div>
              
              <button type="submit" className="submit-button">
                {editingIndex !== null ? 'Actualizar' : 'Agregar'}
              </button>
            </form>
          </div>

          <div id="experience" className="form-container experience-container">
            <h2><FaBriefcase /> Experiencia Laboral</h2>
            <form onSubmit={handleExperienceSubmit(onExperienceSubmit)}>
              <div className="form-group">
                <label>Empresa*</label>
                <input
                  type="text"
                  {...registerExperience('company', { required: 'Campo requerido' })}
                  placeholder="Nombre de la empresa"
                />
              </div>
              
              <div className="form-group">
                <label>Posición*</label>
                <input
                  type="text"
                  {...registerExperience('position', { required: 'Campo requerido' })}
                  placeholder="Tu puesto de trabajo"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Fecha Inicio*</label>
                  <input
                    type="date"
                    {...registerExperience('startDate', { required: 'Campo requerido' })}
                  />
                </div>
                
                <div className="form-group">
                  <label>Fecha Fin</label>
                  <input
                    type="date"
                    {...registerExperience('endDate')}
                    disabled={watchExperience('currentlyWorking')}
                  />
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      {...registerExperience('currentlyWorking')}
                    />
                    Actualmente trabajo aquí
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label>Responsabilidades*</label>
                <textarea
                  {...registerExperience('responsibilities', { required: 'Campo requerido' })}
                  rows="3"
                  placeholder="Describe tus responsabilidades principales..."
                />
              </div>
              
              <div className="form-group">
                <label>Logros</label>
                <textarea
                  {...registerExperience('achievements')}
                  rows="2"
                  placeholder="Logros destacados en este puesto..."
                />
              </div>
              
              <button type="submit" className="submit-button">
                {editingIndex !== null ? 'Actualizar' : 'Agregar'}
              </button>
            </form>
          </div>

          <div id="projects" className="form-container projects-container">
            <h2><FaProjectDiagram /> Proyectos</h2>
            <form onSubmit={handleProjectSubmit(onProjectSubmit)}>
              <div className="form-group">
                <label>Nombre del Proyecto*</label>
                <input
                  type="text"
                  {...registerProject('name', { required: 'Campo requerido' })}
                  placeholder="Nombre del proyecto"
                />
              </div>
              
              <div className="form-group">
                <label>Descripción*</label>
                <textarea
                  {...registerProject('description', { required: 'Campo requerido' })}
                  rows="3"
                  placeholder="Descripción del proyecto, objetivos..."
                />
              </div>
              
              <div className="form-group">
                <label>Tecnologías Usadas*</label>
                <input
                  type="text"
                  {...registerProject('technologies', { required: 'Campo requerido' })}
                  placeholder="Ej: React, Node.js, MongoDB"
                />
              </div>
              
              <div className="form-group">
                <label>Enlace al Proyecto</label>
                <input
                  type="url"
                  {...registerProject('link', {
                    validate: v => !v || isValidUrl(v) || "URL inválida"
                  })}
                  placeholder="https://tusitio.com/proyecto"
                />
              </div>
              
              <div className="form-group">
                <label>Capturas de Pantalla (URLs)</label>
                <textarea
                  {...registerProject('screenshots')}
                  rows="3"
                  placeholder="Pega una URL por línea\nEj: https://ejemplo.com/imagen1.png\nhttps://ejemplo.com/imagen2.png"
                />
                <small className="help-text">Puedes subir imágenes a servicios como Imgur y pegar las URLs aquí</small>
              </div>
              
              <button type="submit" className="submit-button">
                {editingIndex !== null ? 'Actualizar' : 'Agregar'}
              </button>
            </form>
          </div>

          <div id="skills" className="form-container skills-container">
            <h2><FaStar /> Habilidades</h2>
            <form onSubmit={handleSkillSubmit(onSkillSubmit)}>
              <div className="form-group">
                <label>Nombre*</label>
                <input
                  type="text"
                  {...registerSkill('name', { required: 'Campo requerido' })}
                  placeholder="Ej: JavaScript, React"
                />
              </div>
              
              <div className="form-group">
                <label>Categoría*</label>
                <select
                  {...registerSkill('category', { required: 'Campo requerido' })}
                >
                  <option value="">Seleccione categoría</option>
                  {skillCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Nivel (1-5)*</label>
                <select
                  {...registerSkill('level', { 
                    required: 'Campo requerido',
                    valueAsNumber: true 
                  })}
                >
                  <option value="">Seleccione nivel</option>
                  <option value="1">1 - Básico</option>
                  <option value="2">2 - Principiante</option>
                  <option value="3">3 - Intermedio</option>
                  <option value="4">4 - Avanzado</option>
                  <option value="5">5 - Experto</option>
                </select>
              </div>
              
              <button type="submit" className="submit-button">
                {editingIndex !== null ? 'Actualizar' : 'Agregar'}
              </button>
            </form>
          </div>

          <div id="languages" className="form-container languages-container">
            <h2><FaLanguage /> Idiomas</h2>
            <form onSubmit={handleLanguageSubmit(onLanguageSubmit)}>
              <div className="form-group">
                <label>Idioma*</label>
                <input
                  type="text"
                  {...registerLanguage('name', { required: 'Campo requerido' })}
                  placeholder="Ej: Inglés, Francés"
                />
              </div>
              
              <div className="form-group">
                <label>Nivel*</label>
                <select
                  {...registerLanguage('level', { required: 'Campo requerido' })}
                >
                  <option value="">Seleccione nivel</option>
                  {languageLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              <button type="submit" className="submit-button">
                {editingIndex !== null ? 'Actualizar' : 'Agregar'}
              </button>
            </form>
          </div>

          <div id="references" className="form-container references-container">
            <h2><FaQuoteLeft /> Referencias</h2>
            <form onSubmit={handleReferenceSubmit(onReferenceSubmit)}>
              <div className="form-group">
                <label>Nombre*</label>
                <input
                  type="text"
                  {...registerReference('name', { required: 'Campo requerido' })}
                  placeholder="Nombre completo"
                />
              </div>
              
              <div className="form-group">
                <label>Relación*</label>
                <input
                  type="text"
                  {...registerReference('relationship', { required: 'Campo requerido' })}
                  placeholder="Ej: Jefe, Colega"
                />
              </div>
              
              <div className="form-group">
                <label>Testimonio*</label>
                <textarea
                  {...registerReference('testimonial', { required: 'Campo requerido' })}
                  rows="4"
                  placeholder="Lo que dice sobre tu trabajo..."
                />
              </div>
              
              <div className="form-group">
                <label>Contacto</label>
                <input
                  type="text"
                  {...registerReference('contact')}
                  placeholder="Email o teléfono"
                />
              </div>
              
              <button type="submit" className="submit-button">
                {editingIndex !== null ? 'Actualizar' : 'Agregar'}
              </button>
            </form>
          </div>

          <div id="contact" className="form-container contact-container">
            <h2><FaEnvelope /> Contacto</h2>
            <form onSubmit={handleContactSubmit(onContactSubmit)}>
              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  {...registerContact('email', { 
                    required: 'Campo requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                  placeholder="tu@email.com"
                />
                {contactErrors.email && <span className="error">{contactErrors.email.message}</span>}
              </div>
              
              <div className="form-group">
                <label>LinkedIn</label>
                <input
                  type="url"
                  {...registerContact('linkedin', {
                    validate: v => !v || isValidUrl(v) || "URL inválida"
                  })}
                  placeholder="https://linkedin.com/in/tu-perfil"
                />
              </div>
              
              <div className="form-group">
                <label>GitHub</label>
                <input
                  type="url"
                  {...registerContact('github', {
                    validate: v => !v || isValidUrl(v) || "URL inválida"
                  })}
                  placeholder="https://github.com/tu-usuario"
                />
              </div>
              
              <div className="form-group">
                <label>Sitio Web</label>
                <input
                  type="url"
                  {...registerContact('website', {
                    validate: v => !v || isValidUrl(v) || "URL inválida"
                  })}
                  placeholder="https://tu-portafolio.com"
                />
              </div>
              
              <button type="submit" className="submit-button">
                {editingIndex !== null ? 'Actualizar' : 'Guardar'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Preview
        personalInfo={personalInfo}
        educations={educations}
        experiences={experiences}
        projects={projects}
        skills={skills}
        languages={languages}
        references={references}
        contactInfo={contactInfo}
        formatDate={formatDate}
        renderStars={renderStars}
        skillCategories={skillCategories}
        onEditSection={handleEditFromPreview}
      />

      <button onClick={() => navigate('/')} className="back-button">
        Volver al Inicio
      </button>
    </div>
  );
}