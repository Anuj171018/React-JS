import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Insert(){
    let [frmdata,setFrmdata] = useState({
        uname:"",age:"",contact:"",city:""
    })
    let nav = useNavigate()
   
    function Inputvalue(e){
        const{name,value} = e.target
        setFrmdata({...frmdata,[name]:value})
    }
    function finalsubmit(e){
        e.preventDefault()
        console.log(frmdata);
        axios.post("http://localhost:3000/userdata",frmdata)
        nav('/fetchapi')
        
    }

    return(
        <>
        <h1>Instert data into</h1>
        <form action="" onSubmit={finalsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="uname" id="" onChange={Inputvalue}/><br />
            <label htmlFor="">Age</label>
            <input type="text" name="age" id="" onChange={Inputvalue}/><br />
            <label htmlFor="">Contact</label>
            <input type="text" name="contact" id="" onChange={Inputvalue} /><br />
            <label htmlFor="">City</label>
            <input type="text" name="city" id="" onChange={Inputvalue} /><br />

            <input type="submit" name="" id="" />
        </form>
        
        </>
    )
}

export default Insert