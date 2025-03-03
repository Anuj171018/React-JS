 import Child2 from './child2'
 
 function Child1(props){
    let {name} = props
    return(
        <>
        <h1>My name is {name}  </h1>
        <Child2 course="FSD (child1)"/>

        
        </>
    )
 }
 export default Child1