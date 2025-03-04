import { useState } from "react"

function App() {
  let [name,setName] = useState("Anuj Shrivastava")
  let [age,setAge] = useState(25)
  let [city,setCity] =useState("Bhopal")
  let [color,setColor] = useState("")

  function fun1(){
    setName("Ayush Shrivastava")
  }
  // function fun2(){
  //   setAge(22)
  // }
  function fun3(){
    setCity("Rajgarh")
  }
  
    return(
      <>
        <div style={{height:"100vh",backgroundColor:color}} className="div1" >
      <h1>My name is {name}</h1>
      <h1>My age is {age}</h1>
      <h1>My city is {city}</h1>
      <button onClick={fun1}>Name Change</button>
      {/* <button onClick={fun2}>Age Change</button> */}
      <button onClick={()=>setAge(22)}>Age Change</button>
      <button onClick={fun3}>City Change</button>
      <button onClick={()=>setColor("Red")}>red</button>
      <button onClick={()=>setColor("yellow")}>yellow</button>
      <button onClick={()=>setColor("green")}>green</button>
      </div>
      </>
    )
  
}

export default App
