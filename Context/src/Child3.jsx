import { createContext } from "react"
import Child4 from "./Child4"

let data=createContext()
let city = "My city is Bhopal"
function Child3(){
    return(
    <>
    <h1>Child 3  here</h1>
    <data.Provider value={city}>
    <Child4/>
    </data.Provider>
    </>
    )
}

export default Child3
export {data}