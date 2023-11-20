import { formatISO9075 } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Postpage() {
    const [postinfo,setpostinfo]=useState([]);
    const {id}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`).then((response)=>{
            response.json().then((postinfo)=>{setpostinfo(postinfo)})
        })
    },[])
    if (postinfo){
        return (
            <div className='post-page'>
                <div className='image'>
                    <img src={`http://localhost:4000/${postinfo.cover}`}/>
                </div>
                <div className='content'>
                <h1>{postinfo.title}</h1>
                <div dangerouslySetInnerHTML={{__html:postinfo.content}}/>
                </div>
                
            </div>  
          )
    }
 
}

export default Postpage