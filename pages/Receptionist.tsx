import { useRouter } from 'next/router'
import React, { useEffect,useState } from 'react'
import Head from 'next/head';
import Conditionform from "./Conditionform"
import PatientCondition from "./PatientCondition"
const Receptionist = () => {
    const nav=useRouter()
    const [username,setusername]=useState<any>()
    const [aadhar,setaadhar]=useState<any>()
    useEffect(()=>{
        
        setusername(nav.query.name)
        setaadhar(nav.query.aadhar)
    })
        
    const [flag,setflag]=useState<any>(0) 
  return (
    <div>
<Head>
  <title>Reception Tab</title>
</Head>

<div>
      <div className='container-fluid'>
      <div className="row justify-content-center">
        <div className="col-4 heig text-center bg-danger "  >
        
         <div className="mt-5 row justify-content-center">
         <div className="col-8 my-4">
          <h3>Hello, {username}</h3>
          <h3>({aadhar})</h3>
          </div>
          <div className="col-8 ">
          <button type="button" className="mb-5 btn btn-success btn-lg" onClick={()=>{setflag(1)}}>Create Patient</button>
          </div>
          <div className="col-8">
          <button type="button" className="btn btn-success btn-lg" onClick={()=>{setflag(2)}}>Generate Bill</button>
          </div>
         </div>

        </div>
        <div className="col-8 text-center">
         
         <PatientCondition flag={flag}></PatientCondition>
          
        </div>
      </div>
      </div>
      
{/*end of container */}
    </div>



    </div>
  )
}

export default Receptionist