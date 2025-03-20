import { useState } from "react"
import { useEffect } from "react"



function App() {
  let [val,setVal]=useState(0)
  useEffect(()=>{alert("Working")},[])

  return (
    <>
    <h1>{val}</h1>
    <button onClick={()=>{setVal(val+1)}}>Add</button>
      
      <h1>hello</h1>
    </>
  )
}

export default App
