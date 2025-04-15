import axios from "axios"
import { useEffect, useState } from "react"


function Fetchapi() {
let [apidata,setapidata] = useState([])
let [frm,setFrm] = useState(false)
let [editdata,setEditdata] = useState({})
function mydelete(id){
  axios.delete(`http://localhost:3000/userdata/${id}`)
  .then(r=>alert("Data Deleted"))
}
function valueupdate(e){
  const {name,value} = e.target
  setEditdata({...editdata,[name]:value})
}
function finaleditsubmit(e){
  e.preventDefault()
  axios.put(`http://localhost:3000/userdata/${editdata.id}`,editdata)
  .then(r=>alert("edit successfull"))
  setFrm(false)
}

useEffect(()=>{
    axios.get('http://localhost:3000/userdata')
    .then(res=>setapidata(res.data)
    )
},[mydelete])

    return (
      <>
      <h1 align={"center"}>Data from api</h1>
      <table border={"2"} align="center">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>contact</th>
            <th>city</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        {
          apidata.map((e)=>{return <tr>
            <td>{e.id}</td>
            <td>{e.uname}</td>
            <td>{e.age}</td>
            <td>{e.contact}</td>
            <td>{e.city}</td>
            <td><button onClick={()=>mydelete(e.id)}>Delete</button></td>
            <td><button onClick={()=>{setFrm(true),setEditdata(e)}}>Update</button></td>
            
          </tr>})
        }
      </table>
        {
          frm && (
            <>
            <h1>Edit Form</h1>
            <form action="" onSubmit={finaleditsubmit}>
              <label htmlFor="">id</label>
              <input type="text" name="id" value={editdata.id} readOnly  onChange={valueupdate}/><br />
              <label htmlFor="">name</label>
              <input type="text" name="uname" value={editdata.uname}  onChange={valueupdate}/><br />
              <label htmlFor="">age</label>
              <input type="text" name="age"  value={editdata.age} onChange={valueupdate} /><br />
              <label htmlFor="">contact</label>
              <input type="text" name="contact" value={editdata.contact} onChange={valueupdate}/><br />
              <label htmlFor="">city</label>
              <input type="text" name="city"  value={editdata.city} onChange={valueupdate}/><br />

              <input type="submit" name="" id="" />
            </form>
            </>
          )
        }
      </>
    )
  }
  
  export default Fetchapi