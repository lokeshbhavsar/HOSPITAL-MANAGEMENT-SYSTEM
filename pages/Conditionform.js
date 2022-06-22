import React from 'react'

import {useRouter} from 'next/router';
import Userregistration from './Admin/Userregistration';
import Viewuser from './Viewuser';
const Conditionform = (props) => {
    const navigation=useRouter()
if(props.flag==1)

  return  <Userregistration></Userregistration>
  if(props.flag==2)
   return  <Viewuser></Viewuser>


    return (
    <div>
    
    </div>
   
  )
}

export default Conditionform