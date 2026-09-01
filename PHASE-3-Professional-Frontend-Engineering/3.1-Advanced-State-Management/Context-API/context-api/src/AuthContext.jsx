import { createContext, useContext, useState } from "react";

const AuthContext = createContext ();

export function AuthProvider ({children}){
const [user, setUser]=useState ({ name: '', isLoggedIn: false });
const login = ()=>{
    setUser({name:"Brox", isLoggedIn:true})
}
const logout = ()=>{
    setUser({name:'', isLoggedIn:false})
}
return(
    <AuthContext.Provider value={{logout, login, user}}>
    {children}</AuthContext.Provider>
)
}

export const useAuth = ()=>useContext(AuthContext);