import { Redirect, Route } from "react-router";
import { useState } from "react";

//const user = null;

export default function PrivateRoute({component: Component, ...rest}){
    const [isAuth] = useState(localStorage.getItem('authorized') === '1');
    
    return(
        <Route {...rest}>
            {() => (isAuth ? <Component/> : <Redirect to="/login" />)}
        </Route>
    )
}