import React from 'react'

import {useRouter} from 'next/router';
const Conditionform = (props) => {
    const nav=useRouter()
if(props.flag==1)

    console.log("1")
else
console.log("2")


    return (
    <div>
    {props.flag}
    </div>
   
  )
}

export default Conditionform