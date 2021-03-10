import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator';
import { useForm } from '../../../hooks/useForm';

export const RegisterScreen = () => {

    const [values, handleInputChange, reset ] = useForm({
        name: 'gustavo',
        email: 'gustavo@mail.com',
        password: '12345',
        password2: '12345',
    });

    const { name, email, password, password2 } = values;

    const handleRegister = ( e ) => {
        e.preventDefault();
        if( isFormValid() ){
            // Despachar función para registrar en google
        }
    }

    const isFormValid = () => {
        if( name.trim().length === 0 ){
            // Despachar error
            return false;
        }
        if( !validator.isEmail( email ) ){
            return false;
        }
        if( (password !== password2) ){
            return false;
        }
        return true;
    }

    return (
        <div className="auth__container">
            <form 
                action="" 
                method="POST" 
                className="auth__form"
                onSubmit={ handleRegister }
                >

                <legend>Registrate gratis</legend>

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
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder=""  
                        value={ email }
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
                <div className="form-group">
                    <label htmlFor="pass">Confirme Contraseña</label>
                    <input 
                        type="password2" 
                        name="password2" 
                        id="password2" 
                        placeholder=""  
                        value={ password2 }
                        autoComplete="off"/>
                </div>
                <input 
                    type="submit" 
                    className="btn btn-block btn-primary" 
                    value="Registrarse"/>

                <p>¿Ya tienes cuenta? <Link to="/auth/login">Inicia sesión</Link></p>

                <div className="auth__social-networks">
                    <legend>Otras formas de registrarte</legend>
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
