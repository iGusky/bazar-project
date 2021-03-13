import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/inicio" className="bazar-icon link" >BUY-IT</Link>
            <nav>
                <ul>
                    <li><Link to = "/inicio" className = "link navlink">Inicio</Link></li>
                    <li><Link to = "/agregar" className = "link navlink">Agregar</Link></li>
                </ul>
            </nav>
        </div>
    )
}
