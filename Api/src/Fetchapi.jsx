import axios from "axios"
import { useEffect, useState } from "react"


function Fetchapi() {
let [apidata,setapidata] = useState([])

useEffect(()=>{
    axios.get('http://localhost:3000/userdata')
    .then(res=>setapidata(res.data)
    )
},[])

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
        </tr>
        {
          apidata.map((e)=>{return <tr>
            <td>{e.id}</td>
            <td>{e.uname}</td>
            <td>{e.age}</td>
            <td>{e.contact}</td>
            <td>{e.city}</td>
          </tr>})
        }
      </table>
        
      </>
    )
  }
  
  export default Fetchapi