import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import './App.css'

function App() {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/About' element= {<About/>} />
      <Route path='/Projects' element= {<Projects/>} />
      <Route path='/projects/:projectId' element={<ProjectDetail />} />
      <Route path='*' element= {<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
