import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { Agregar } from '../Agregar/Agregar';
import { Footer } from '../Footer/Footer';
import { Home } from '../Home/Home';
import { Navbar } from '../Navbar/Navbar';
import { Pedidos } from '../Pedidos/Pedidos';
import { Producto } from '../Productos/Producto';
import { Vendedor } from '../Vendedor/Vendedor';
// import { Tiendas } from '../Tiendas/Tiendas';

export const HomeRouter = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path = "/inicio" component = { Home } />
                <Route exact path = "/agregar" component = { Agregar } />
                <Route exact path = '/item/:idProducto' component = { Producto } />
                <Route exact path = '/seller/:idVendedor' component = { Vendedor }/>
                <Route exact path = '/pedidos' component = { Pedidos } />
                <Redirect to = "/inicio" />
            </Switch>
            <Footer />
        </div>
    )
}
