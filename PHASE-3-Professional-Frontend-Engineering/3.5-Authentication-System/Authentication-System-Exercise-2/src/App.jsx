import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navebar";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;