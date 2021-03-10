import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { useDispatch, useSelector } from 'react-redux';
import { firebase } from "../firebase/firebaseConfig";
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { AuthRouter } from './AuthRouter'
import { login } from '../actions/auth'


export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState( true );
    const [isLoggedIn, setIsLoggedIn] = useState( false );

    // Observable esperando cambios en el usuario
    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if( user?.uid ){
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }

            setChecking( false );
        })
    }, [ dispatch, setChecking, setIsLoggedIn ]);

    return (
        <Router>
            <Switch>
                <PublicRoute 
                    isAuthenticated = { isLoggedIn }
                    path = "/auth"
                    component = { AuthRouter }
                />
                <PrivateRoute 
                    isAuthenticated = { isLoggedIn }
                    path = "/"
                    component = { Home }
                />
                <Redirect to path = "/auth/login" />
            </Switch>
        </Router>
    )
}
