import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from '../Home/Home';
import { Productos } from '../Productos/Productos';
import { Tiendas } from '../Tiendas/Tiendas';

export const HomeRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path = "/inicio" component = { Home } />
                <Route exact path = "/tiendas" component = { Tiendas } />
                <Route exact path = "/productos" component = { Productos } />
                <Redirect to = "/inicio" />
            </Switch>
            
        </div>
    )
}
