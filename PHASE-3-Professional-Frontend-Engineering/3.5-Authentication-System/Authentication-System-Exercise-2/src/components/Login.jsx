import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login (){
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login (
            {email: "broxapp@example.com", name: "Brox"},
            "fake-jwt-token-123"
        );
        navigate("/dashboard");
    };
    return (
        <div>
            <h1>ورود</h1>
            <button onClick={handleLogin}>ورود</button>
        </div>
    );
}

export default Login;