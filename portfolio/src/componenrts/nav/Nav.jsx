import React from 'react'
import "./Nav.css";
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineCustomerService, AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react';

const Nav = () => {
  const [Active, setActive]= useState('#');
  return (
    <nav>
      <a onClick={()=> setActive('#')} className = {Active === '#' ? 'active' : ''} href='#'><AiOutlineHome/></a>
      <a onClick={()=> setActive('#about')} className = {Active === '#about' ? 'active' : ''} href='#about'><AiOutlineUser/></a>
      <a onClick={()=> setActive('#experience')} className = {Active === '#experience' ? 'active' : ''} href='#experience'><AiOutlineBook/></a>
      <a onClick={()=> setActive('#services')} className = {Active === '#services' ? 'active' : ''} href='#services'><AiOutlineCustomerService/></a>
      <a onClick={()=> setActive('#contact')} className = {Active === '#contact' ? 'active' : ''} href='#contact'><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav