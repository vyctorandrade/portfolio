import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import logo1 from './images/logo1.png'



function NavBar() {
  return (
    <>
   <header className={styles.header}>

        
        <Link to = '/'>
        <img src={logo1} alt="Ícone da logo" />
        </Link>
        
        <nav>
        <Link to='/'>Home</Link>
        <Link to='sobre'>Sobre</Link>
        <Link to='projetos'>Projetos</Link>
        <Link to='contatos'>Contatos</Link>
        </nav>
        
      
   </header>
   
   </>
  )
}

export default NavBar
