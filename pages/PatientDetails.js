import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Description from "./Description"
const PatientDetails = (props) => {
   const [aadhar,setaadhar]=useState(props.aadhar)
   const [rel,setrel]=useState(0)
   const [obj,setobj]=useState({})
   const[admitobj,setadmit]=useState({})
   const[arobj,setarobj]=useState([])
   const[medarray,setmedarray]=useState([])
   const[tot,settot]=useState(0)
   const[daydiff,setdaydiff]=useState(0)

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




  function timeconveter(acttime) {
    switch(acttime)
    {
      case   "DAY":return 1
      case "NIGHT":return 1
      case "DAY/NIGHT":return 2
      case  "DAY/NIGHT/AFTERNOON":return 3
    }
    
  }

  const admitfetch=()=>{
    if(Object.keys(obj).length==0)
    {
        console.log("emptgy");
    }
    else{
        setadmit(obj.admit)
        setmedarray(obj.medicine)
        console.log(medarray);
        settot( medarray.reduce((partialSum, a) => partialSum + (timeconveter(a.timming)* parseInt( a.price)*parseInt(a.nodays)), 0))
        console.log(tot);

     if(admitobj.releasedate!="NOT NEEDED")
     {

       let date_1 = new Date(admitobj.releasedate);
let date_2 = new Date(obj.visitdate);
let difference = date_1.getTime() - date_2.getTime();
let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
setdaydiff(TotalDays)
     }
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
      <td >RELEASE DATE</td>
      <td>{admitobj.releasedate}</td>
    </tr>

  
  </tbody>
</table>

<Description observation={obj.observation}></Description>


<div className="row justify-content-center">
        <div className="col-12 text-center bg-danger "  >
          <h3 className='my-2'>BILL DETAILS</h3>
        <table className="table table-bordered table-dark my-4">

<tbody>
  <tr >
    <td>MEDICINE NAME</td>
    <td>TIMMING</td>
    <td>NO OF DAYS</td>
    <td>PRICES</td>
    <td>CALCULATION</td>
  </tr>
  {
    medarray.map((i, j) => {
      return <tr key={j}>
        <td>{i.medname}</td>
        <td>{i.timming}</td>
        <td>{i.nodays}</td>
        <td>{i.price}</td>
        <td>{timeconveter(i.timming)} * {i.nodays} * {i.price} ={timeconveter(i.timming)*i.nodays*i.price}</td>
      </tr>
    })
  }

<tr >
    <td colSpan="4"></td>
    
    <td>TOTAL = {tot}</td>
  </tr>

</tbody>
</table>
          
<h5 className='bg-dark colorwhite'>You have consulted with DR, {obj.doctorname}, Consultant fee is  420 &#8377; </h5>
<h6 className='bg-dark colorwhite my-4'>1 day admit charges is 500 &#8377;,admit charges for {daydiff} days will be {daydiff} * {500} = {500*daydiff} </h6>
<h5 className='bg-dark colorwhite'>Total : {((tot)+(420+500*daydiff))}</h5>
</div>

<div className='row justify-content-center my-4'>
  <div className='col-6'>
  <button type="button" class="btn btn-primary" onClick={()=>{print()}}>PRINT</button>
  </div>
</div>

</div>


    </div>
  )
}

export default PatientDetails

