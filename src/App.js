import {BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/home';
import NotFoundPage from './Pages/notFoundPage';
import Contact from './Pages/contact';

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element ={<HomePage/>}/>
                    <Route path='/contacto' element ={<Contact/>}/>
                    <Route path='*' element ={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}