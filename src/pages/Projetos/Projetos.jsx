import { useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import styles from './Projetos.module.css'


function Projetos() {

  // Estado criado
  const [ repositorios, setRepositorios] = useState([])


  // Criado userEffect com a função de busca pra api do github "api.github.com/users/vyctorandrade/repos"
  useEffect(() => { 
      const buscarRepositorios = async () => {
        const resposta = await fetch ('https://api.github.com/users/vyctorandrade/repos?page=1&per_page=50')
        const dados = await resposta.json()
        setRepositorios(dados)
      }
      buscarRepositorios()
  }, [])

  return (
    <section className={styles.projetos} >
    <h2>Projetos</h2>
    
    {/* Se tiver um ou mais repositórios, vai ser gerado sections com card, senão vai ser gerado só um parágrafo. */}
    {
      repositorios.length > 0 ? (
        <section className={styles.lista}>
            {
              repositorios.map((repo) => (
                <Card 
                    key={repo.id} 
                    nome ={repo.name}
                    descricao={repo.descricao} 
                    html_url={repo.html_url} 
                />
              ))
            }
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )
    }
   
    </section>
  )
}

export default Projetos