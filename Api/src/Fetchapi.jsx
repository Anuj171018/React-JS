import axios from "axios"
import { useEffect } from "react"


function Fetchapi() {
useEffect(()=>{
    axios.get('http://localhost:3000/userdata')
    .then(res=>console.log(res.data)
    )
},[])

    return (
      <>
      <h1>Data from api</h1>
      <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>n</th>
        </tr>
      </table>
        
      </>
    )
  }
  
  export default Fetchapi