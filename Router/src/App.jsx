import { Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./About"


function App() {
 
  return (
    <>
    <Routes>
      <Route path="/home" element= { <Home/> }/> 
      <Route path="/about" element= { <About/> }/> 
    </Routes>
      
    </>
  )
}

export default App
