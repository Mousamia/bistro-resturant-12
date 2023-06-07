/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import app from '../Firebase/firebase.config'

export const AuthContext = createContext(null);
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
        })
    }, [])

    const authInfo = {
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;