import myimg from './assets/react.svg'

function App() {
 let product = [{
  id:1,pname:"mobile",pprice:20000,pimg:myimg
 }
,{
  id:2,pname:"laptop",pprice:10000,pimg:myimg
}]

  return (
    <>
    <div style={{display:"flex"}}>

    product.map((e)=>{return <div style={{border:"2px solid black"}}>
      
      <h1>Product name:{e.pname}</h1>
      <h1>Product price:{e.pprice}</h1>
      <img src="{e.pimg}" alt="" />
      <button>Add to cart</button>
      
      </div>})

    </div>
     
    </>
  )
}

export default App
