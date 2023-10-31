import { useState } from "react"
import Card from "../../components/Card/Card"
import styles from './Projetos.module.css'


function Projetos() {

  const [ repositorios, setRepositorios] = useState([])

  

  return (
    <section className={StyleSheet.projetos} >
 
    <h2>Projetos</h2>
    <section className={styles.lista}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </section>
   
    </section>
  )
}

export default Projetos