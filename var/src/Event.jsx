const Event = ()=>{
    function fun(){
        alert("onclick")
    }
    function fun1(){
        alert("ondblclick")
    }
    function fun2(){
        alert("on mouse enter")
    }

    return(
        <>
        <button onClick={fun}>Click</button>
        <button onDoubleClick={fun1}>Ondblclick</button>
        <button onMouseEnter={fun2}>on mouse enter</button>
        </>
    )
}
export default Event