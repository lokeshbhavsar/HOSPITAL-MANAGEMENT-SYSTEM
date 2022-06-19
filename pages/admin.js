import React, { useState } from 'react'
import Conditionform from './Conditionform'

const admin = () => {
const [flag,setflag]=useState(0)



  return (
    <div>
      <div className='container-fluid'>
      <div className="row justify-content-center">
        <div className="col-3 heig text-center bg-danger "  >
        
         <div className="mt-5 row justify-content-center">
          <div className="col-8">
          <button type="button" className="mb-5 btn btn-success btn-lg" onClick={()=>{setflag(1)}}>Create User</button>
          </div>
          <div className="col-8">
          <button type="button" className="btn btn-success btn-lg" onClick={()=>{setflag(2)}}>View User</button>
          </div>
         </div>

        </div>
        <div className="col-9 text-center">
         <Conditionform flag={flag}></Conditionform>
          
        </div>
      </div>
      </div>
      
{/*end of container */}
    </div>

  )
}

export default admin