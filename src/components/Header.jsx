// Componente Header - versão básica
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>Felipe FullStacker</h1>
        <p>Desenvolvedor em Formação</p>
      </div>
      
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Início</a>
        <a href="#projects" style={styles.link}>Projetos</a>
        <a href="#skills" style={styles.link}>Habilidades</a>
        <a href="#about" style={styles.link}>Sobre</a>
      </nav>
    </header>
  );
};

// Estilos inline (depois vamos para CSS)
const styles = {
  header: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    flex: 1
  },
  nav: {
    display: 'flex',
    gap: '1.5rem'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default Header;