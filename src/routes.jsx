import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Projetos from './pages/Projetos/Projetos'
import Contatos from './pages/Contatos/Contatos'
import NavBar from './components/NavBar/NavBar'
import Page404 from './pages/Page404/Page404'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'


function AppRoutes(){
    return(
   
    <BrowserRouter>    
        <NavBar/>
        <Container>   
            <Routes>
                <Route exact path='/' element = {<Home/>}></Route>
                <Route path='/sobre' element = {<Sobre/>}></Route>
                <Route path='/projetos' element = {<Projetos/>}></Route>
                <Route path='/contatos' element = {<Contatos/>}></Route>
                <Route path='*' element = {<Page404/>}></Route>
            </Routes>
        </Container> 
        <Footer/>    
    </BrowserRouter>

    

    )
}

export default AppRoutes



