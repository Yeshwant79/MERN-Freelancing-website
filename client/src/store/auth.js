import { createContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'))

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem('token', serverToken)
        setToken(serverToken)
    }

    // tacking the logout functionally

    const LogoutUser = () => {
        setToken('')
        localStorage.removeItem('token')
        toast.success('Logout Successfully')
    }

    const isLoggedIn = !!token
    console.log('login', isLoggedIn)


    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider } 