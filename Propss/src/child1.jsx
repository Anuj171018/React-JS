 import Child2 from './child2'
 
 function Child1(props){
    return(
        <>
        <h1>My name is {props.name}  </h1>
        <Child2 course="FSD"/>

        
        </>
    )
 }
 export default Child1