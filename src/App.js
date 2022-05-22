import {BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/home';
import NotFoundPage from './Pages/notFoundPage';
import Contact from './Pages/contact';
import Portfolio from './Pages/portfolio';
import Navbar from './components/Navbar';

export default function App(){
    return(
        <div>
            <BrowserRouter>
            <Navbar></Navbar>
                <Routes>
                    <Route path='/' element ={<HomePage/>}/>
                    <Route path='/contacto' element ={<Contact/>}/>
                    <Route path='/experiencia' element ={<Portfolio/>}/>
                    <Route path='*' element ={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}