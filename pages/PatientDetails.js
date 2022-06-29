import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PatientDetails = (props) => {
   const [aadhar,setaadhar]=useState(props.aadhar)
   const [obj,setobj]=useState()
  useEffect(()=>{
    setaadhar(props.aadhar)
    const fetch=axios.get(`http://localhost:8898/PATIENT/${aadhar}`)
    setobj(fetch.data)
    console.log(obj);
  },[])

  return (
    <div>
        
{aadhar}



    </div>
  )
}

export default PatientDetails