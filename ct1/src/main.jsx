import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
let senddata = createContext()
let ob = {name:"Anuj",age:26,contact:8516868273}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <senddata.Provider value={ob}>
    <App />
    </senddata.Provider>
  </StrictMode>
)
export {senddata}
