import React from 'react'
import styles from './Header.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Header() {
  return (
   <header className={styles.header}>
        <span>vyAndrade.dev</span>
        
        {/* Transferir para rotas os links */}
        <Router>

            <Routes>
                <Route exact path='/'> Home </Route>
                <Route exact path='/'> Sobre </Route>
                <Route exact path='/'> Projetos </Route>
                <Route exact path='/'> Contatos </Route>
            </Routes>
        </Router>
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
