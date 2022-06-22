import React, { useEffect, useState } from 'react'
import Userdetails from './Userdetails'
import Userregistration from './Admin/Userregistration';

const Viewuser = () => {
    const [aadhar, setaadhar] =useState(0)
    const [ aadharstatus,setstatus]    =useState(0)
    const [usertype, setusertype] = useState("")
    const [nv,snv]=useState(0)
    const userlogin=(event)=>{
       setaadhar(event.target.value)
       
       if(aadhar==0 || usertype.length==0)
       {
        alert("Please fill all the details")
       }
       else{
        snv(aadhar)
        setstatus(1)
       }
    }

    if(aadharstatus==0)
    {
        return   <div>

        <div className="container-fluid">
            <div className="row justify-content-center my-5">

            
                <div className='col-4'>

                <select className="form-select" aria-label="Default select example" onChange={(event) => { setusertype(event.target.value) }}>
                <option value="SELECTED">Select User Type</option>

                <option value="DOCTOR">DOCTOR</option>
                <option value="RECEPTIONIST">RECEPTIONIST</option>
                <option value="NURSE">NURSE</option>

                </select>

                      <div className="my-3" >
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ENTER USERS AADHAR NO.' onChange={(event) => { setaadhar(event.target.value) }}></input>
                        </div>
                        <button  className="btn btn-primary " onClick={userlogin}>VIEW USER</button>
                </div>
            </div>
        </div>
    </div>
    }
    if(aadharstatus==1){
        
        return <Userdetails aadhar={nv} usertype={usertype}></Userdetails>
    }
    

   
}

export default Viewuser