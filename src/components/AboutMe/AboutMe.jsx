import React from 'react';
import './AboutMe.css'; 

// Definindo o caminho da imagem que está na pasta public
const profileImage = '/profile.jpg'; 

function AboutMe() {
  return (
    <section className="about-me-container">
        
        {/* 1. SEÇÃO DA FOTO */}
        <div className="profile-photo">
            <img src={profileImage} alt="Foto de Perfil do Desenvolvedor" />
        </div>

        {/* 2. SEÇÃO DE CONTEÚDO */}
        <div className="content-area">
            <h1>Olá, eu sou Humberto</h1>
            <h2>Desenvolvedor Front-end | React</h2>
            
            <p>
                Minha missão é transformar ideias complexas em interfaces de usuário limpas e funcionais. Com paixão por React e metodologias ágeis, estou sempre buscando soluções que otimizem a experiência do usuário e a performance do código. Sou um Desenvolvedor Full-Stack focado em performance e experiência do usuário. Minha base em Engenharia, aliada à formação em Ciência de Dados (Python, Big Data) e Governança de TI (ITIL/COBIT), me permite construir aplicações robustas, onde o Back-end e o Front-end (React) dialogam de forma otimizada. Aplico sistemas de desenvolvimento ágil (SCRUM) para entregar soluções escaláveis e de alta qualidade, transformando desafios complexos em produtos intuitivos e eficientes.
            </p>
            
            <div className="contact-links">
                <h3>Conecte-se comigo</h3>
                <a href="[SEU LINK DO LINKEDIN]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="[SEU LINK DO GITHUB]" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:[SEU EMAIL]" target="_blank" rel="noopener noreferrer">Email</a>
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