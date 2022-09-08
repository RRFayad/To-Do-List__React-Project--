import React from "react";
import { useEffect } from "react";
import { useState } from "react"

const AuthContext = React.createContext({
    isLoggedIn:false,
    userId:'',
    login: () => {},
    logout: () => {},
})

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        setIsLoggedIn((localStorage.getItem('userIsLoggedIn')))
        setUserId(JSON.parse(localStorage.getItem('userId')))
    },[])

    const loginURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEoFLUWVCovP095PSji_tsDLthX1AtHbg';
    const signUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEoFLUWVCovP095PSji_tsDLthX1AtHbg';

    const loginHandler = async (userHasAccount, email, password) => {
        const URL = userHasAccount? loginURL : signUpURL;
        const response = await fetch (URL,{
            method:'POST',
            body:JSON.stringify({
                email,
                password,
                returnSecureToken:true
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
        const data = await response.json();
        setUserId(data.localId);
        setIsLoggedIn(true);
        localStorage.setItem('userIsLoggedIn', JSON.stringify(true));
        localStorage.setItem('userId', JSON.stringify(data.localId))
        alert('User is logged in', userId)
        }
        if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error.message? errorData.error.message : 'Authentication Failed'
            alert (errorMessage);
            return;
        }
    }

    const logoutHandler = () => {
        setUserId(null);
        setIsLoggedIn(false);
        localStorage.clear();
        alert('User has logged out');
    }

    const contextValue = {
        isLoggedIn,
        userId,
        login:loginHandler,
        logout:logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;