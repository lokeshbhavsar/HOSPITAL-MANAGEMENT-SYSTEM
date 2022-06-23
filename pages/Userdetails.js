import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Userdetails = (props) => {

 const [obj,setbj]=useState({})
 const[status,setstatus]=useState()
 const[opstatus,setopstatus]=useState()
 const[flag,setflag]=useState()
 
  


 useEffect(()=>{
  fetchapi()
  
 },[status])

 const fetchapi=async()=>{
  const ustype=props.usertype
  const usaadhar=props.aadhar
  const fetchdata=await axios.get(`http://localhost:8898/${ustype}/${usaadhar}`)
  setbj(fetchdata.data)
  
  if(obj.isactive)
  {
    setstatus("Active")
    setopstatus("Deactivate user")
  }
  if(!obj.isactive)
  {
    setstatus("Deactive")
    setopstatus("Activate user")
  }
  
  
  

 }


  return (
    <div>
    
    <div className="container-fluid">
            <div className="row justify-content-center my-5">                
                <div className='col-7 bg-info'>

                <div className="row justify-content-evenly my-5">                
                <div className='col-5 my-3 colorwhite'> <h3>DESIGNATION </h3></div>
                <div className='col-5 my-3 colorwhite'> <h3>{obj.usertype}</h3></div>

                <div className='col-5 my-3 colorwhite'> <h3>AADHAR ID</h3></div>
                <div className='col-5 my-3 colorwhite'> <h3>{obj.id}</h3></div>

                <div className='col-5 my-3 colorwhite'> <h3>NAME</h3></div>
                <div className='col-5 my-3 colorwhite' > <h3>{obj.nam}</h3></div>
          
                <div className='col-5 my-3 colorwhite'> <h3>STATUS</h3></div>
                <div className='col-5 my-3 colorwhite' > <h3>{status}</h3></div>


              </div>

                  
                </div>   
                 
                <div className='col-3 bg-secondary'>
               
                  <div className='row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                 

                  </div>
                  <div className='row justify-content-center'>
                  <div className='col-12 bg-secondary'>
                  <button type="button" className="btn btn-primary" >{opstatus}</button>
                  </div>
                  </div>
                  
                  </div>    
            </div>    
    </div>    
    
    </div>
  )
}

export default Userdetails