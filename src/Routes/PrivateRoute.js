import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()

    if (loding) {
        return <div>Loding.........</div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;