import { useState } from 'react'
import './App.css'
import SideBar from "./components/SideBar"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
function App() {
  const [count, setCount] = useState(0)
  const message="hello";

  return (
   <div>
    <Login />
   </div>
  )
}

export default App;
