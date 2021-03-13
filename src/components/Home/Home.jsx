import React from 'react'
import {useSelector } from "react-redux";
// import { startLogout } from "../../actions/auth";
import { Navbar } from '../Navbar/Navbar';
import { Productos } from '../Productos/Productos';

export const Home = () => {

    // const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    // const handleLogOut = () => {
    //     dispatch( startLogout() )
    // }

    return (
        <div>
           <Navbar />
           <div className = "hero">
               <h1>Bienvenido { name }</h1>
               <p>Busca entre articulos, tiendas, categorías...</p>
                <form action="" className = "wrapper">
                    <input type="text"/>
                    <button type="submit" className="btn search-icon"><i class="fas fa-search"></i></button>
                </form>  
           </div>
           <div className="container">
               <Productos />
           </div>
        </div>
    )
}
