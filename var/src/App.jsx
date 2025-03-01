import Event from "./Event"

function App() {
//  let name = "Anuj"
// let name = prompt("Enter your name")
// let emp = {
//   fname:"Anuj",
//   lname:"Shrivastava",
//   occupation:"FSD",
//   salary:20000
// }
let arr=["Anuj","Shrivastava",25,"FSD","Ashoka Garden",8516868273,"Rajgarh"]

  return (
    <>
      {/* <h1>My first name is {emp.fname} and last name is {emp.lname}</h1>
      <h1>My job is {emp.occupation}</h1>
      <h1>My salary is {emp.salary}</h1> */}
      <h1>My first name is : {arr[0]}</h1>
      <h1>My last name is : {arr[1]}</h1>
      <h1>My age is : {arr[2]}</h1>
      <h1>My postion is : {arr[3]}</h1>
      <h1>My address : {arr[4]}</h1>
      <h1>My contact is : {arr[5]}</h1>
      <h1>My city is : {arr[6]}</h1>

      <Event />

      
    </>
  )
}

export default App
