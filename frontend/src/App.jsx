import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import Trash from "./components/trash"
import Login from "./components/Login"
import SignUp from "./components/SignUp";

// Layout wrapper for pages that have a sidebar
function MainLayout() {
  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: '#fff'  // ← white background
    }}>
      <SideBar />
      <main style={{ 
        flex: 1, 
        overflow: 'auto', 
        backgroundColor: '#fff'  // ← white, not gray
      }}>
      </main>
    </div>
  );
}

function App() {
  const [signupLogin, setSignupLogin] = useState("signup");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/sideBar" element={<MainLayout />} />  {/* ← use layout here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;