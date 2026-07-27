import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Nav-Bar'
import Hero from "./components/Hero";
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Hero/>} />
       

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
