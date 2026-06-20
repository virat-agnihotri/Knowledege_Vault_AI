import { useState } from 'react'
import './App.css'
import SideBar from "./components/SideBar"
function App() {
  const [count, setCount] = useState(0)
  const message="hello";

  return (
   <div>
    <SideBar abcd={message} />
   </div>
  )
}

export default App;
