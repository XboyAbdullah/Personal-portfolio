import React from 'react'
import "./Nav.css";
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineCustomerService, AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><AiOutlineBook/></a>
      <a href='#services'><AiOutlineCustomerService/></a>
      <a href='#message'><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav