import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, logOut , loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>;
    }

    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;