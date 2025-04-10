import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Sign(){
    let [frmdata,setFrmdata] = useState({
        name:"",email:"",password:""
    })
    let navigator = useNavigate()
    function Inputhandle(e){
        const{name,value} = e.target
        setFrmdata({...frmdata,[name]:value})
    }
    function finalsubmit(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem("signdata",JSON.stringify(frmdata))
        navigator('/login')
        
    }
    return(
        <>

        <form action="" onSubmit={finalsubmit}>
            <label htmlFor=""> Name</label>
            <input type="text" name="name" onChange={Inputhandle} /><br />
            <label htmlFor=""> email</label>
            <input type="text" name="email" onChange={Inputhandle} /><br />
            <label htmlFor=""> Password</label>
            <input type="text" name="Password" onChange={Inputhandle} /><br />

            <input type="submit" />
        </form>

        </>
    )

}
export default Sign