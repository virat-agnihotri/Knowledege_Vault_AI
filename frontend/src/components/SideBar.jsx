import { useState, useEffect, useRef, useCallback } from "react";
import { GoHome } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiInbox2Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { PiNotepad } from "react-icons/pi";
import { FaArrowDown, FaPlus } from "react-icons/fa6";
import { LuLibraryBig } from "react-icons/lu";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { LuTrash2 } from "react-icons/lu";
import { FaBookOpen } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { RxDoubleArrowLeft } from "react-icons/rx";

function SideBar(){
    const [userName, setuserName] = useState("Virat")

    // =================== Resizable Sidebar ====================================
    const [width, setWidth] = useState(270);
    const [isResizing, setIsResizing] = useState(false);
    const dragInfo = useRef({ startX: 0, startWidth: 0 });

    const startResize = useCallback((e) => {
        e.preventDefault();
        setIsResizing(true);
        dragInfo.current = {
            startX: e.clientX,
            startWidth: width,
        };
    }, [width]);

    useEffect(() => {
        if (!isResizing) return;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - dragInfo.current.startX;
            const newWidth = dragInfo.current.startWidth + deltaX;
            setWidth(Math.max(270, Math.min(600, newWidth)));
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isResizing]);
    // ===================== SideBar Options ===================================
    const [showoptions,setShowOptions] = useState("Home")
    // ===================== Agent Dropdown =====================================
    const [showAgent, setshowAgent] = useState(false);
    const [showInput, setshowInput] = useState(false);
    const [agentName, setagentName] = useState("");
    const [agents, setAgents] = useState([]);
    const addAgent = () => {
        if (agentName.trim() !== "") {
            setAgents([...agents, agentName]);
            setagentName("");
            setshowInput(false);
        }
    }
    const [showArrow,setshowArrow]=useState(false);

    // ===================== Private Dropdown ===================================
    const [showPrivate, setshowPrivate] = useState(false);
    const [showPrivateInput, setshowPrivateInput] = useState(false);
    const [privateName, setprivateName] = useState("");
    const [privates, setPrivates] = useState([]);

    const addPrivate = () => {
        if (privateName.trim() !== "") {
            setPrivates([...privates, privateName]);
            setprivateName("");
            setshowPrivateInput(false);
        }
    }
    return(
        // ===============================workspace options================================
        <div className="sidebar" style={{ width: `${width}px` }}>
            <div className="sidebar-resize">
                <div className="sidebar-user-mention">
                   <label><FaUserTie className="user-icon"/>{`${userName}'s Space`}<button><IoIosArrowDown/></button><button className="double-arrow-icon"><RxDoubleArrowLeft/></button></label>
                </div>
                <div className="sidebar-options">
                    <button onClick={()=>setShowOptions("Home")}><GoHome className="home-icon"/>{showoptions == "Home" ? "Home" : ""}</button>
                    <button onClick={()=>setShowOptions("Chat")}><IoChatbubbleOutline/>{showoptions == "Chat" ? "Chat" : ""}</button>
                    <button onClick={()=>setShowOptions("Meetings")}><PiNotepad/>{showoptions == "Meetings" ? "Meetings" : ""}</button>
                    <button onClick={()=>setShowOptions("Inbox")}><RiInbox2Line/>{showoptions == "Inbox" ? "Inbox" : ""}</button>
                    <div className="search-end">
                        <button><IoIosSearch/></button>
                    </div>
                </div>

                <div className="workspace">
                    <button>Set up your workspace</button>
                </div>

                {/* ======================== Agents ========================== */}
                <div className="agents">
                    <div className="agents-header" onClick={() => setshowAgent(!showAgent)}>
                        <button >Agents</button>
                        {showAgent ? (
                            <IoIosArrowDown className="arrow" onClick={() => setshowAgent(false)}/>
                        ) : (
                            <IoIosArrowForward className="arrow" onClick={() => setshowAgent(true)}/>
                        )}
                        
                        <div className="three-end">
                            <button className="three-dot-options"><BsThreeDots /></button>
                        </div>
                    </div>
                    {showAgent && (
                        <div className="agent-options">
                            <button onClick={() => setshowInput(!showInput)}>
                                <FaPlus />New agent
                            </button>
                            {showInput && (
                                <input
                                    type="text"
                                    placeholder="Enter"
                                    value={agentName}
                                    onChange={(e) => setagentName(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === "Enter") addAgent(); }}
                                    autoFocus
                                />
                            )}
                            {agents.map((agent, index) => (
                                <button key={index}>{agent}</button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ====================== Private ========================== */}
                <div className="private">
                    <div className="private-headers" onClick={() => setshowPrivate(!showPrivate)}>
                        <button >Private</button>
                        {showPrivate ? (
                            <IoIosArrowDown className="arrow" onClick={() => setshowPrivate(false)}/>
                        ) : (
                            <IoIosArrowForward className="arrow" onClick={() => setshowPrivate(true)}/>
                        )}
                        
                        <div className="three-end">
                            <button className="three-dot-options"><LuLibraryBig/></button>
                            <button className="three-dot-options"><BsThreeDots/></button>
                            <button className="three-dot-options"><FaPlus/></button>
                        </div>
                    </div>
                    {showPrivate && (
                        <div className="private-options">
                            <button><FaBookOpen/>The Notion Basics</button>
                            <button onClick={() => setshowPrivateInput(!showPrivateInput)}>
                                <FaPlus/>Add new
                            </button>
                            {showPrivateInput && (
                                <input
                                    type="text"
                                    placeholder="Enter"
                                    value={privateName}
                                    onChange={(e) => setprivateName(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === "Enter") addPrivate(); }}
                                    autoFocus
                                />
                            )}
                            {privates.map((privatee, index) => (
                                <button key={index}><IoIosArrowForward/>{privatee} 
                                <div className="dot-plus-last"><button><BsThreeDots/></button>
                                <button><FaPlus className="plus-last"/></button></div></button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="lib-help-trash">
                    <button className="lib"><LuLibraryBig/>Library</button>
                    <button className="help"><RxQuestionMarkCircled/>Help</button>
                    <button className="trash"><LuTrash2/>Trash</button>
                </div>
                <div className="open-new-chat">
                    <button className="new-chat-btn">New Chat <p>Ctrl+o</p></button>
                    <button className="pencil-logo"><BsPencilSquare/></button>
                </div>
            </div>

            {/* ===================== Resize Handle ========================= */}
            <div
                className={`sidebar-dragger ${isResizing ? "resizing" : ""}`}
                onMouseDown={startResize}
            />
        </div>
    );
}

export default SideBar;