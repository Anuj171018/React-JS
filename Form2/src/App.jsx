import { useState } from "react"
import Frm from "./Frm"


function App() {
 let [frmdata,setFrmdata]=useState({
  username:"",age:"",contact:""
 })
 function Inputvalue(e){
  const {name,value}= e.target
  setFrmdata({...frmdata,[name]:value})
 }
 function finalsubmit(e){
  e.preventDefault()
  console.log(frmdata);
  localStorage.setItem("userdata",JSON.stringify(frmdata))
  
 }

  return (
    <>
    <h1>Name : {frmdata.username }</h1>
    <h1>Age : {frmdata.age }</h1>
    <h1>Contact : {frmdata.contact }</h1>

    <form onSubmit={finalsubmit}>
      <label htmlFor="">Name</label>
      <input type="text" name="username" onChange={Inputvalue} /><br /><br />

      <label htmlFor="">Age</label>
      <input type="text" name="age" onChange={Inputvalue} /><br /><br />

      <label htmlFor="">Contact</label>
      <input type="text" name="contact" onChange={Inputvalue} /><br /><br />

      <input type="submit"  />
    </form>
      <Frm/>
    </>
  )
}

export default App
