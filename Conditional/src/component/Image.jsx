import { useState } from "react"
import p1 from "/p1.png"
import p2 from "/p2.png"
import p3 from "/p3.png"
import p4 from "/p4.png"
import p5 from "/p5.png"
import '../App.css'
function Myimg(){
    let [ig,setIg] = useState(p1)
    return(
        <>
         <section className="sec1">
            <div>
                <ul>
                    <li><img src={p2} alt="" width={200} onMouseEnter={()=>setIg(p2)}/></li>
                    <li><img src={p3} alt="" width={200} onMouseEnter={()=>setIg(p3)}/></li>
                    <li><img src={p4} alt="" width={200} onMouseEnter={()=>setIg(p4)}/></li>
                    <li><img src={p5} alt="" width={200} onMouseEnter={()=>setIg(p5)}/></li>
                </ul>
            </div>
            <div>
            <img src={ig} alt="" height={200} />
            </div>
         </section>
        </>
    )
}
export default Myimg