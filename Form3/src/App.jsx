import { useEffect } from "react"
import { useState } from "react"

function App() {
  let [frmdata,setfrmdata] = useState({
    username:"",address:"",mobile:"",email:""
  })
  let [userdata,setUserdata] = useState({})

  function Inputvalue(e){
    const{name,value}= e.target
    setfrmdata({...frmdata , [name]:value})

  }

  function finalsubmit(e){
    e.preventDefault()
    localStorage.setItem("userdata",JSON.stringify(frmdata))
  }
  useEffect(()=>{
    let localdata = JSON.parse(localStorage.getItem('userdata'))
    setUserdata(localdata)},[finalsubmit]
  )

  return (
    <>
    <form action="" onSubmit={finalsubmit}>
    <label htmlFor=""> name</label>
    <input type="text" name="username" onChange={Inputvalue} />
    <br /><br />
    <label htmlFor=""> address</label>
    <input type="text" name="address" onChange={Inputvalue} />
    <br /><br />
    <label htmlFor=""> Mobile</label>
    <input type="text" name="mobile" onChange={Inputvalue} />
    <br /><br />
    <label htmlFor=""> email</label>
    <input type="text" name="email" onChange={Inputvalue} />
    <br /><br />

    <input type="submit" name="" id="" />

    </form>
    <h1>name : {userdata.username}</h1>
    <h1>address : {userdata.address}</h1>
    <h1>moblie : {userdata.mobile}</h1>
    <h1>email : {userdata.email}</h1>
    </>
  )
}

export default App
