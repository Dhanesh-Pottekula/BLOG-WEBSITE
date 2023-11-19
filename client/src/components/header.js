import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Header() {
  const [username,setUsername]=useState(null);
  useEffect(()=>{

    fetch("http://localhost:4000/profile", { credentials: 'include' })
      .then((response) => response.json())
      .then((info) => {return setUsername(info.username)})

  },[]);
  return (
    <header className="App-header">
    <div className="App">
      
      <Link to="">My blog</Link>

      <nav>
        <Link to="/login">Login</Link>
        <Link to="/Signup">Signup</Link> 
        <Link to="/newpost">create new post</Link> 

      </nav>
    </div>
      </header>
  )
}

export default Header