import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav>
            <Link to="/">Home</Link>

            {user && (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>

                    <button onClick={logout}>
                        Logout
                    </button>
                </>
            )}

            {!user && (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
}

export default Navbar;