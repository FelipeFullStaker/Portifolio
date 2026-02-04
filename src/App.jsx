// Importa o Header
import Header from './components/Header';

// Componente principal
function App() {
  return (
    <div className="App">
      {/* 1. Header no topo */}
      <Header />
      
      {/* 2. Conteúdo principal */}
      <main style={styles.main}>
        
        {/* Seção Home */}
        <section id="home" style={styles.section}>
          <h2>👋 Olá, eu sou o Felipe!</h2>
          <p>Estou migrando para a carreira de Desenvolvimento Full Stack.</p>
          <p>Este portfólio está sendo construído passo a passo com React!</p>
        </section>
        
        {/* Seção Projetos */}
        <section id="projects" style={styles.section}>
          <h2>💻 Meus Projetos</h2>
          <div style={styles.card}>
            <h3>To-Do List Ninja</h3>
            <p>Gerenciador de tarefas com JavaScript puro.</p>
            <a 
              href="https://github.com/FelipeFullStaker/todo-list-ninja" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.button}
            >
              Ver no GitHub
            </a>
          </div>
          
          <div style={styles.card}>
            <h3>Instagram Clone</h3>
            <p>Clone básico da interface do Instagram com HTML/CSS.</p>
            <a 
              href="https://github.com/FelipeFullStaker/instagram-clone-basico" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.button}
            >
              Ver no GitHub
            </a>
          </div>
        </section>
        
        {/* Seção Habilidades */}
        <section id="skills" style={styles.section}>
          <h2>⚡ Habilidades Técnicas</h2>
          <ul style={styles.list}>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React (em aprendizado)</li>
            <li>Node.js (básico)</li>
            <li>Git & GitHub</li>
          </ul>
        </section>
        
        {/* Seção Sobre */}
        <section id="about" style={styles.section}>
          <h2>👤 Sobre Mim</h2>
          <p>Comecei minha jornada em desenvolvimento em Janeiro/2026.</p>
          <p>Objetivo: Me tornar um desenvolvedor Full Stack competente.</p>
          <p>Metodologia: Aprendizado com projetos práticos + commit diário.</p>
        </section>
        
      </main>
      
      {/* 3. Rodapé */}
      <footer style={styles.footer}>
        <p>© 2024 - Portfólio do Felipe | Construído com React</p>
        <p>
          <a 
            href="https://github.com/FelipeFullStaker" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.footerLink}
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

// Estilos do App
const styles = {
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  },
  section: {
    backgroundColor: 'white',
    padding: '2rem',
    marginBottom: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #dee2e6'
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: '0.5rem'
  },
  list: {
    paddingLeft: '1.5rem'
  },
  footer: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
    marginTop: '3rem'
  },
  footerLink: {
    color: '#4cc9f0',
    textDecoration: 'none'
  }
};

export default App;