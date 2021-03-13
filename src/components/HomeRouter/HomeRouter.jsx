import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { Agregar } from '../Agregar/Agregar';
import { Home } from '../Home/Home';
// import { Productos } from '../Productos/Productos';
// import { Tiendas } from '../Tiendas/Tiendas';

export const HomeRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path = "/inicio" component = { Home } />
                <Route exact path = "/agregar" component = { Agregar }></Route>
                <Redirect to = "/inicio" />
            </Switch>
            
        </div>
    )
}
