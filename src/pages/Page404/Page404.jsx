import Container  from '../../components/Container/Container'
import Footer  from '../../components/Footer/Footer'
import styles from './Page404.module.css'



function Page404() {
  return (
    <>
    
    <Container>
    <h2 className={styles.titulo2}> Algo de errado não está certo!</h2>
    <div className={styles.textos}>
        <span className={styles.texto_grande}>404</span> <br />
        <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
    </div>
    </Container>

    <Footer/>
    </>
  )
}

export default Page404