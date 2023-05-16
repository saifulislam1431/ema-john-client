import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";

export const UserContext = createContext(null)
const auth = getAuth(app);

const Auth = () => {
    return (
        <div>
            
        </div>
    );
};

export default Auth;