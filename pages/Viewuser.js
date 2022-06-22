import React, { useEffect, useState } from 'react'
import Userdetails from './Userdetails'
import Userregistration from './Admin/Userregistration';

const Viewuser = () => {
    const [aadhar, setaadhar] =useState(0)
    const [ aadharstatus,setstatus]    =useState(0)
    const [nv,snv]=useState(0)
    const userlogin=(event)=>{
       setaadhar(event.target.value)
       
       if(aadhar==0)
       {
        alert("Please fill the aadhar details")
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
                <div className='col-5'>
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
        
        return <Userdetails aadhar={nv}></Userdetails>
    }
    

   
}

export default Viewuser