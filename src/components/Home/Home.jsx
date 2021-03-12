import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Home = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogOut = () => {
        dispatch( startLogout() )
    }

    return (
        <div>
            <h1>From home</h1>
            <button 
                className = "btn btn-alt"
                onClick = { handleLogOut }
            >
                Cerrar sesión de { name }
            </button>
        </div>
    )
}
