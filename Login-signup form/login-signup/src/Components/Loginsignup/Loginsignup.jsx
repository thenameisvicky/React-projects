import React, { useState } from 'react'
import './Loginsignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const Loginsignup = () => {
    
  const [action,setAction]=useState("LOG IN");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="LOG IN"?<div></div>: <div className="input" ><img src={user_icon} alt="user_icon" /><input type="text" placeholder='Phone Number'/></div>}
          <div className="input"><img src={email_icon} alt="email_icon" /><input type="email" placeholder=' Email Id'/></div>
           
            <div className="input"><img src={password_icon} alt="password_icon" /><input type="password" placeholder=' Password'/></div>
        </div>
        {action==="SIGN UP" ?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
       
        <div className="sumbit-container">
          <div className={action==="SIGN UP"?"sumbit gray":"sumbit"} onClick={()=>{setAction("SIGN UP")}}>Sign up</div>
          <div className={action==="LOG IN"?"sumbit gray":"sumbit"} onClick={()=>{setAction("LOG IN")}}>Login </div>
        </div>
    </div>
  )
}
export default Loginsignup