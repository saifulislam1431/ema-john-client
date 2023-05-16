import React, { useContext } from 'react';
import { UserContext } from '../Auth/Auth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();
    if(loading){
        return <div className='flex items-center justify-center min-h-[calc(100vh-100px)]'> <progress className="progress w-72"></progress></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace />
};

export default PrivateRoute;