import { useAuth } from "./AuthContext";

function Navbar(){
    const {login, logout, user}=useAuth();
    if(user.isLoggedIn === true){
    return(
        <nav>
            <ul>
                <li>{user.name}</li>
            </ul>
            <button onClick={logout}>pressToLogout</button>
        </nav>
    )
    }else{
        return(
            <nav>
                <p>{"لطفا وارد شوید."}</p>
                <button onClick={login}>pressToLogin</button>
            </nav>
        )
    }
}

export default Navbar;