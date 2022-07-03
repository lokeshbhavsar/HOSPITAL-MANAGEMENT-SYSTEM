import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NursePatientMedicine = (props) => {
  const [obj, setobj] = useState({})
  const [aadhar, setaadhar] = useState(props.aadhar)
  const [rel, setrel] = useState(0)
  const [arrobj, setarrobj] = useState([])
  const[lengthlimit,setlength]=useState(0)
  const[counter,setcounter]=useState(0)
  const[tempmedprice,settempmedprice]=useState(0)
  const[ medarray,setmedarray]=useState([])
  const[relcom,setrelcom]=useState(0)
  const[placeh,setplace]=useState("Enter Amount")


  useEffect(() => {
    fetch()

  }, [rel])


  useEffect(() => {

    if(obj.medicine!=undefined){

      setarrobj(obj.medicine)
      setlength(arrobj.length)
      console.log(lengthlimit);

    }

  }, [obj])



  const fetch = async () => {
    setaadhar(props.aadhar)
    const fetch = await axios.get(`http://localhost:8898/PATIENT/${aadhar}`)
    const maindata = fetch.data

    setobj(maindata)
    console.log(obj);
    setrel(1)


  }

console.log(arrobj);

const medpricesubmit=(event)=>{
  event.preventDefault()
  medarray[counter]=tempmedprice
  arrobj[counter].price=tempmedprice
  setrelcom(relcom+1)
  

}

function cos(){
  if(arrobj.length>0)
  {
    return <div>
<p>*Please note, Enter the amount while considering one unit</p>
<p>How much does it cost for the medicine: {arrobj[counter].medname.toUpperCase()} ?</p>

    </div>
  }
}

function increment(){
  if(counter+1<arrobj.length)
  {
    setcounter(counter+1)
  }
  else
  {
    alert("No More Medicines")
  }
}


function previous(){
  if(counter-1>=0)
  {
    setcounter(counter-1)
  }
  else
  {
    alert("No more medicines")
  }
}


const saving=()=>{
  const newobj={
  id: obj.id,
  nam: obj.nam,
  admit: obj.admit,
  doctorname: obj.doctorname,
  observation: obj.observation,
  bill: obj.bill,
  visitdate:obj.visitdate,
  medicine: arrobj,
}
console.log(newobj);
axios.put(`http://localhost:8898/PATIENT/${aadhar}`,newobj)
}

  return (
    <div>

      <div className="container-fluid">
        <div className="row justify-content-center my-5">
          <div className='col-8'>
        
          <table className="table table-bordered table-dark my-4">

<tbody>
  <tr >
    <td>MEDICINE NAME</td>
    <td>PRICES</td>
    
  </tr>
  {
    arrobj.map((i, j) => {
      return <tr key={j}>
        <td>{i.medname}</td>
        <td>{i.price}</td>
        
      </tr>
    })
  }

</tbody>
</table>
          </div>



          <div className="row justify-content-center my-4">
          <div className='col-9'>
          {cos()}
          </div>
        
          <div className='col-4 my-2'>
          <form onSubmit={medpricesubmit}>
          <input type="number" className=" form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{settempmedprice(event.target.value)}} placeholder={placeh} ></input>
          <button type="submit" className="btn btn-primary my-3">         <svg type='submit' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus  plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg></button>
          </form>
          </div>


          <div className='col-9'>
          <button className='buttonwidth mx-4 bg-primary'  onClick={previous}>Previous</button>
          <button className='mx-4 buttonwidth bg-primary' onClick={increment}>Next</button>  
          </div>
         
          <div className='col-9 my-4'>
          <button className='buttonwidth mx-4 bg-primary'  onClick={saving}>SAVE</button>
          </div>
          
          </div>

          
          
        </div>
      </div>




    </div>
  )
}

export default NursePatientMedicine