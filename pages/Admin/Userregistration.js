import axios from 'axios'
import React, { useState } from 'react'

const Userregistration = () => {

  const [nam, setnam] = useState("")
  const [usertype, setusertype] = useState("")
  const [aadhar, setaadhar] = useState("")
  const [password, setpassword] = useState("")

  const uploaddata = async (apiobj) => {
    const usertypeapi = apiobj.usertype
    await axios.post(`http://localhost:8898/${usertypeapi}`, apiobj)
    alert("User "+apiobj.nam+" has been created")
  }


  const userlogin = (event) => {
    event.preventDefault()
    console.log(nam, usertype, aadhar, password)

     if(nam.length==0||aadhar.length==0||usertype.length==0||password.length==0)
     {
      alert("Please fill all fields")
      return
     }
    const obj = { id: aadhar, nam: nam, usertype: usertype, password: password, isactive: true }

    switch (usertype) {

      case "DOCTOR": 
        uploaddata(obj)
        break
      case "RECEPTIONIST": 
       uploaddata(obj)
        break
      case "NURSE": 
        uploaddata(obj)
        break
    }



  }

  return (
    <div>

      <div className="container-fluid">

        <div className="row justify-content-center my-5">
          <div className='col-5'>


            {/*form start */}
            <form onSubmit={userlogin}>
              <select className="form-select" aria-label="Default select example" onChange={(event) => { setusertype(event.target.value) }}>
                <option value="SELECTED">Select User Type</option>

                <option value="DOCTOR">DOCTOR</option>
                <option value="RECEPTIONIST">RECEPTIONIST</option>
                <option value="NURSE">NURSE</option>

              </select>
              <div className="my-3">

                <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder='ENTER NAME.' onChange={(event) => { setnam(event.target.value) }}></input>

              </div>

              <div className="my-3">

                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ENTER AADHAR NO.' onChange={(event) => { setaadhar(event.target.value) }}></input>

              </div>
              <div className="my-3">

                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='CREATE PASSWORD' onChange={(event) => { setpassword(event.target.value) }}></input>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>{/*form end */}

          </div>
        </div>

      </div>

    </div>
  )
}

export default Userregistration