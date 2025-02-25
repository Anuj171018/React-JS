import Myimg from './p1.webp'
import './App.css'
function App() {

let name = "Anuj"
let age = 25
let st = {
  color:"blue",
  backgroundColor:"balck",
  padding:"20px",
  fontFamily:"cursive"
}

  return (
    <>

    <nav className='nav'>
      <div>logo</div>
      <div>
        <ul className='ul'>
          <li>About</li>
          <li>Contact</li>
          <li>Email</li>
          </ul></div>
    </nav>
    <h1>welcome to react class</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi cum dolorem laudantium blanditiis inventore fugit, unde iure commodi libero eius, dignissimos labore nam error doloremque cumque quam cupiditate minus. Earum.</p>
    {/* <img src="p1.webp" alt="" height = "100px"/> */}
    <img src={Myimg} alt=""  height="100px"/>
    <h1 style={{color:"red",backgroundColor:"yellow",fontFamily:"cursive"}}>My name is {name}</h1>
    <h1 style={st}>My age is {age}</h1>

    <h1 className='ex'>External css applied</h1>
    </>
  )
}

export default App
