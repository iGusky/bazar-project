import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startGoogleLogin, startLoginWithEmailPasswordMongo, startLoginWithEmailPassword } from '../../../actions/auth'

export const LoginScreen = ({props}) => {

    const dispatch = useDispatch();
    // const { loading } = useSelector(state => state.ui);

    const [values, handleInputChange ] = useForm({
        email: 'gusky@correo.com',
        password: '123456',
    });

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLoginWithEmailPassword( email, password) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    const { email, password } = values;

    return (
        <div className="auth__container">
            <form
                action="" 
                method="POST" 
                className="auth__form"
                onSubmit={ handleLogin }
                >

                <legend>Inicia Sesión</legend>

                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder=""
                        value={ email }
                        onChange={ (e) => { handleInputChange( e ) }} 
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
                        onChange={ (e) => { handleInputChange( e ) }} 
                        autoComplete="off"/>
                </div>
                <input 
                    type="submit" 
                    className="btn btn-block btn-primary" 
                    value="Iniciar sesión"/>

                <div className="auth__social-networks">
                    <legend>Otras formas de ingresar</legend>
                </div>

                <div 
                    className="google-btn"
                    onClick={ handleGoogleLogin }
                >   
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Ingresa con Google</b>
                    </p>
                </div>
                
                <p>¿No tienes cuenta? <Link to="/auth/register">Registrate</Link></p>
            </form>
        </div>
    )
}
