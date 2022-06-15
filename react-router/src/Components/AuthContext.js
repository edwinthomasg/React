import React,{useContext, useState} from 'react'

const AuthContext = React.createContext(null)

export const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null)
    let login = (user) => {
        setUser(user)
    }
    let logout = () => {
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext) /**here either null or users name */
}