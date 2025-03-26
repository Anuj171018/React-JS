import { useState } from "react";

function App() {
  let [frmdata,setFrmdata]= useState()
  let [lastname,setLastname] = useState()
  let [con,setCon]= useState()
  let [pass,setPass]=useState()
  let [email,setEmail] = useState()
 function Inputvalue(e){
  console.log(e.target.value);
  setFrmdata(e.target.value)
 }
 function Lname(e){
  setLastname(e.target.value)
 }
 function Contactvalue(e){
  setCon(e.target.value)
 }
 function Passvalue(e){
  setPass(e.target.value)
 }
 function Emailvalue(e){
  setEmail(e.target.value)
 }

  return (
    <>
      <h1>First Name : {frmdata} </h1>
      <h1>Last Name : {lastname} </h1>
      <h1>Contact : {con} </h1>
      <h1>Password : {pass} </h1>
      <h1>Email : {email} </h1>
      <form action="">
        <label htmlFor="">First Name</label>
        <input type="text" name="" id="" onChange={Inputvalue} />
        <br /><br />
        <label htmlFor="">Last Name</label>
        <input type="text" name="" id="" onChange={Lname}/>
        <br /><br />
        <label htmlFor="">Contact</label>
        <input type="text" name="" id="" onChange={Contactvalue} />
        <br /><br />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" onChange={Passvalue} />
        <br /><br />
        <label htmlFor="">Email</label>
        <input type="email" onChange={Emailvalue} />
      </form>
    </>
  )
}

export default App
