import { useContext } from "react"
import { senddata } from "./main"

function Contact(){
    let acceptdata = useContext(senddata)
    return(
        <>
        <h1>Contact {acceptdata.name} and my age is {acceptdata.age}, my contact is {acceptdata.contact}</h1>
       {/* <senddata.Consumer>
      {
        (appdata)=>{return <h1>{appdata}</h1>}
      }

       </senddata.Consumer> */}
        </>
    )
}
export default Contact