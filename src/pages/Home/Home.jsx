import styles from './Home.module.css'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'


function Home() {
  return (
    <>
    
    <Container>
    <section className={styles.home}>
    <div className={styles.apresentacao}>
        <p>
            Olá, sou <br/>
            <span>Vyctor Andrade</span> <br />
            Dev Full Stack <br />

                
            <Link to='/sobre' className={`${styles.btn} ${styles.btn_red}`}> 
            Saiba mais sobre mim 
            </Link>
        </p>
        
        <figure>
          <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
      </figure>
    </div>
    </section>
    </Container>
    <Footer/>
    </>
  )
}

export default Home