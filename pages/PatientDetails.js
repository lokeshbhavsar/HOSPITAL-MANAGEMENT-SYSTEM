import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PatientDetails = (props) => {
   const [aadhar,setaadhar]=useState(props.aadhar)
   const [rel,setrel]=useState(0)
   const [obj,setobj]=useState({})
   const[admitobj,setadmit]=useState({})
   const[tempstatus,settempstatus]=useState()
const[temprel,settemprel]=useState(0)
   useEffect(()=>{
    
  fetch()
  
   },[rel])

 useEffect(()=>{
    admitfetch()
 })



  const fetch=async()=>{
    await axios.get(`http://localhost:8898/patient/${aadhar}`).then(resp=>{setobj(resp.data)})
    setrel(1)  
  }

  const admitfetch=()=>{
    if(Object.keys(obj).length==0)
    {
        console.log("emptgy");
    }
    else{
        setadmit(obj.admit)
        console.log(admitobj);
    }
    settemprel(5)
  }


  return (
    <div>
        

<table className="table table-bordered table-dark">
 
  <tbody>
    <tr>
      <td>AADHAR NO.</td>
      <td>{obj.id}</td>
    </tr>
    
    <tr>
      <td>PATIENT'S NAME</td>
      <td>{obj.nam}</td>
    </tr>
  
    <tr>     
      <td >IS ADMIT</td>
      <td>{admitobj.isadmit}</td>
    </tr>

    <tr>     
      <td >Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


    </div>
  )
}

export default PatientDetails