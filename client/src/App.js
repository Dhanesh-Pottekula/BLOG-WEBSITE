import logo from './logo.svg';
import React from 'react';
import './App.css';
import Blog_card from './components/blog_card';
import Header from './components/header';
import{Route,Routes} from "react-router-dom";
import Layout from './components/layout';
import Indexpage from './pages/Indexpage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/signup';
import Newpost from './pages/newpost';
import Postpage from './pages/postpage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element= {<Loginpage />}/>
          <Route path="/home" element= {<Indexpage />}/>

          <Route path='/login' element={
            <Loginpage/>
          }/>
          <Route path='/Signup' element={
            <Signuppage/>
          }/>
          <Route path='/newpost' element={
            <Newpost/>
          }/>
          <Route path='/post/:id' element={
            < Postpage/>
          }/>

          
      </Route>
        </Routes>
      
     
    
    
      
  );
}

export default App;
