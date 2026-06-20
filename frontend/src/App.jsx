import { useState } from 'react'
import './App.css'
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import Trash from "./components/trash"
function App() {
  const [count, setCount] = useState(0)
  const message="hello";

  return (
   <div>
    <SideBar/>
    <NavBar/>
    {/* <Trash abcd={message}/> */}
   </div>
  )
}

export default App;
