import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
 

  return (
    <>

     {/* Transferir para rotas os links
    <Router>

    <Routes>
    <Route exact path='/' element = {<Home/>}></Route>
    <Route exact path='/'> Sobre </Route>
    <Route exact path='/'> Projetos </Route>
    <Route exact path='/'> Contatos </Route>
    </Routes>
    </Router> */}

   
     <Header/>
     <Home/>
     <Footer/>
    </>
   
  )
}

export default App
