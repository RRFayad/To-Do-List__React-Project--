import { useState } from "react"

const AuthContext = React.createContext({
    isLoggedIn:false,
    login: () => {},
    logout: () => {},
})

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    const contextValue = {
        isLoggedIn,
        login,
        logout,
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;