import React from "react";
import { useState } from "react"

const AuthContext = React.createContext({
    isLoggedIn:false,
    login: () => {},
    logout: () => {},
})

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = () => {
        setIsLoggedIn(true);
        alert('User is logged in')
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
        alert('User has logged out')
    }

    const contextValue = {
        isLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;