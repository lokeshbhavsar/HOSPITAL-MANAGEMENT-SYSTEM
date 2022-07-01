import React from 'react'

const Description = (props) => {
  return (
    <div>
  

  <div className="container-fluid">
            <div className="row justify-content-center my-5">                
                <div className='col-12 '>
                <div class="card">
  <div class="card-header">
    PATIENT'S OBSERVATION
  </div>
  <div class="card-body bg-primary colorwhite">
    
    <p class="card-text">{props.observation}</p>
    
  </div>
</div>
</div>
</div>
</div>

  

    </div>
  )
}

export default Description