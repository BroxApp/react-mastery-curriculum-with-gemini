import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicOnlyRoute from "./components/PublicOnlyRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./Profile";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route element={<PublicOnlyRoute />}>
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/Profile" element={<Profile />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;