import Fetchapi from "./Fetchapi"
import Insert from "./Insert"
import { Routes,Route } from "react-router-dom"

function App() {


  return (
    <>
   
    <Routes>
      <Route index element={<Insert/>}/>
      <Route path="/Fetchapi" element={<Fetchapi/>}/>

    </Routes>
      
    </>
  )
}

export default App
