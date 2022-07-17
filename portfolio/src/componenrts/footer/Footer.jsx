import React from 'react'
import './Footer.css';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import img from '../../assets/images/logo2.6.png'


const Footer = () => {
  return (
    <footer id = "footer">
      <div className="logo">
            <img src={img} alt="Me" />
          </div>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='http://facebook.com' target= "_blank"><BsFacebook/></a>
        <a href='http://Instagram.com' target= "_blank"><BsInstagram/></a>
        <a href='https://twitter.com/XboyAbdullah' target= "_blank"><BsTwitter/></a>
        <a href='https://github.com/XboyAbdullah' target= "_blank"><BsLinkedin/></a>
        <a href='https://www.linkedin.com/in/abdullah-shahzad-0b9796213/' target= "_blank"><BsGithub/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Abdullah Shahzad. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer