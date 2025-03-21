import { createContext } from "react"
import Child1 from "./Child1"

 let appdata = createContext()
 let name = "From app component"
function App() {
 

  return (
    <>
   
      <h1>wellcome</h1>
      <appdata.Provider value={name}>
        <Child1/>
      </appdata.Provider>
    </>
  )
}

export default App
export {appdata}
