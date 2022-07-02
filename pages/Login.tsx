import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import {useRouter} from 'next/router';
import axios from 'axios';

import Receptionist from "./Receptionist"
const Login = () => {
 
const nav=useRouter()

const [usertype,setusertype]=useState("")
const [aadhar,setaadhar]=useState("")
const [password,setpassword]=useState("")
const[obj,setobj]=useState<any>({})


useEffect(()=>{
  fetch()
},[usertype,aadhar,password])

const fetch=async()=>{
 await axios.get(`http://localhost:8898/${usertype}/${aadhar}`).then(resp => {
  setobj(resp.data)
  console.log(obj);
  
})

}


const userlogin=(event:any)=>{
  event.preventDefault()
   if(usertype.length==0 || aadhar.length==0 || password.length==0)
   {
    alert("Please Fill All The Fields")
    return
   }
   else{
    
      switch(usertype){
        case "ADMIN":
          if(String(aadhar)=="1" && String(password)=="123") {
            nav.push("/admin")
          }
          else{
            alert("WRONG CREDENTIALS")
            
          }
        break
        case "DOCTOR":
        
          if(obj.password!=password)
          alert('INVALID USER');
          
          if(obj.password==password)
          {
            if(obj.isactive=="Deactive")
            alert("The "+usertype+" is currently Disabled by management")
            else
            nav.push(
              { pathname: "/Doctor", query: { name: obj.nam,aadhar:aadhar } },
              "/Doctor"
            );
          }

        break
        case "RECEPTIONIST":
          
          if(obj.password!=password)
          alert('INVALID USER');
          
          if(obj.password==password)
          {
            if(obj.isactive=="Deactive")
            alert("The "+usertype+" is currently Disabled by management")
            else
            nav.push(
              { pathname: "/Receptionist", query: { name: obj.nam,aadhar:aadhar } },
              "/Receptionist"
            );
          }
          

          
          
        break

        case "NURSE":
          if(obj.password!=password)
          alert('INVALID USER');
          
          if(obj.password==password)
          {
            if(obj.isactive=="Deactive")
            alert("The "+usertype+" is currently Disabled by management")
            else
            nav.push(
              { pathname: "/Nurse", query: { name: obj.nam,aadhar:aadhar } },
              "/Nurse"
            );
          }

        break
      }
   
   }

 
}

  return (
    <div>
        <Head>
            <title>Login</title>
       
        
        </Head>

{/*container */}   
<div className='container-fluid '>


{/*Title of page */}

<div className="row pt-2 justify-content-center">
  <div className="col-12 text-black text-center ">
 <h3>HOSPITAL MANAGEMENT SYSTEM</h3>
  </div>
</div>

{/*register and wallpaper*/}
  <div className="row  pb-5 justify-content-center">
    
  <div className="col-3 pt-5 bg-danger text-center text-white ">
    <h4>LOG!N...</h4>
    {/*select user*/}


    
    <div className="row mt-5 justify-content-center">
      <div className="col-8">
     
     <form onSubmit={userlogin}>
     <select className="form-select" aria-label="Default select example" onChange={(event)=>{setusertype(event.target.value)}}>
        <option  value="SELECTED">Select User Type</option>
        <option value="ADMIN">ADMIN</option>
        <option value="DOCTOR">DOCTOR</option>
        <option value="RECEPTIONIST">RECEPTIONIST</option>
        <option value="NURSE">NURSE</option>
   
     </select>


  <div className="my-3">
    
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ENTER AADHAR NO.' onChange={(event)=>{setaadhar(event.target.value)}}></input>
    
  </div>
  <div className="my-3">
  
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='ENTER PASSWORD' onChange={(event)=>{setpassword(event.target.value)}}></input>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>



      </div>
    </div>

  </div>
  
  <div className="col-7 bg-warning align-self-center ">
   <img src="/Wallpaper.webp" className="img-fluid" alt="Responsive image"></img>
  </div>
 
  </div>
  
{/*copyrights */}

<div className="row">
  <div className="col text-center">
    <h5>©2020 Emexso. All Rights Reserved By ThemeMeta</h5>
  </div>
</div>



</div>{/*main container end */}

   </div>
  )
}

export default Login