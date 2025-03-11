import { Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./About"
import Services from "./Services"
import Help from "./Help"
import Gallery from "./Gallery"
import Navbar from "./Navbar"


function App() {
 
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element= { <Home/> }/> 
      <Route path="/about" element= { <About/> }/> 
      <Route path="/services" element= { <Services/> }/> 
      <Route path="/help" element= { <Help/> }/> 
      <Route path="/gallery" element= { <Gallery/> }/> 
      </Route>
    </Routes>
      
    </>
  )
}

export default App
