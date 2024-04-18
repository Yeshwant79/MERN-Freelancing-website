import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'))
    const authorizationToken = `Bearer ${token}`
    const [user, setUser] = useState("")
    const [isLoading, SetIsLoading] = useState(true)

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

    const UserAuthontication = async () => {
        try {
            SetIsLoading(true)
            const data = await fetch(`http://localhost:5000/api/auth/students`, {
                headers: {
                    authorization: authorizationToken
                }
            })
            const res = await data.json()
            // console.log(res)
            setUser(res)
            SetIsLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        UserAuthontication()
    }, [])

    const isLoggedIn = !!token
    console.log('login', isLoggedIn)


    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, authorizationToken, user, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider } 