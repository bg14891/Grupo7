 import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit, FaPlus, FaGraduationCap, FaUserTie, FaBriefcase, FaStar, FaRegStar, FaLanguage, FaQuoteLeft, FaUser, FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaGlobe, FaPhone,FaMapMarker, FaQuoteRight} from 'react-icons/fa';
import './PersonalInfoForm.css';

const Preview = ({
  personalInfo,
  educations,
  experiences,
  skills,
  languages,
  references,
  contactInfo,
  formatDate,
  renderStars,
  skillCategories
}) => {
  return (
    
    <div className="preview-container">
      {/* Sección de Información Personal */}
      <section className="preview-section">
        <h4>{"Vista Previa"}</h4>
        <h2 >{"Portafolio Profecional"}</h2>
        <h4>{personalInfo.fullName}</h4>
        <p className="profession">{personalInfo.profession}</p>
        <p className="occupation">{personalInfo.occupation}</p>
        <div className="contact-info">
          {personalInfo.email && <div><FaEnvelope /> {personalInfo.email}</div>}
          {personalInfo.phone && <div><FaPhone /> {personalInfo.phone}</div>}
          {personalInfo.location && <div><FaMapMarker /> {personalInfo.location}</div>}
        </div>
      </section>

      {/* Educación */}
      {educations?.length > 0 && (
        <section className="preview-section">
          <h2><FaGraduationCap /> Educación</h2>
          {educations.map((edu, index) => (
            <div key={index} className="education-item">
              {edu.institution && (
                <div className="responsibilities">
                  <h4>Instituto:</h4>
                  <p>{edu.institution}</p>
                </div>
              )}
              {edu.degree && (
                <div className="institution">
                  <h4>Titulo:</h4>
                  <p>{edu.degree}</p>
                </div>
              )}
              <p className="dates">
                {formatDate(edu?.startDate)} - {edu?.currentlyStudying ? 'Presente' : formatDate(edu?.endDate)}
              </p>
              {edu?.description && <p className="description">{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Experiencia Laboral */}
      {experiences.length > 0 && (
        <section className="preview-section">
          <h2><FaBriefcase /> Experiencia Laboral</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.position}</h3>
              <p className="company">{exp.company}</p>
              <p className="dates">
                {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Presente' : formatDate(exp.endDate)}
              </p>
              {exp.startDate && (
                <div className="responsibilities">
                  <h4>Fecha De Inicio:</h4>
                  <p>{exp.startDate}</p>
                </div>
              )}
               {exp.endDate && (
                <div className="responsibilities">
                  <h4>Fecha Final:</h4>
                  <p>{exp.endDate}</p>
                </div>
              )}
              {exp.responsibilities && (
                <div className="responsibilities">
                  <h4>Responsabilidades:</h4>
                  <p>{exp.responsibilities}</p>
                </div>
              )}
               {exp.achievements && (
                <div className="responsibilities">
                  <h4>Logros:</h4>
                  <p>{exp.achievements}</p>
                </div>
              )}
             
            </div>
          ))}
        </section>
      )}

      {/* Habilidades */}
      {skills.length > 0 && (
        <section className="preview-section">
          <h2><FaStar /> Habilidades</h2>
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills ?.filter(skill => skill ?.category === category);
            return categorySkills.length > 0 && (
              <div key={catIndex} className="skill-category">
                <h4>{category}</h4>
                <div className="skills-grid">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <span className="skill-name">{skill ?.name}</span>
                      <div className="skill-level">{renderStars(skill ?.level || 1)}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* Idiomas */}
      {languages.length > 0 && (
        <section className="preview-section">
          <h2><FaLanguage /> Idiomas</h2>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="language-name">{lang.name}</span>
                {lang.level && (
                <div className="responsibilities">
                  <h4>Nivel:</h4>
                  <p>{lang.level}</p>
                </div>
              )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Referencias */}
      {references.length > 0 && (
        <section className="preview-section">
          <h2><FaQuoteLeft />Referencias<FaQuoteRight /></h2>
          <div className="references-grid">
            {references.map((ref, index) => (
              <div key={index} className="reference-item">
                <div className="quote-icon"></div>
                <div className="reference-footer">

                  {ref.name && (
                <div className="reference-name">
                  <h4>Nombre :</h4>
                  <p>{ref.name}</p>
                </div>
              )}
               {ref.relationship && (
                <div className="reference-relationship">
                  <h4>Relación :</h4>
                  <p>{ref.relationship}</p>
                </div>
              )}
               {ref.testimonial && (
                <div className="reference-relationship">
                  <h4>Testimonio :</h4>
                  <p>{ref.testimonial}</p>
                </div>
              )}
              {ref.contsact &&(
                <div className="reference-contact">
                  <h4>Contacto :</h4>
                  <p>{ref.contact}</p>
                </div>
              )}
              </div>
              </div>
            ))}
          </div>
        </section>
      )}





      {/* Contacto */}
      {(contactInfo.email || contactInfo.linkedin || contactInfo.github || contactInfo.twitter || contactInfo.website) && (
        <section className="preview-section">
          <h2><FaEnvelope /> Información De Contacto</h2>
          <div className="contact-badges">
            
            {contactInfo.email &&(
                <div className="reference-contact">
                  <h4>Email:</h4>
                  <a href={`mailto:${contactInfo.email}`} className="contact-badge">
                  <FaEnvelope /> {contactInfo.email}
                    </a>
                </div>
              )}
            {contactInfo.linkedin && (
              <div className='reference-contact'>
                <h4>LinkedIn</h4>
              <a href={contactInfo.linkedin} className="contact-badge">
                <FaLinkedin /> {contactInfo.linkedin}
              </a>
              </div>
            )}
            {contactInfo.github && (
              <div className='reference-contact'>
                <h4>GitHub</h4>
              <a href={contactInfo.github} className="contact-badge">
                <FaGithub /> {contactInfo.github}
              </a>
              </div>
            )}
            {contactInfo.twitter && (
              <div className='reference-contact'>
                <h4>Twitter</h4>
              <a href={contactInfo.twitter} className="contact-badge">
                <FaTwitter /> {contactInfo.twitter}
              </a>
              </div>
            )}
            {contactInfo.website && (
              <div className='reference-contact'>
                <h4>Website</h4>
              <a href={contactInfo.website} className="contact-badge">
                <FaGlobe /> {contactInfo.website}
              </a>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

////


export default function PersonalInfoForm() {
  const navigate = useNavigate();

  // 1. Sección de Información Personal
  const { register: registerPersonal, handleSubmit: handlePersonalSubmit, reset: resetPersonal,
     watch: watchPersonal } = useForm();
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    const subscription = watchPersonal((value) => {
      setPersonalInfo(value);
      localStorage.setItem('personalInfo', JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watchPersonal]);


  // 2. Sección de Educación
  const { register: registerEducation, handleSubmit: handleEducationSubmit, reset: resetEducation,
    watch: watchEducations } = useForm();
    const [editingIndex, setEditingIndex] = useState(null);
   const [educations, setEducations] = useState(() => {
    try {
      const savedEducations = localStorage.getItem('educations');
      return savedEducations ? JSON.parse(savedEducations) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    const subscription = watchEducations((value) => {
      const currentEducations = Array.isArray(educations) ? educations : [];
      const updatedEducations = [...currentEducations, value];
      setEducations(updatedEducations);
      localStorage.setItem('educations', JSON.stringify(updatedEducations));
    });
    return () => subscription.unsubscribe();
  }, [watchEducations]);
  
  
  // 3. Sección de Experiencia Laboral
  const { register: registerExperience, handleSubmit: handleExperienceSubmit, reset: resetExperience } = useForm();
  const [experiences, setExperiences] = useState([]);
  const [editingExpIndex, setEditingExpIndex] = useState(null);

  // 4. Sección de Habilidades
  const { register: registerSkill, handleSubmit: handleSkillSubmit, reset: resetSkill } = useForm();
  const [skills, setSkills] = useState(() => {
    try {
    const savedSkills = localStorage.getItem('skills');
    return savedSkills ? JSON.parse(savedSkills) : [];
    }
    catch (error) {
    return []; 
  }
  });



  const [editingSkillIndex, setEditingSkillIndex] = useState(null);
  const [skillCategories] = useState(['Frontend', 'Backend', 'Base de Datos', 'DevOps', 'Soft Skills']);

  // 5. Sección de Idiomas
  const { register: registerLanguage, handleSubmit: handleLanguageSubmit, reset: resetLanguage } = useForm();
  const [languages, setLanguages] = useState([]);
  const [editingLanguageIndex, setEditingLanguageIndex] = useState(null);
  const languageLevels = ['Básico', 'Intermedio', 'Avanzado', 'Nativo'];

  // 6. Sección de Referencias Profesionales
  const { 
    register: registerReference, 
    handleSubmit: handleReferenceSubmit, 
    reset: resetReference,
    formState: { isSubmitSuccessful }
  } = useForm();
  const [references, setReferences] = useState([]);
  const [editingReferenceIndex, setEditingReferenceIndex] = useState(null);

  


  // 7. Sección de Contacto (versión mejorada)
  const { 
    register: registerContact, 
    handleSubmit: handleContactSubmit, 
    reset: resetContact,
    formState: { errors: contactErrors },
    watch: watchContact
  } = useForm();
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    const subscription = watchContact((value) => {
      setContactInfo(value);
      localStorage.setItem('contactInfo', JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watchContact]);



  // Cargar datos al iniciar
  useEffect(() => {
    const savedPersonalInfo = localStorage.getItem('personalInfo');
    const savedEducations = localStorage.getItem('educations');
    const savedExperiences = localStorage.getItem('experiences');
    const savedSkills = localStorage.getItem('skills');
    const savedLanguages = localStorage.getItem('languages');
    const savedReferences = localStorage.getItem('references');
    const savedContactInfo = localStorage.getItem('contactInfo');
    
    if (savedPersonalInfo) setPersonalInfo(JSON.parse(savedPersonalInfo));
    if (savedEducations) setEducations(JSON.parse(savedEducations));
    if (savedExperiences) setExperiences(JSON.parse(savedExperiences));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
    if (savedLanguages) setLanguages(JSON.parse(savedLanguages));
    if (savedReferences) setReferences(JSON.parse(savedReferences));
    if (savedContactInfo) setContactInfo(JSON.parse(savedContactInfo));
  }, []);

  // Resetear formulario de referencias cuando el submit es exitoso
  useEffect(() => {
    if (isSubmitSuccessful) {
      resetReference({
        name: '',
        relationship: '',
        testimonial: '',
        contact: ''
      });
    }
  }, [isSubmitSuccessful, resetReference]);

  // Guardar información personal
  const onPersonalSubmit = (data) => {
    localStorage.setItem('personalInfo', JSON.stringify(data));
    setPersonalInfo(data);
    resetPersonal();
  };

  // Guardar educación
  const onEducationSubmit = (data) => {
    const currentEducations = Array.isArray(educations) ? educations : [];
    const updatedEducations = editingIndex !== null ? 
      currentEducations.map((edu, i) => i === editingIndex 
      ? data : edu) : 
      [...currentEducations, data];
    
    setEducations(updatedEducations);
    localStorage.setItem('educations', JSON.stringify(updatedEducations));
    resetEducation();
    setEditingIndex(null);
  };

  // Guardar experiencia laboral
  const onExperienceSubmit = (data) => {
    const updatedExperiences = editingExpIndex !== null ? 
      experiences.map((exp, i) => i === editingExpIndex ? data : exp) : 
      [...experiences, data];
    
    updatedExperiences.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    
    setExperiences(updatedExperiences);
    localStorage.setItem('experiences', JSON.stringify(updatedExperiences));
    resetExperience();
    setEditingExpIndex(null);
  };

  // Guardar habilidad
  const onSkillSubmit = (data) => {
    const currentSkills = Array.isArray(skills) ? skills : []; // Validación extra
    const updatedSkills = editingSkillIndex !== null ? 
      currentSkills.map((skill, i) => i === editingSkillIndex ? data : skill) : 
      [...currentSkills, data];
    
    setSkills(updatedSkills);
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
    resetSkill();
    setEditingSkillIndex(null);
  };

  // Guardar idioma
  const onLanguageSubmit = (data) => {
    const updatedLanguages = editingLanguageIndex !== null ? 
      languages.map((lang, i) => i === editingLanguageIndex ? data : lang) : 
      [...languages, data];
    
    setLanguages(updatedLanguages);
    localStorage.setItem('languages', JSON.stringify(updatedLanguages));
    resetLanguage();
    setEditingLanguageIndex(null);
  };

  // Guardar referencia
  const onReferenceSubmit = (data) => {
    const updatedReferences = editingReferenceIndex !== null ? 
      references.map((ref, i) => i === editingReferenceIndex ? data : ref) : 
      [...references, data];
    
    setReferences(updatedReferences);
    localStorage.setItem('references', JSON.stringify(updatedReferences));
    setEditingReferenceIndex(null);
  };

  // Guardar información de contacto (versión mejorada)
  const onContactSubmit = (data) => {
    localStorage.setItem('contactInfo', JSON.stringify(data));
    setContactInfo(data);
  };

  // Validar URL
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Manejo de educación
  const handleEditEducation = (index) => {
    setEditingIndex(index);
    resetEducation(educations[index]);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
    localStorage.setItem('educations', JSON.stringify(updatedEducations));
  };

  // Manejo de experiencia laboral
  const handleEditExperience = (index) => {
    setEditingExpIndex(index);
    resetExperience(experiences[index]);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
    localStorage.setItem('experiences', JSON.stringify(updatedExperiences));
  };

  // Manejo de habilidades
  const handleEditSkill = (index) => {
    setEditingSkillIndex(index);
    resetSkill(skills[index]);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
  };

  // Manejo de idiomas
  const handleEditLanguage = (index) => {
    setEditingLanguageIndex(index);
    resetLanguage(languages[index]);
  };

  const handleDeleteLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
    localStorage.setItem('languages', JSON.stringify(updatedLanguages));
  };

  // Manejo de referencias
  const handleEditReference = (index) => {
    setEditingReferenceIndex(index);
    resetReference(references[index]);
  };

  const handleDeleteReference = (index) => {
    const updatedReferences = references.filter((_, i) => i !== index);
    setReferences(updatedReferences);
    localStorage.setItem('references', JSON.stringify(updatedReferences));
  };

  // Funciones de cancelar
  const handleCancelEdit = () => {
    setEditingIndex(null);
    resetEducation();
  };

  const handleCancelExpEdit = () => {
    setEditingExpIndex(null);
    resetExperience();
  };

  const handleCancelSkillEdit = () => {
    setEditingSkillIndex(null);
    resetSkill();
  };

  const handleCancelLanguageEdit = () => {
    setEditingLanguageIndex(null);
    resetLanguage();
  };

  const handleCancelReferenceEdit = () => {
    setEditingReferenceIndex(null);
    resetReference({
      name: '',
      relationship: '',
      testimonial: '',
      contact: ''
    });
  };

  // Renderizar estrellas de habilidad
  const renderStars = (level) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= level ? 
        <FaStar key={i} className="star-filled" /> : 
        <FaRegStar key={i} className="star-empty" />
      );
    }
    return stars;
  };

  // Formatear fecha
  const formatDate = (dateString) => {
    if (!dateString) return 'Presente';
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Renderizar nivel de idioma
  const renderLanguageLevel = (level) => {
    switch(level) {
      case 'Básico':
        return <span className="language-level basic">{level}</span>;
      case 'Intermedio':
        return <span className="language-level intermediate">{level}</span>;
      case 'Avanzado':
        return <span className="language-level advanced">{level}</span>;
      case 'Nativo':
        return <span className="language-level native">{level}</span>;
      default:
        return <span className="language-level">{level}</span>;
    }
  };

  return (
    <div className="form-background">
       <div className="form-stack">
       <div className="form-sections-container">

      {/* 1. Sección de Información Personal */}
      <div className="form-container personal-info-container">
        <h2><FaUserTie /> Información Personal</h2>
        <form onSubmit={handlePersonalSubmit(onPersonalSubmit)}>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              {...registerPersonal('fullName')}
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Profesión</label>
              <input
                type="text"
                {...registerPersonal('profession')}
                placeholder="Tu profesión"
              />
            </div>

            <div className="form-group">
              <label>Ocupación</label>
              <select {...registerPersonal('occupation')}>
                <option value="">Seleccione una opción</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Profesional">Profesional</option>
                <option value="Independiente">Independiente</option>
                <option value="Empleado">Empleado</option>
                <option value="Desempleado">Desempleado</option>
                <option value="Jubilado">Jubilado</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...registerPersonal('email')}
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="tel"
                {...registerPersonal('phone')}
                placeholder="Número de teléfono"
              />
            </div>

            <div className="form-group">
              <label>Ubicación</label>
              <input
                type="text"
                {...registerPersonal('location')}
                placeholder="Ciudad, País"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">Guardar Información</button>
        </form>
      </div>

      {/* 2. Sección de Educación */}
      <div className="form-container education-container">
        <h2><FaGraduationCap /> Formación Académica</h2>
        
        <form onSubmit={handleEducationSubmit(onEducationSubmit)} className="education-form">
          <div className="form-row">
            <div className="form-group">
              <label>Institución</label>
              <input
                type="text"
                {...registerEducation('institution')}
                placeholder="Nombre de la institución"
              />
            </div>

            <div className="form-group">
              <label>Título</label>
              <input
                type="text"
                {...registerEducation('degree')}
                placeholder="Título obtenido"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Fecha Inicio</label>
              <input
                type="date"
                {...registerEducation('startDate')}
              />
            </div>

            <div className="form-group">
              <label>Fecha Fin</label>
              <input
                type="date"
                {...registerEducation('endDate')}
                disabled={editingIndex !== null && educations[editingIndex]?.currentlyStudying}
              />
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="currentlyStudying"
                  {...registerEducation('currentlyStudying')}
                />
                <label htmlFor="currentlyStudying">Actualmente estudiando</label>
              </div>
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

          <div className="form-buttons">
            <button type="submit" className="submit-button">
              {editingIndex !== null ? <><FaEdit /> Actualizar</> : <><FaPlus /> Agregar</>}
            </button>
            {editingIndex !== null && (
              <button type="button" onClick={handleCancelEdit} className="cancel-button">
                Cancelar
              </button>
            )}
          </div>
        </form>

        {educations?.length > 0 && (
          <div className="education-list">
            <h3>Historial Académico</h3>
            {educations?.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="card-header">
                  <h4>{edu?.degree}</h4>
                  <div className="card-actions">
                    <button onClick={() => handleEditEducation(index)} className="edit-button">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDeleteEducation(index)} className="delete-button">
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="institution">{edu?.institution}</p>
                <p className="dates">
                  {formatDate(edu?.startDate)} - {edu?.currentlyStudying ? 'Presente' : formatDate(edu?.endDate)}
                </p>
                {edu?.description && <p className="description">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. Sección de Experiencia Laboral */}
      <div className="form-container experience-container">
        <h2><FaBriefcase /> Experiencia Laboral</h2>
        
        <form onSubmit={handleExperienceSubmit(onExperienceSubmit)} className="experience-form">
          <div className="form-row">
            <div className="form-group">
              <label>Empresa</label>
              <input
                type="text"
                {...registerExperience('company')}
                placeholder="Nombre de la empresa"
              />
            </div>

            <div className="form-group">
              <label>Cargo/Posición</label>
              <input
                type="text"
                {...registerExperience('position')}
                placeholder="Tu puesto de trabajo"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Fecha Inicio</label>
              <input
                type="date"
                {...registerExperience('startDate')}
              />
            </div>

            <div className="form-group">
              <label>Fecha Fin</label>
              <input
                type="date"
                {...registerExperience('endDate')}
                disabled={editingExpIndex !== null && experiences[editingExpIndex]?.currentlyWorking}
              />
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="currentlyWorking"
                  {...registerExperience('currentlyWorking')}
                />
                <label htmlFor="currentlyWorking">Actualmente trabajo aquí</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Responsabilidades</label>
            <textarea
              {...registerExperience('responsibilities')}
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

          <div className="form-buttons">
            <button type="submit" className="submit-button">
              {editingExpIndex !== null ? <><FaEdit /> Actualizar</> : <><FaPlus /> Agregar</>}
            </button>
            {editingExpIndex !== null && (
              <button type="button" onClick={handleCancelExpEdit} className="cancel-button">
                Cancelar
              </button>
            )}
          </div>
        </form>

        {experiences.length > 0 && (
          <div className="experience-list">
            <h3>Historial Laboral</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="card-header">
                  <h4>{exp.position} - {exp.company}</h4>
                  <div className="card-actions">
                    <button onClick={() => handleEditExperience(index)} className="edit-button">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDeleteExperience(index)} className="delete-button">
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="dates">
                  {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Presente' : formatDate(exp.endDate)}
                </p>
                <div className="responsibilities">
                  <h5>Responsabilidades:</h5>
                  <p>{exp.responsibilities}</p>
                </div>
                {exp.achievements && (
                  <div className="achievements">
                    <h5>Logros:</h5>
                    <p>{exp.achievements}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Sección de Habilidades */}
      <div className="form-container skills-container">
        <h2><FaStar /> Habilidades</h2>
        
        <form onSubmit={handleSkillSubmit(onSkillSubmit)} className="skills-form">
          <div className="form-row">
            <div className="form-group">
              <label>Nombre de la Habilidad</label>
              <input
                type="text"
                {...registerSkill('name')}
                placeholder="Ej: JavaScript, React, Comunicación"
              />
            </div>

            <div className="form-group">
              <label>Categoría</label>
              <select {...registerSkill('category')}>
                <option value="">Seleccione categoría</option>
                {skillCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Nivel (1-5)</label>
            <select {...registerSkill('level', { valueAsNumber: true })}>
              <option value="">Seleccione nivel</option>
              <option value="1">1 - Básico</option>
              <option value="2">2 - Principiante</option>
              <option value="3">3 - Intermedio</option>
              <option value="4">4 - Avanzado</option>
              <option value="5">5 - Experto</option>
            </select>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">
              {editingSkillIndex !== null ? <><FaEdit /> Actualizar</> : <><FaPlus /> Agregar</>}
            </button>
            {editingSkillIndex !== null && (
              <button type="button" onClick={handleCancelSkillEdit} className="cancel-button">
                Cancelar
              </button>
            )}
          </div>
        </form>

        {skills ?.length > 0 && (
          <div className="skills-list">
            <h3>Tus Habilidades</h3>
            {skillCategories.map((category, catIndex) => {
              const categorySkills = skills ?.filter(skill => skill.category === category) || [];
              if (categorySkills.length === 0) return null;
              
              return (
                categorySkills.length > 0 && (
                <div key={catIndex} className="skills-category">
                  <h4>{category}</h4>
                  <div className="skills-grid">
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="skill-card">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <div className="skill-actions">
                            <button onClick={() => handleEditSkill(skills.findIndex(s => s === skill))} className="edit-button">
                              <FaEdit />
                            </button>
                            <button onClick={() => handleDeleteSkill(skills.findIndex(s => s === skill))} className="delete-button">
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                        <div className="skill-level">
                          {renderStars(skill.level)}
                          <span className="level-text">
                            {skill.level === 1 && 'Básico'}
                            {skill.level === 2 && 'Principiante'}
                            {skill.level === 3 && 'Intermedio'}
                            {skill.level === 4 && 'Avanzado'}
                            {skill.level === 5 && 'Experto'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                )
              );
            })}
          </div>
          )}
      </div>

      {/* 5. Sección de Idiomas */}
      <div className="form-container languages-container">
        <h2><FaLanguage /> Idiomas</h2>
        
        <form onSubmit={handleLanguageSubmit(onLanguageSubmit)} className="languages-form">
          <div className="form-row">
            <div className="form-group">
              <label>Idioma</label>
              <input
                type="text"
                {...registerLanguage('name')}
                placeholder="Ej: Inglés, Francés, Español"
              />
            </div>

            <div className="form-group">
              <label>Nivel</label>
              <select {...registerLanguage('level')}>
                <option value="">Seleccione nivel</option>
                {languageLevels.map((level, index) => (
                  <option key={index} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">
              {editingLanguageIndex !== null ? <><FaEdit /> Actualizar</> : <><FaPlus /> Agregar</>}
            </button>
            {editingLanguageIndex !== null && (
              <button type="button" onClick={handleCancelLanguageEdit} className="cancel-button">
                Cancelar
              </button>
            )}
          </div>
        </form>

        {languages.length > 0 && (
          <div className="languages-list">
            <h3>Tus Idiomas</h3>
            <div className="languages-grid">
              {languages.map((language, index) => (
                <div key={index} className="language-card">
                  <div className="language-header">
                    <h4>{language.name}</h4>
                    <div className="language-actions">
                      <button onClick={() => handleEditLanguage(index)} className="edit-button">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDeleteLanguage(index)} className="delete-button">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="language-level-container">
                    {renderLanguageLevel(language.level)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 6. Sección de Referencias Profesionales */}
      <div className="form-container references-container">
        <h2><FaQuoteLeft /> Referencias Profesionales</h2>
        
        <form 
          onSubmit={handleReferenceSubmit(onReferenceSubmit)} 
          className="references-form"
          key={references.length}
        >
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                {...registerReference('name')}
                placeholder="Nombre completo"
                defaultValue=""
              />
            </div>

            <div className="form-group">
              <label>Relación</label>
              <input
                type="text"
                {...registerReference('relationship')}
                placeholder="Ej: Jefe, Colega, Cliente"
                defaultValue=""
              />
            </div>
          </div>

          <div className="form-group">
            <label>Testimonio</label>
            <textarea
              {...registerReference('testimonial')}
              rows="4"
              placeholder="Lo que esta persona dice sobre tu trabajo..."
              defaultValue=""
            />
          </div>

          <div className="form-group">
            <label>Contacto (opcional)</label>
            <input
              type="text"
              {...registerReference('contact')}
              placeholder="Email o teléfono"
              defaultValue=""
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">
              {editingReferenceIndex !== null ? <><FaEdit /> Actualizar</> : <><FaPlus /> Agregar</>}
            </button>
            {editingReferenceIndex !== null && (
              <button 
                type="button" 
                onClick={handleCancelReferenceEdit} 
                className="cancel-button"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        {references.length > 0 && (
          <div className="references-list">
            <h3>Tus Referencias</h3>
            <div className="references-grid">
              {references.map((reference, index) => (
                <div key={index} className="reference-card">
                  <div className="reference-header">
                    <div className="reference-avatar">
                      <FaUser />
                    </div>
                    <div>
                      <h4>{reference.name}</h4>
                      <p className="reference-relationship">{reference.relationship}</p>
                    </div>
                    <div className="reference-actions">
                      <button onClick={() => handleEditReference(index)} className="edit-button">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDeleteReference(index)} className="delete-button">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="reference-testimonial">
                    <FaQuoteLeft className="quote-icon" />
                    <p>{reference.testimonial}</p>
                  </div>
                  {reference.contact && (
                    <div className="reference-contact">
                      <strong>Contacto:</strong> {reference.contact}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 7. Sección de Contacto - Versión Mejorada */}
      <div className="form-container contact-container">
        <h2><FaEnvelope /> Información de Contacto</h2>
        
        <form onSubmit={handleContactSubmit(onContactSubmit)} className="contact-form">
          <div className="form-group">
            <label>Email Principal*</label>
            <div className="input-with-icon">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                {...registerContact('email', {
                  required: "El email es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ingrese un email válido"
                  }
                })}
                placeholder="tu.email@ejemplo.com"
              />
            </div>
            {contactErrors.email && <span className="error-message">{contactErrors.email.message}</span>}
          </div>

          <div className="social-networks-grid">
            {/* LinkedIn */}
            <div className="form-group">
              <label>LinkedIn</label>
              <div className="input-with-icon">
                <FaLinkedin className="input-icon" />
                <input
                  type="url"
                  {...registerContact('linkedin', {
                    validate: {
                      validUrl: value => !value || isValidUrl(value) || "URL inválida",
                      linkedinDomain: value => !value || value.includes('linkedin.com') || "Debe ser un enlace de LinkedIn"
                    }
                  })}
                  placeholder="https://linkedin.com/in/tu-perfil"
                />
              </div>
              {contactErrors.linkedin && <span className="error-message">{contactErrors.linkedin.message}</span>}
            </div>

            {/* GitHub */}
            <div className="form-group">
              <label>GitHub</label>
              <div className="input-with-icon">
                <FaGithub className="input-icon" />
                <input
                  type="url"
                  {...registerContact('github', {
                    validate: {
                      validUrl: value => !value || isValidUrl(value) || "URL inválida",
                      githubDomain: value => !value || value.includes('github.com') || "Debe ser un enlace de GitHub"
                    }
                  })}
                  placeholder="https://github.com/tu-usuario"
                />
              </div>
              {contactErrors.github && <span className="error-message">{contactErrors.github.message}</span>}
            </div>

            {/* Twitter/X */}
            <div className="form-group">
              <label>Twitter/X</label>
              <div className="input-with-icon">
                <FaTwitter className="input-icon" />
                <input
                  type="url"
                  {...registerContact('twitter', {
                    validate: {
                      validUrl: value => !value || isValidUrl(value) || "URL inválida",
                      twitterDomain: value => !value || 
                        (value.includes('twitter.com') || value.includes('x.com')) || 
                        "Debe ser un enlace de Twitter/X"
                    }
                  })}
                  placeholder="https://twitter.com/tu-usuario"
                />
              </div>
              {contactErrors.twitter && <span className="error-message">{contactErrors.twitter.message}</span>}
            </div>

            {/* Sitio Web/Portafolio */}
            <div className="form-group">
              <label>Sitio Web/Portafolio</label>
              <div className="input-with-icon">
                <FaGlobe className="input-icon" />
                <input
                  type="url"
                  {...registerContact('website', {
                    validate: value => !value || isValidUrl(value) || "URL inválida"
                  })}
                  placeholder="https://tu-portafolio.com"
                />
              </div>
              {contactErrors.website && <span className="error-message">{contactErrors.website.message}</span>}
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">Guardar Contacto</button>
            <button 
              type="button" 
              onClick={() => {
                resetContact({
                  email: '',
                  linkedin: '',
                  github: '',
                  twitter: '',
                  website: ''
                });
                setContactInfo({});
              }} 
              className="cancel-button"
            >
              Limpiar Todo
            </button>
          </div>
        </form>

        {Object.keys(contactInfo).length > 0 && (
          <div className="contact-preview">
            <h3>Tus Enlaces de Contacto</h3>
            <div className="contact-badges">
              {contactInfo.email && (
                <a href={`mailto:${contactInfo.email}`} className="contact-badge" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope className="badge-icon" />
                  <span>Email</span>
                </a>
              )}
              
              {contactInfo.linkedin && (
                <a href={contactInfo.linkedin} className="contact-badge" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="badge-icon" />
                  <span>LinkedIn</span>
                </a>
              )}
              
              {contactInfo.github && (
                <a href={contactInfo.github} className="contact-badge" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="badge-icon" />
                  <span>GitHub</span>
                </a>
              )}
              
              {contactInfo.twitter && (
                <a href={contactInfo.twitter} className="contact-badge" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="badge-icon" />
                  <span>Twitter/X</span>
                </a>
              )}
              
              {contactInfo.website && (
                <a href={contactInfo.website} className="contact-badge" target="_blank" rel="noopener noreferrer">
                  <FaGlobe className="badge-icon" />
                  <span>Sitio Web</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      </div>
      </div>

      <Preview
        personalInfo={personalInfo}
        educations={educations}
        experiences={experiences}
        skills={skills}
        languages={languages}
        references={references}
        contactInfo={contactInfo}
        formatDate={formatDate}
        renderStars={renderStars}
        renderLanguageLevel={renderLanguageLevel}
        skillCategories={skillCategories}
      />

      <button onClick={() => navigate('/')} className="back-button">Volver al Inicio</button>
    </div>
  );
}