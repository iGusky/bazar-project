import React from 'react'
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { useDispatch } from "react-redux";

export const Navbar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch ( startLogout() )
    }

    return (
        <div className="navbar">
            <Link to="/inicio" className="bazar-icon link" >BUY-IT</Link>
            <nav>
                <ul>
                    <li><Link to = "/inicio" className = "link navlink">Inicio</Link></li>
                    <li><Link to = "/agregar" className = "link navlink">Agregar</Link></li>
                    <li><Link to = "/" className = "link navlink" onClick={ handleLogout }>Cerrar Sesión</Link></li>
                </ul>
            </nav>
        </div>
    )
}
