import {NavLink} from 'react-router-dom';
import './navbar.css';

export default function Navbar(){
    return(
        <div>
            <ul class="navMenu">
                <li>
                    <NavLink to='/'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'>Contacto</NavLink>
                </li>
                <li>
                    <NavLink to='/experiencia'>Experiencia</NavLink>
                </li>
            </ul>
        </div>
    )
}