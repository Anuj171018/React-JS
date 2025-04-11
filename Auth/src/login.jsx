import { useState } from "react"

function Login(){
    let [frmdata,setFrmdata] = useState({
        email:"",password:""
    })

    function handleinput(e){
        const {name,value} = e.target
        setFrmdata({...frmdata,[name]:value})
    }

    let localdata = JSON.parse(localStorage.getItem('signdata'))
    
    function loginsubmit(e){
        e.preventDefault()
        if(frmdata.email != localdata.email || frmdata.password != localdata.password){
            alert("user not found")
        }
        else{
            alert("login successful")
        }
    }

    return(
        <>
        <h1>login page </h1>

        <form action="" onSubmit={loginsubmit}>
            <label htmlFor="">Email</label>
            <input type="text" name="email" id="" onChange={handleinput} /><br /><br />
            <label htmlFor="">Password</label>
            <input type="text" name="password" id="" onChange={handleinput} /><br /><br />

            <input type="submit" name="" id="" />
        </form>


        </>
    )

}
export default Login