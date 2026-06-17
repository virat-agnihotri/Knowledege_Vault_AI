import { useState } from "react"
import axios from "axios"
function SideBar() {
  const [message,setMessage] = useState("");
  const [signupActive,setSignupActive] = useState(null);


  const handleUpload = async() => {
    alert("button clicked")
    console.log("button clicked")
    const response = await fetch(
      "http://127.0.0.1:8000/upload"
    );

    const data=await response.json();
    setMessage(data.message);
  }
  return (
    <div className="navbar">
      <button className="buttons" onClick={handleUpload}>
        upload
      </button>
      <p>{message}</p>
    </div>
  )
}

export default SideBar