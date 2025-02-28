import Child3 from './child3'

function Child2(props){
    return(
        <>
        <h1>My course {props.course}</h1>
        <Child3 location="Ashoka Garden"/>

        </>
    )
}

export default Child2