import { useState } from "react"

function Frm(){
    let[data,setData]=useState({
        username:"",age:"",contact:"",email:"",password:""
    })
    function Datavalue(e){
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    function Finalsub(e){
        e.preventDefault()
        console.log(data);
        

    }

    return(
        <>

        <form action="" onSubmit={Finalsub}>
        <label htmlFor="" >Name</label>
        <input type="text" name="username" id="" onChange={Datavalue} /><br /><br />
        <label htmlFor="" >Age</label>
        <input type="text" name="age" id="" onChange={Datavalue} /><br /><br />
        <label htmlFor="" >Conatct</label>
        <input type="text" name="contact" id="" onChange={Datavalue} /><br /><br />
        <label htmlFor="" >Email</label>
        <input type="text" name="email" id="" onChange={Datavalue} /><br /><br />
        <label htmlFor="" >Password</label>
        <input type="text" name="password" id="" onChange={Datavalue} /><br /><br />

        <input type="submit" name="" id="" />

        </form>
        
        
        </>
    )
}
export default Frm