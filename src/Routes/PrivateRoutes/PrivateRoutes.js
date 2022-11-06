import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div>Data Is Loadding.........</div>
    }

    if(user){
        return children;
    }else{
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    
};

export default PrivateRoutes;