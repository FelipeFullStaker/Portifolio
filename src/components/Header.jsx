// Header.jsx - Versão PRO
import React, { useState } from 'react';
import { 
  FaHome, 
  FaCode, 
  FaTools, 
  FaUser, 
  FaGithub,
  FaBars,
  FaTimes 
} from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  // 1. Estado para controlar menu mobile (aberto/fechado)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Função para alternar menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // 3. Links do menu (organizados em array para reutilização)
  const menuItems = [
    { id: 1, name: 'Início', icon: <FaHome />, href: '#home' },
    { id: 2, name: 'Projetos', icon: <FaCode />, href: '#projects' },
    { id: 3, name: 'Habilidades', icon: <FaTools />, href: '#skills' },
    { id: 4, name: 'Sobre', icon: <FaUser />, href: '#about' },
  ];
  
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <h1>Felipe FullStacker</h1>
        <p>Desenvolvedor Full Stack em Formação</p>
      </div>
      
      {/* Menu DESKTOP */}
      <nav className={styles.navMenu}>
        {menuItems.map((item) => (
          <a 
            key={item.id}
            href={item.href}
            className={styles.navLink}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {item.icon}
            {item.name}
          </a>
        ))}
        
        {/* Link GitHub */}
        <a 
          href="https://github.com/FelipeFullStaker"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.navLink} ${styles.githubLink}`}
        >
          <FaGithub />
          GitHub
        </a>
      </nav>
      
      {/* Botão Menu MOBILE */}
      <button 
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Menu MOBILE (aparece só quando aberto) */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        {menuItems.map((item) => (
          <a 
            key={item.id}
            href={item.href}
            className={styles.mobileLink}
            onClick={() => {
              toggleMenu(); // Fecha menu ao clicar
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {item.icon}
            <span style={{ marginLeft: '0.5rem' }}>{item.name}</span>
          </a>
        ))}
        
        <a 
          href="https://github.com/FelipeFullStaker"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileLink}
          onClick={toggleMenu}
        >
          <FaGithub />
          <span style={{ marginLeft: '0.5rem' }}>GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Header;