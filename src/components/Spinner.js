import React from 'react'
import circle from './circle.gif'

 const Spinner = () => {
    return (
      <div className='text-center'>
        <img style={{height: '40px',width: '40px'}} className ='my-3' src={circle} alt="loading" />
       </div>
    )
}

export default Spinner
