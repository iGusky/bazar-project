import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {

    // if( rest.location.pathname === '/search')
    // {
    //     localStorage.setItem('lastPath', rest.location.pathname+rest.location.search);
    // } else {
    //     localStorage.setItem('lastPath', rest.location.pathname);
    // }

    return (
        <Route { ...rest }
            component = { ( props ) =>(
                (isAuthenticated)
                    ? (<Component { ...props }/>)
                    : (<Redirect to="/auth/login" />)
            ) }
        />   
    )
}
