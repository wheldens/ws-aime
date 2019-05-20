import React from 'react';
import {Route, Redirect} from 'react-router-dom'


function ProptectedRoute({component: Component, render, isLoggedIn, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                if (!isLoggedIn) return <Redirect to={{
                    pathname: "/login",
                    state: {from: props.location}
                }}/>;
                return Component ? <Component {...props} /> : render(props);
            }}/>
    );
}

export default ProptectedRoute;
