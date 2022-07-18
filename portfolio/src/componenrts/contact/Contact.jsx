import React from 'react'
import "./Contact.css";
import {HiOutlineMail} from 'react-icons/hi'
import {SiMessenger, SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zmxav2u', 'template_1zjosnr', form.current, 'm0157TKwJYIDelq9S')
    e.target.reset()
  };
  return (
    <section id = "contact"> 
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact_container'>
      <div className="contact_options">
        <article className='contact_option'>
          <HiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>xboyabdullah@gmail.com</h5>
          <a href='mailto: xboyabdullah@gmail.com' target = "_blank">Send a message</a>
        </article>
        <article className='contact_option'>
          <SiMessenger className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>Abdullah Shahzad</h5>
          <a href="https://m.me/100010236002250" target = "_blank">Send a message</a>
        </article>
        <article className='contact_option'>
          <SiWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>My Number</h5>
          <a href="https://api.whatsapp.com/send?phone=+923176774291" target = "_blank">Send a message</a>
        </article>
      </div>
      <form ref = {form} onSubmit={sendEmail}>
        <input type= "text" name = "name" placeholder = "Your full name" required/>
        <input type = "email" name = "email" placeholder = "Your Email" required/>
        <textarea name = "message" rows= "7" placeholder = "Your Message" required/>
        <button type = "submit" className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact