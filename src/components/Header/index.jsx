import React from 'react'
import styles from './Header.module.css'



function Header() {
  return (
   <header className={styles.header}>
        <span>vyAndrade.dev</span>
        
        
        <div>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Contatos</a>
        </div>
      
   </header>
  )
}

export default Header
