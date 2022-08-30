import React from 'react'
import './Header.css';
import CV from './CV';
import HeaderScroll from './HeaderScroll'



const Header = () => {
  return (
    <header>
      
      
      <div className="container header_continer">
        <div className='heading_handler'>
      <h5>Hello I am</h5>
      <h1>Abdullah Shahzad</h1>
        <h5 className='text-light'>Software Developer</h5>
        </div>
        <CV/>
        <HeaderScroll/>
        {/* <div className="me">
          <img src={img} alt='Me'/>
        </div> */}
        <a href= "#contact" className='scroll_down'>Scroll Down</a>
      </div>
    
    </header>
  )
}

export default Header