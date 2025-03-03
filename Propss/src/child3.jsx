// function Child3(props){
//     let {location} = props
//     return(
//         <>
//         <h1>My location is {location}</h1>
//         </>
//     )
// }
// export default Child3

function Child3 ({location,a}){
    return(
        <>
        <h1>My location is {location}{a}
        </h1>
        </>
    )
}
export default Child3