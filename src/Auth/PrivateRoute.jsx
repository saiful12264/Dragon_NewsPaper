import React, { use } from 'react';
import { AuthContext } from './Auth_provider';
import Loading from '../Compoent/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user,loading} = use(AuthContext);
    if(loading)
    {
        return <Loading></Loading>
    }
    if(user && user?.email)
    {return children;}
    else
    {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }


};

export default PrivateRoute