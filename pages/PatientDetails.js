import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Description from "./Description"
const PatientDetails = (props) => {
   const [aadhar,setaadhar]=useState(props.aadhar)
   const [rel,setrel]=useState(0)
   const [obj,setobj]=useState({})
   const[admitobj,setadmit]=useState({})
   const[arobj,setarobj]=useState([])



   useEffect(()=>{
    
  fetch()
  
   },[rel])

 useEffect(()=>{
    admitfetch()
 })

 useEffect(()=>{
    setarobj(Object.entries(admitobj))
        console.log(arobj);
 },[admitobj])


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
    
  }


  return (
    <div>
        

<table className="table table-bordered table-dark my-4">
 
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
      <td >VISIT DATE</td>
      <td>{obj.visitdate}</td>
    </tr>

    <tr>     
      <td >DOCTOR ASSSIGNED</td>
      <td>{obj.doctorname}</td>
    </tr>  

 
   
    <tr>     
      <td >NURSE ASSSIGNED</td>
      <td>{admitobj.nursename}</td>
    </tr>
    <tr>     
      <td >IS ADMIT</td>
      <td>{admitobj.isadmit}</td>
    </tr>
    <tr>     
      <td >RELEASE DATE</td>
      <td>{admitobj.releasedate}</td>
    </tr>

    <tr>     
      <td >ROOM ASSSIGNED</td>
      <td>{admitobj.room}</td>
    </tr>
  </tbody>
</table>

<Description observation={obs}></Description>
    </div>
  )
}

export default PatientDetails