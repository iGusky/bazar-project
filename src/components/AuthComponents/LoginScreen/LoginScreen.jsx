import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "../../../hooks/useForm";

export const LoginScreen = () => {

    const [values, handleInputChange, reset ] = useForm({
        name: 'gustavo',
        password: '12345',
    });

    const { name, password } = values;

    return (
        <div className="auth__container">
            <form 
                action="" 
                method="POST" 
                className="auth__form">

                <legend>Ingresa tu información</legend>

                <div className="form-group">
                    <label htmlFor="">Usuario</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder=""
                        value={ name } 
                        autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder=""
                        value={ password } 
                        autoComplete="off"/>
                </div>
                <input 
                    type="submit" 
                    className="btn btn-block btn-primary" 
                    value="Iniciar sesión"/>
                <p>¿No tienes cuenta? <Link to="/auth/register">Registrate</Link></p>

                <div className="auth__social-networks">
                    <legend>Otras formas de ingresar</legend>
                </div>
                <div className="google-btn">   
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Ingresa con Google</b>
                    </p>
                </div>
            </form>
        </div>
    )
}
