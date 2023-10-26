import React from 'react'
import styles from './Home.module.css'
import Header from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    <div className={styles.apresentacao}>
        <p>
            Olá, sou <br/>
            <span>Vyctor Andrade</span> <br />
            Dev Full Stack <br />

                
            <Link to='/sobre' className='btn btn-red'> 
            Saiba mais sobre mim 
            </Link>
      

            
          
        </p>

      

        <figure>
          <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
      </figure>
    </div>
    <Footer/>
    </>
  )
}

export default Home