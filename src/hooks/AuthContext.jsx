import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext();
export function AuthProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        setIsLoggedIn(localStorage.getItem("isLoggedIn")=== "true" ? true : false);
    }, []);
    return(
        <AuthContext.Provider value = {{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(){
    return useContext(AuthContext);
}