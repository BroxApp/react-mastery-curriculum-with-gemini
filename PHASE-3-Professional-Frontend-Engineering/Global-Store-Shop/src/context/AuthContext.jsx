import { createContext, useContext, useState } from "react";

const AuthConttext = createContext();

export function AuthProvider ({children}){
    const [user, setUser] = useState(null);

    const login = (name, role)=>{
        setUser({
            name,
            role,
        });
    };
    const logout = ()=> {
        setUser(null);
    };
    const value = {
        user,
        isLoggedIn: user !== null,
        login,
        logout,
    };
    return(
        <AuthConttext.Provider value={value}>
            {children}
        </AuthConttext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthConttext);
}