
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Description from "./Description"
const DoctPatientDetails = (props) => {
  const [aadhar, setaadhar] = useState(props.aadhar)
  const [rel, setrel] = useState(0)
  const [obj, setobj] = useState({})
  const [admitobj, setadmit] = useState({})
  const [arobj, setarobj] = useState([])
  const [obs, setobs] = useState("")
  const [rdate, setrdate] = useState("")
  const [arrobj, setarr] = useState([])
  const [nam, setnam] = useState("MEDCINE NAME")
  const [qty, setqty] = useState("DAYS")
  const [timming, settimming] = useState("TIMMING")
  const [temparr, setemparr] = useState([])
  const [again, setagain] = useState(0)

  //props.Doctassined,obs

  const addmed = (event) => {


    event.preventDefault()
    if (nam == "MEDCINE NAME" || qty == "DAYS" || timming == "TIMMING") {
      alert('PLEASE FILL ALL DETAILS');

    }
    else {
      arrobj.push({ medname: nam, timming: timming, nodays: qty, price: "" })
      setrel(rel + 1)
    }
    console.log(arrobj);
    setnam("MEDCINE NAME")
    settimming("TIMMING")
    setqty("DAYS")
  }

  useEffect(() => {

    fetch()

  }, [rel])

  useEffect(() => {
    admitfetch()

  })

  useEffect(() => {
    if (obj.medicine != undefined)
      setemparr(obj.medicine)

    console.log(temparr, "setting the array");
    if (temparr.length != 0 && again == 0 && temparr != undefined) {
      setarr(arrobj.concat(temparr))
      console.log(arrobj, "setarra");
      setagain(1)
    }
  })




  useEffect(() => {
    setarobj(Object.entries(admitobj))

    setobs(obj.observation)

    setrdate(admitobj.releasedate)






  }, [admitobj])


  const changedate = (event) => {
    setrdate(changeDateFormat(event.target.value));

  }

  function changeDateFormat(inputDate) {  // expects Y-m-d
    var splitDate = inputDate.split('-');
    if (splitDate.count == 0) {
      return null;
    }

    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2];

    return month + '/' + day + '/' + year;
  }


  const fetch = async () => {
    await axios.get(`http://localhost:8898/patient/${aadhar}`).then(resp => { setobj(resp.data) })
    setrel(1)

  }

  const admitfetch = () => {
    if (Object.keys(obj).length == 0) {
      console.log("emptgy");
    }
    else {
      setadmit(obj.admit)


    }

  }

const finalobj=()=>{
  const finobj={id:obj.id,nam:obj.nam,admit:{releasedate:rdate},doctorname:props.Doctassined,observation:obs,bill:obj.bill,visitdate:obj.visitdate,medicine:arrobj}
  console.log(finobj);
  axios.put(`http://localhost:8898/patient/${aadhar}`,finobj)
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
      <div className="row justify-content-center my-5">
        <div className='col-8'>

          <table className="table table-bordered table-dark my-4">

            <tbody>
              <tr >
                <td>MEDICINE NAME</td>
                <td>TIMMING</td>
                <td>NO. OF DAYS</td>
              </tr>
              {
                arrobj.map((i, j) => {
                  return <tr key={j}>
                    <td>{i.medname}</td>
                    <td>{i.timming}</td>
                    <td>{i.nodays}</td>
                  </tr>
                })
              }

            </tbody>
          </table>
        </div>
      </div>

      <div className='container-fluid'>
        <div className="row justify-content-center">
          <div className="col-10 my-4 text-center  "  >
          <button type="button" class="btn btn-primary" onClick={finalobj}>SAVE DETAILS</button>
            </div>
            </div>
            </div>
     
      <div className='container-fluid'>
        <div className="row justify-content-center">
          <div className="col-10 my-4 text-center bg-danger "  >




            <form>

              <div class="form-group text-white my-4">
                <label htmlFor="exampleFormControlTextarea1" className='my-2'>Update {obj.nam}'s' Observation</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={obs} onChange={(event) => { setobs(event.target.value) }}></textarea>
              </div>
              <div class="form-group text-white my-4">
                <label>UPDATE RELEASE DATE</label>
                <br></br>
                <input type='date' onChange={changedate}></input>
              </div>
            </form>














          </div></div>
      </div>


      <div>

        <div className="container-fluid">
          <div className="row justify-content-center my-5 bg-danger">
            <div className='col-12'>
              <form onSubmit={addmed}>
                <div className="row justify-content-center my-5">

                  <div className='col-3'>
                    <div className="my-3">
                      <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder={nam} onChange={(event) => { setnam(event.target.value) }}></input>
                    </div>
                  </div>

                  <div className='col-3'>
                    <select className="form-select my-3" aria-label="Default select example" placeholder={timming} onChange={(event) => { settimming(event.target.value) }}>
                      <option value="SELECTED">SELECT TIMMING</option>
                      <option value="DAY">DAY</option>
                      <option value="NIGHT">NIGHT</option>
                      <option value="DAY/NIGHT">DAY/NIGHT</option>
                      <option value="DAY/NIGHT/AFTERNOON">DAY/NIGHT/AFTERNOON</option>

                    </select>
                  </div>

                  <div className='col-2'>
                    <div className="my-3">
                      <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={qty} onChange={(event) => { setqty(event.target.value) }}></input>
                    </div>
                  </div>



                  <div className='col-1'>

                    <button type="submit" className="btn btn-primary my-3">         <svg type='submit' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus  plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg></button>

                  </div>



                </div>

              </form>
            </div>



          </div>
        </div>





      </div>




    </div>
  )
}

export default DoctPatientDetails