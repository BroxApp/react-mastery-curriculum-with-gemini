import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: email,
        };

        const fakeToken = "fake-token-123";

        login(userData, fakeToken);

        navigate("/dashboard");
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>

                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;



