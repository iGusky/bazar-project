import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { LoginScreen } from '../components/AuthComponents/LoginScreen/LoginScreen'
import { RegisterScreen } from '../components/AuthComponents/RegisterScreen/RegisterScreen'

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path  = "/auth/login" component = { LoginScreen } />
                <Route exact path = "/auth/register" component = { RegisterScreen } />
                <Route exact path = "/" component = { Home } />
                <Redirect to path = "/" />
            </Switch>
        </Router>
    )
}
