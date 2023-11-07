import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import logo1 from './images/logo1.png'
import { useState } from 'react'



function NavBar() {
  

  // Estado de exebição
  const [showMenu, setShowMenu ] = useState (false)
  // Função que vai trocar o estado
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  
  
  return (
    <>
   <header className={styles.header}>

        
        <Link to = '/'>
        <img src={logo1} alt="Ícone da logo" />
        </Link>
        
        <nav 
        className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`}
        onClick={toggleMenu} 
        >
        <Link to='/'>Home</Link>
        <Link to='sobre'>Sobre</Link>
        <Link to='projetos'>Projetos</Link>
        <Link to='contatos'>Contatos</Link>
        </nav>

        <div
           className={styles.menuButton}
           onClick={toggleMenu}      
        >   
          <span className={styles.linha}></span>
          <span className={styles.linha}></span>
          <span className={styles.linha}></span>
        </div>
        
      
   </header>
   
   </>
  )
}

export default NavBar
