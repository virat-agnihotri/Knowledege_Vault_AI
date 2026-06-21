import React from 'react'
import { SiNotion } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { GoPasskeyFill } from "react-icons/go";
import { IoBusinessOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate();
  return (
    <div className='login-page'>
        <div className='login-box'>
            <div className='login-top'>
                <SiNotion className='notion-logo'/>
                <h2>Your AI workspace.</h2>
                <h3>Log in to your Notion account</h3>
            </div>
            <div className='login-info'>
                <div className='login-input'>
                    <label htmlFor = "email">Email</label><br/>
                    <input id = "email" type = "email" placeholder='Enter your email address...' />
                    <p>Use an organization email to easily collaborate with teammates</p>
                    <button>Continue</button>
                </div>
                <div className='login-options'>
                    <fieldset>
                        <legend>or continue with</legend>
                        <button><FcGoogle className='login-google-logo'/> Google</button>
                        <button><FaApple  className='login-apple-logo'/> Apple</button>
                        <button><FaMicrosoft className='login-microsoft-logo'/> Microsoft </button>
                        <button><GoPasskeyFill className='login-passkey-logo'/> PassKey</button>
                        <button><IoBusinessOutline className='login-sso-logo'/> SSO</button>
                    </fieldset>
                </div>
            </div>
            <div className='login-others'>
                <h3>New user? <button onClick={()=>navigate("./SignUp")}>Sign Up</button></h3>
                <p>By continuing, you acknowledge that you understand and agree to the <button>Terms & Conditions</button> and <button>Privacy Policy</button>.</p>
            </div>
        </div>
    </div>
  )
}

export default Login
