import React from 'react'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.apresentacao}>
        <p>
            Olá, sou <br/>
            <span>Vyctor Andrade</span> <br />
            Dev Full Stack <br />
            <button>
            Saiba mais sobre mim
          </button>
        </p>

      

        <figure>
          <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
      </figure>
    </div>
   
  )
}

export default Home