import axios from 'axios'
import React, { useState } from 'react'

const PatientRegistration = () => {

    const [nam, setnam] = useState("")
    
    const [aadhar, setaadhar] = useState("")
    

    
  
    const uploaddata = async (apiobj) => {
      
      await axios.post(`http://localhost:8898/PATIENT`, apiobj)
      console.log(apiobj);
      setaadhar("")
      setnam("")
      
      
      alert("Patient "+apiobj.nam+" has been created")
      
  
    }
  
  
    const userlogin = (event) => {
      event.preventDefault()
      console.log(nam, aadhar)
  
       if(nam.length==0||aadhar.length==0)
       {
        alert("Please fill all fields")
        
       }
       else
       {
        const obj = { id: aadhar, nam: nam,admit:{isadmit:"NO",releasedate:"NOT NEEDED",room:"NOT ASSIGNED",nursename:"NOT ASSIGNED"},doctorname:"NOT ASSIGNED",observation:"NOT ASSIGNED",bill:0,visitdate:new Date().toLocaleDateString(),medicine:[] }
        uploaddata(obj)

       }
      
  
      
  
  
    }
  


  return (
    <div>

    <div className="container-fluid">

      <div className="row justify-content-center my-5">
        <div className='col-5'>


          {/*form start */}
          <form onSubmit={userlogin}>
            
            <div className="my-3">

              <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder='ENTER NAME.' value={nam} onChange={(event) => { setnam(event.target.value) }}></input>

            </div>

            <div className="my-3">

              <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ENTER AADHAR NO.' value={aadhar} onChange={(event) => { setaadhar(event.target.value) }}></input>

            </div>
            

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>{/*form end */}

        </div>
      </div>

    </div>

  </div>
  )
}

export default PatientRegistration