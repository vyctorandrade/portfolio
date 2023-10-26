import styles from './Home.module.css'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    
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