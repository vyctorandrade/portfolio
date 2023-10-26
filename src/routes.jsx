import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Projetos from './pages/Projetos/Projetos'
import Contatos from './pages/Contatos/Contatos'
import NavBar from './components/NavBar/NavBar'


function AppRoutes(){
    return(
   
    <BrowserRouter>    
        <NavBar/>
    <Routes>
    <Route exact path='/' element = {<Home/>}></Route>
    <Route path='/sobre' element = {<Sobre/>}></Route>
    <Route path='/projetos' element = {<Projetos/>}></Route>
    <Route path='/contatos' element = {<Contatos/>}></Route>
    </Routes>
    </BrowserRouter>

    

    )
}

export default AppRoutes



