import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        
        {/* Seção Home */}
        <section id="home" className="section home-section">
          <h2>👋 Olá, eu sou o Felipe!</h2>
          <p>Estou migrando para a carreira de Desenvolvimento Full Stack.</p>
          <p>Este portfólio está sendo construído passo a passo com React!</p>
          <p className="highlight">Atualmente focado em: <strong>React, Node.js e projetos práticos</strong></p>
        </section>
        
        {/* Grid de Projetos */}
        <section id="projects" className="section">
          <h2>💻 Meus Projetos</h2>
          <div className="projects-grid">
            
            <div className="project-card">
              <div className="card-header">
                <h3>To-Do List Ninja</h3>
                <span className="tech-tag">JavaScript</span>
              </div>
              <p>Gerenciador de tarefas com JavaScript puro e DOM manipulation.</p>
              <a 
                href="https://github.com/FelipeFullStaker/todo-list-ninja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-button"
              >
                Ver no GitHub →
              </a>
            </div>
            
            <div className="project-card">
              <div className="card-header">
                <h3>Instagram Clone</h3>
                <span className="tech-tag">HTML/CSS</span>
              </div>
              <p>Clone básico da interface do Instagram para praticar layout.</p>
              <a 
                href="https://github.com/FelipeFullStaker/instagram-clone-basico" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-button"
              >
                Ver no GitHub →
              </a>
            </div>
            
            <div className="project-card">
              <div className="card-header">
                <h3>Portfólio React</h3>
                <span className="tech-tag">React</span>
              </div>
              <p>Este site! Desenvolvido com React e componentes modernos.</p>
              <a 
                href="https://github.com/FelipeFullStaker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-button"
              >
                Meu GitHub →
              </a>
            </div>
            
          </div>
        </section>
        
        {/* Grid de Habilidades */}
        <section id="skills" className="section">
          <h2>⚡ Habilidades Técnicas</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Front-end</h3>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React (em aprendizado)</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Back-end</h3>
              <ul>
                <li>Node.js (básico)</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Ferramentas</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Terminal/CLI</li>
                <li>DevTools</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Seção Sobre */}
        <section id="about" className="section about-section">
          <h2>👤 Minha Jornada</h2>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-date">Jan 2026</div>
              <div className="timeline-content">
                <h4>Início da Transição</h4>
                <p>Comecei os estudos em desenvolvimento web do zero.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Atual</div>
              <div className="timeline-content">
                <h4>Foco Full Stack</h4>
                <p>Estudando React, Node.js e construindo projetos práticos.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Objetivo</div>
              <div className="timeline-content">
                <h4>Primeira Oportunidade</h4>
                <p>Busco minha primeira oportunidade como desenvolvedor júnior.</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 - Portfólio do Felipe | Construído com React e ☕</p>
          <div className="footer-links">
            <a 
              href="https://github.com/FelipeFullStaker" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="#home">Início</a>
            <a href="#projects">Projetos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;