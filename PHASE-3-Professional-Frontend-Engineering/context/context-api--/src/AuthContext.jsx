import { createContext, useContext, useState } from "react";

const AuthContext = createContext ();

export function AuthProvider ({children})=>{
const [user, setUser]=useState ({ name: 'Brox', isLoggedIn: true });
const userSet = ()=>{
    setUser({name: 'Brox', isLoggedIn: false});
}
return(
    <AuthContext.Provider value={logout, login, user}>
    {children}</AuthContext.Provider>
)
}

export const useAuth = ()=>useContext(AuthContext);