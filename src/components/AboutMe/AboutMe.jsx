import React from 'react';
import './AboutMe.css'; // Vamos criar este arquivo de estilo em seguida

function AboutMe() {
  return (
    <section className="about-me-container">
      <div className="profile-photo">
        {/* Coloque sua foto aqui */}
      </div>
      <div className="content-area">
        <h1>Olá, eu sou [Seu Nome]</h1>
        <h2>Desenvolvedor Front-end | React</h2>
        <p>
          Minha missão é transformar ideias complexas em interfaces de usuário limpas e funcionais.
          Com paixão por React e metodologias ágeis, estou sempre buscando soluções
          que otimizem a experiência do usuário e a performance do código.
          (Edite este texto com sua experiência e objetivos!)
        </p>
        
        <div className="skills-section">
            <h3>Habilidades Chave</h3>
            <div className="skills-grid">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">HTML5 & CSS3</span>
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Componentização</span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;