import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';  // Asegúrate de que Home.js esté en components/pages/
import Navbar from './Components/Navbar';   // Asegúrate de que Navbar.js esté en components/
import Testimonio from './Components/Testimonio';   // Asegúrate de que Testimonio.js esté en components/
import Portafolio from './Components/Portafolio';   // Asegúrate de que Portafolio.js esté en components/
import Nosotros from './Components/Nosotros';   // Asegúrate de que Nosotros.js esté en components/
import React from 'react';

function App() {
	const images = [
    {
      id: '1',
      image: 'https://i.ytimg.com/vi/sGesd98SiL8/maxresdefault.jpg',
      title: 'Innovatech.',
      description: 'Trabajar con Theseven ha sido una experiencia transformadora. Su enfoque estratégico y personalizado ayudó a nuestra empresa a superar retos clave y alcanzar nuestros objetivos de manera eficiente. Recomiendo altamente sus servicios de consultoría. María Fernández, CEO de InnovateTech',
    },
    {
      id: '2',
      title: 'greenenergy & company.',
      image: 'https://static.wixstatic.com/media/ab32b9_cbfe9c62716146f3bded0eca158f61ea~mv2.jpg',
      description: 'Gracias a la asesoría de esta empresa, hemos logrado implementar prácticas sostenibles que han mejorado tanto nuestra eficiencia operativa como nuestra imagen corporativa. Su enfoque integral fue exactamente lo que necesitábamos. Carlos Mendoza, Gerente de Operaciones de GreenEnergy',
    },
    {
      id: '3',
      title: 'FinCorp.',
      image: 'https://cdn.slidesharecdn.com/ss_thumbnails/herofincorpbrandinsightsvf-171121093015-thumbnail-4.jpg',
      description: 'Su análisis detallado del mercado y las estrategias de crecimiento que nos ofrecieron fueron fundamentales para expandir nuestra presencia a nivel internacional. Estamos muy satisfechos con el trabajo realizado. Laura Rodríguez, CFO de FinCorp',
    },
    {
      id: '4',
      title: 'DevSolutions',
      image: 'https://devlogicsol.com/wp-content/uploads/2020/10/73f60997190101.5ebf3c4565cdc.jpg',
      description: 'La colaboración con esta empresa ha sido una de las mejores decisiones que hemos tomado. Nos ayudaron a llevar nuestra infraestructura tecnológica a un nuevo nivel, lo que nos permitió mejorar la experiencia de nuestros usuarios. Javier Martínez, Director de Tecnología de DevSolutions',
    },
    {
      id: '5',
      title: 'TalentBridge',
      image: 'https://www.kindpng.com/picc/m/465-4652155_talentbridge-talentbridge-logo-hd-png-download.png',
      description: 'La capacitación que nos ofrecieron a nuestros empleados fue excepcional. No solo mejoró nuestras habilidades internas, sino que también nos dio herramientas para abordar desafíos futuros con confianza. Mariana López, Directora de Recursos Humanos de TalentBridge',
    },
    {
      id: '6',
      title: 'Nintendo Company',
      image: 'https://images.fastcompany.com/image/upload/f_webp,c_fit,w_1920,q_auto/wp-cms/uploads/2023/05/p-1-90891053-nintendo-logo.jpg',
      description: 'Trabajar con esta empresa fue un cambio de paradigma para nosotros. Nos guiaron en la implementación de prácticas más sostenibles, lo que no solo mejoró nuestros procesos, sino que también reforzó nuestra responsabilidad social empresarial. Roberto Pérez, CEO de EcoTech Solutions',
    },
    {
      id: '7',
      title: 'Microsoft',
      image: 'https://searchengineland.com/wp-content/seloads/2023/11/shutterstock_2199173649.jpg',
      description: 'La colaboración con este equipo ha sido fundamental para acelerar nuestra transformación digital. Sus soluciones personalizadas nos han permitido mejorar la eficiencia en nuestros procesos y ofrecer productos innovadores a nuestros clientes. Son verdaderos socios estratégicos en la evolución tecnológica. Satya Nadella, CEO de Microsoft',
    },
    {
      id: '8',
      title: 'LinkedIn',
      image: 'https://www.interhacktives.com/wp-content/uploads/2023/03/LINKEDIN-1.jpg',
      description: 'La asociación con esta empresa ha sido esencial para nuestro éxito. Su enfoque único en la experiencia del cliente y la mejora continua nos permitió expandir nuestra plataforma globalmente. Han jugado un papel clave en nuestra estrategia de crecimiento. Jeff Weiner, Ex-CEO de LinkedIn',
    },
    {
      id: '9',
      title: 'Apple',
      image: 'https://tecnotvhn.com/wp-content/uploads/2022/01/apple-scaled.jpg',
      description: 'Trabajar con este equipo ha sido una experiencia transformadora. Su capacidad para abordar desafíos complejos y proporcionar soluciones escalables ha sido esencial en el desarrollo de nuestros productos más avanzados. Son un socio confiable en nuestra misión de revolucionar el mundo de la tecnología. Tim Cook, CEO de Apple',
    },
    {
      id: '10',
      title: 'ZSnes Company',
      image: 'https://1.bp.blogspot.com/-MHd9X69Sfgs/YRCwBfm1U2I/AAAAAAAAYmA/l1r1KjJFPF8Ee5RDX2qcUVFetx4NCdChQCLcBGAsYHQ/s768/Zsnes_emulator.png',
      description: 'Su enfoque estratégico y personalizado nos permitió mejorar significativamente nuestra visibilidad y presencia en el mercado. Gracias a su equipo, ahora contamos con soluciones innovadoras que han optimizado nuestras operaciones. Recomendamos encarecidamente sus servicios a cualquier empresa que busque un aliado confiable para el crecimiento y desarrollo. John Doe, CEO de ZSnes Company',
    },
  ];
  
	  
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Testimonio" element={<Testimonio images={images} />} />
          <Route path="/Portafolio" element={<Portafolio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </Router>
    );
}

export default App;
