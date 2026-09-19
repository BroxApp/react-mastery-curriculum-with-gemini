import {useAuth} from "../context/AuthContext";

function Dashboard () {
    const {user, logout} = useAuth();
    return (
        <div>
            <h1>به داشبورد خوش آمدید, {user.name}</h1>
            <button onClick={logout}>خروج</button>
        </div>
    );
}

export default Dashboard;