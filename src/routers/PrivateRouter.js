import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRouter({ isAuthenticated, component: Component, ...rest }) {
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/auth" />)
            )}
        />
    )
}

export default PrivateRouter;