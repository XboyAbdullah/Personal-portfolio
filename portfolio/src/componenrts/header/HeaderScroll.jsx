import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderScroll = () => {
  return (
    <div className='header_social'>
        <a href = "https://www.linkedin.com/" target = "_blank"><BsLinkedin/></a>
        <a href = "https://www.Github.com/" target = "_blank"><BsGithub/></a>
        <a href = "https://www.Instagram.com/" target = "_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderScroll