
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Description from "./Description"
const DoctPatientDetails = (props) => {
  const [aadhar,setaadhar]=useState(props.aadhar)
  const [rel,setrel]=useState(0)
  const [obj,setobj]=useState({})
  const[admitobj,setadmit]=useState({})
  const[arobj,setarobj]=useState([])
  const[obs,setobs]=useState("")
  const[rdate,setrdate]=useState("")
//props.Doctassined,obs


  useEffect(()=>{
    
    fetch()
    
     },[rel])
  
   useEffect(()=>{
      admitfetch()
   })
  
   useEffect(()=>{
      setarobj(Object.entries(admitobj))
          console.log(arobj);
          setobs(obj.observation)
      console.log(obs);
      setrdate(admitobj.releasedate)
      console.log(rdate,"dsfad");
      
   },[admitobj])
  

   const changedate=(event)=>{
    setrdate(changeDateFormat(event.target.value));

       }

   function changeDateFormat(inputDate){  // expects Y-m-d
    var splitDate = inputDate.split('-');
    if(splitDate.count == 0){
        return null;
    }

    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2]; 

    return month + '/' + day + '/' + year;
}


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
      <td>{props.Doctassined}</td>
    </tr>  

 
   
   
  
    <tr>     
      <td >RELEASE DATE</td>
      <td>{rdate}</td>
    </tr>

   
  </tbody>
</table>

<Description observation={obs}></Description>


<div className='container-fluid'>
      <div className="row justify-content-center">
        <div className="col-10 my-4 text-center bg-danger "  >
          
          
        <form>
 
  
    
   
  <div class="form-group text-white my-4">
    <label htmlFor="exampleFormControlTextarea1">Update {obj.nam}'s' Observation</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(event)=>{ setobs(event.target.value)  }}></textarea>
  </div>
  <div class="form-group text-white my-4">
<label>UPDATE RELEASE DATE</label>
<br></br>
<input type='date' onChange={changedate}></input>
</div>
</form>














          </div></div>
          </div>







    </div>
  )
}

export default DoctPatientDetails