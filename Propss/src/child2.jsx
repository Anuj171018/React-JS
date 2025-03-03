import Child3 from './child3'


function Child2(props){
    let {course} = props
    
    return(
        <>
        <h1>My course {course}</h1>
        <Child3 location="Ashoka Garden (child2)"/>

        </>
    )
}

export default Child2