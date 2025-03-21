import { data } from "./Child3"



function Child5(){
    return(
    <>
    <h1>Child 5  here</h1>
    <data.Consumer>
        {
            (data)=>{return <h1> {data}</h1>}
        }
    </data.Consumer>
    
    </>
    )
}

export default Child5