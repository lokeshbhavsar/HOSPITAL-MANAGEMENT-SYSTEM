
import { useRouter } from 'next/router'
import React, { useEffect,useState } from 'react'

import DoctViewPatient from "./DoctViewPatient"
const Doctor = () => {
    const nav=useRouter()
    const [username,setusername]=useState()
    const [aadhar,setaadhar]=useState()
    useEffect(()=>{
        
        setusername(nav.query.name)
        setaadhar(nav.query.aadhar)
    })
        
  return (
    <div>
<div>
      <div className='container-fluid'>
      <div className="row justify-content-center">
        <div className="col-4 heig text-center bg-danger "  >
        
         <div className="mt-5 row justify-content-center">
         <div className="col-8 my-4">
          <h3>Hello, Dr. {username}</h3>
          <h3>({aadhar})</h3>
          </div>
          
          <div className="col-8 my-4">
          <button type="button" class="btn btn-light" onClick={()=>{nav.push("/")}}>LOGOUT</button>
     
          </div>


         </div>

        </div>
        <div className="col-8 text-center">
         
        <DoctViewPatient Doctassined={username}></DoctViewPatient>
          
        </div>
      </div>
      </div>
      
{/*end of container */}
    </div>

    </div>
  )
}

export default Doctor