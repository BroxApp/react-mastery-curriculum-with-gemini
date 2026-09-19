import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

function Navbar (){
    const {user, logout} = useAuth();

    return (
        <nav>
            <Link to="/">Home</Link>{"  "}
            <Link to="/dashboard">Dashboard</Link>{"  "}

            {user ? (
                <button onClick={logout}>خروج</button>
            ):(
               <Link to="/login">ورود</Link> 
            )}
        </nav>
    );
}

export default Navbar;