import React, { useState } from 'react'
import { Link, json } from 'react-router-dom';
function Signuppage() {
    const [username,setusername]=useState(``);
    const [password,setpassword]=useState(``);

    async function Register(ev){
        ev.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });
            if (response.status ===200){
                alert("successfull")
                console.log(response)
            }
            else if (response.status){alert("Registration failed")}
        } catch (error) {
            console.error('Error:', error);
        }
     }
  return (

             <div className="container ">
            <div className="container2">
            <h1 className="head">Signup page</h1>

            <form  onSubmit={Register}>
                <input type="text" required name="name" placeholder="Name"/>
            
                <input type="text" required name="username" placeholder="username" value={username} onChange={e=> setusername(e.target.value)}/>
                <input type="password" required name="password" placeholder="password" value={password} onChange={e=> setpassword(e.target.value)}/>
                <input type="password" required name="retype_password" placeholder="Confirm Password"/>
                
            <div className="container1">
                <button  className="button" type="submit">Submit</button>
            </div>
            <div className="w-3 h-12">
            <Link to="/login"> Login </Link>
            </div>
        </form>
        </div>
        
    </div>
  
  )
}

export default Signuppage;