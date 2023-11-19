
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function Loginpage() {

    const [username,setusername]=useState(``);
    const [password,setpassword]=useState(``);
    const navigate = useNavigate();

    async function login(ev){
        ev.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password}),
                credentials:"include",
            });
            if (response.ok){
                navigate("/");
                alert("Loged in")
            }
            else{alert(" not logged in");}
        } catch (error) {
            alert("Error");
        }
        
     }
  return (

             <div className="container ">
            <div className="container2">
            <h1 className="head">Login page</h1>

            <form onSubmit={login} >
                
                <input type="text" required name="username" placeholder="Email" value={username} onChange={ev=>setusername(ev.target.value)}/>
                <input type="password" required name="password" placeholder="password" value={password} onChange={ev=>setpassword(ev.target.value)}/>
                
            <div className="container1">
                <button  className="button" type="submit">Login</button>
            </div>
            <div className="w-3 h-12">
                <Link to="/Signup"> Signup </Link>
            </div>
        </form>
        </div>
        
    </div>
  
  )
}

export default Loginpage;