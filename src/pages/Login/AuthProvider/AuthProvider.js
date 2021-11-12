import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const allauth = UseFirebase();
    return (
        <AuthContext.Provider value={allauth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;