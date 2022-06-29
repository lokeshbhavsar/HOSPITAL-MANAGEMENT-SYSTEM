import React from 'react'
import ViewPatient from "./ViewPatient"

import {useRouter} from 'next/router';
import Userregistration from './Admin/Userregistration';
import Viewuser from './Viewuser';
import PatientRegistration from "./PatientRegistration"
const PatientCondition = (props) => {
    const navigation=useRouter()
    if(props.flag==1)
    return <PatientRegistration></PatientRegistration>
      
      if(props.flag==2)
       return  <ViewPatient></ViewPatient>
    
    
        return (
        <div>
        <h2 className='my-4'>Please Select Your Choice</h2>
        </div>
        )
}

export default PatientCondition