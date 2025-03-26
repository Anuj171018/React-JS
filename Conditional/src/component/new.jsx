import { useState } from "react"

function Neww(){
    let [st,setSt] = useState(true)
    let [num,setNum] = useState(0)
    function decrement(){
        if(num!=0){
            setNum(num-1)
        }
    }
    
   
    return(
        <>
        {st ? <h1>Anuj Shrivastava </h1> : ""}
        
        <br /><br />

        <button onClick={()=>setSt(false)}>Hide</button>
        <button onClick={()=>setSt(true)}>Show</button>
        <button onClick={()=>setSt(!st)}>Toggle</button>
        <button onClick={()=>setSt(!st)}>{st ? "hide":"show" }</button>
        {/* <button onClick={()=>setNum(num+1)}>+</button>
        <button onClick={()=>setNum(num-1)}>-</button> */}
        <br /><br />
        <h1>{num}</h1>
        <br /><br />
        <button onClick={()=> setNum(num+1)}>+</button>
        <button onClick={decrement }>-</button>
        
        </>
    )
}
export default Neww