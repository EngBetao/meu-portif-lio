import React from 'react';
// O código da Linha 2 e 3 deve ter sumido aqui.
const profileImage = '/profile.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me-container">
      <img src={profileImage} alt="Foto de Perfil do Desenvolvedor" />
      <div className="content-area">
        <h1>Olá, eu sou Humberto</h1>
        <h2>Desenvolvedor Front-end | React</h2>
        <p>
          Minha missão é transformar ideias complexas em interfaces de usuário limpas e funcionais.
          Com paixão por React e metodologias ágeis, estou sempre buscando soluções
          que otimizem a experiência do usuário e a performance do código.
          Sou um Desenvolvedor Full-Stack focado em performance e experiência do usuário.
          Minha base em Engenharia, aliada à formação em Ciência de Dados (Python, Big Data) <br />
          e Governança de TI (ITIL/COBIT), me permite construir aplicações robustas, onde o <br />
          Back-end e o Front-end (React) dialogam de forma otimizada.Aplico sistemas de <br />
          desenvolvimento ágil (SCRUM) para entregar soluções escaláveis e de alta qualidade, <br />
          transformando desafios complexos em produtos intuitivos e eficientes.
        </p>
        <div className="profile-photo">
           <img src={profileImage} alt="Foto de Perfil do Desenvolvedor" />
        </div>
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