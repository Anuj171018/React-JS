import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Sign from "./sign"
import Login from "./login"

function App() {
 

  return (
    <>
     <Routes>
      <Route index element={<Sign/>}/>
      <Route path="/Login" element={<Login/>}/>
     </Routes>
      
      
    </>
  )
}

export default App
