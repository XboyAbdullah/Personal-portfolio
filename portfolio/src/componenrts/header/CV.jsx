import React from 'react'
import cv from '../../assets/CV/Abdullah Shahzad.pdf'



const CV = () => {
  return (
    <div className='CV'>
        <a href = {cv} download className='btn'>Download CV</a>
        <a href = "#Contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default CV