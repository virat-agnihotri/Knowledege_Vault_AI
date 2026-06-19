
import { useState, useEffect, useRef } from "react"

function SideBar(props) {
  const [message,setMessage] = useState("");
  const [signupActive,setSignupActive] = useState(null);
  const[showDialogBox,setshowDialogBox]=useState(false);
  const[workSpaceName,setworkSpaceName]=useState("")
  const[theme,settheme]=useState("light")
  const[count,setCount]=useState(0)
  const[workspaces,setworkspaces]=useState(["ai","notes","modules"])
  const[options,setoptions]=useState(false)
  const[showinput,setshowinput]=useState(false)
  const[text,settext]=useState("")
  const[files,setfiles]=useState(null);
  const fileInputRef = useRef(null);
  const inputref=useRef(null);
  const videoref=useRef(null)
  const canvaref=useRef(null);


  const handleUpload = async() => {
    console.log("button clicked")
    const response = await fetch(
      "http://127.0.0.1:8000/upload"
    );
    const data=await response.json();
    setMessage(data.message);
  }
  const createWorkspace = () => {
    console.log("Workspace created:", workSpaceName);
    setshowDialogBox(false);
    setworkSpaceName("");
  }
  useEffect(() => {
    console.log("Theme changed to:", theme);
  }, [theme]);

  const draw=()=>{
    const canvas=canvaref.current;
    const ctx=canvas.getContext("2d");
    ctx.fillReact(50,50,100,100);
  };

  return (
    
    <div className={`navbar ${theme}`}>
      <button className="buttons" onClick={()=>setshowDialogBox(true)}>
        workspaces
      </button>
      <button className="buttons" onClick={handleUpload}>
        upload
      </button>
      <button className="buttons-theme" onClick={() =>settheme(theme==="light"?"dark":"light")}>
        {theme}
      </button>
      <button className="buttons" onClick={()=>{setCount(count+1);console.log(count);}}>
        count={count}
      </button>
      <button className="buttons" onClick={()=>setshowinput(true)}>
        Options
      </button>
      {showinput && (
        <input type="text"
        value={text}
        onChange={(e)=>settext(e.target.value)}
        placeholder="typesomething" />

      )
      }

      <h2>{text}</h2>
      <button className="buttons" onClick={()=>fileInputRef.current.click()}>
        select file
      </button>
      <input
      type="file"
      ref={fileInputRef}
      style={{display:"none"}}
      onChange={(e)=>setfiles(e.target.files[0])} />
      <p>
        {files
          ? `Selected: ${files.name}`
          : "No file selected"}</p>
      
      <button className="buttons" onClick={()=>inputref.current.focus()}>
        focus input
      </button>
      <input ref={inputref} placeholder="type here" />

      
      <video ref={videoref} width="100" src="https://www.w3schools.com/html/mov_bbb.mp4"/>
      <br/>
      <button className="buttons" onClick={()=>videoref.current.play()}>play</button>
      <button className="buttons" onClick={()=>videoref.current.pause()}>pause</button>
      
      <button className="buttons" onClick={()=>draw}>
        draw square
      </button>
      <canvas ref={canvaref} width={300} height={200} style={{border:"1px solid black"}} />
      <br/>
      
      <p>{props.abcd}</p>
      {
        workspaces.map((workspace)=>(<p>{workspace}</p>))
      }
      

      <p>{message}</p>
      {showDialogBox && (
        <div className="overlay">
          <div className="dialog">
            <h3>Create Workspace</h3>

            <input
              type="text"
              value={workSpaceName}
              
              placeholder="Enter workspace name"
              onChange={(e) => setworkSpaceName(e.target.value)}
            />

            <button onClick={createWorkspace}>Create</button>
            <button onClick={() => setshowDialogBox(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar