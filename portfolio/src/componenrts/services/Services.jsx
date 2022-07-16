import React from 'react'
import "./Services.css";
import {BsCheck} from 'react-icons/bs'


const Services = () => {
  return (
    <section id = "services"> 
    <h5>What I offer</h5>
    <h2>My Projects</h2>
    <div className='container service_container'>
      <article className='service'>
        <div className="service_head">
          <h3>Graphic Designing</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
        </ul>
      </article>

      <article className='service'>
        <div className="service_head">
          <h3>Web Development</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>UI/UX design of my FYP</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Poster Using Illustrator</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Designed a logo</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
        </ul>
      </article>

      <article className='service'>
        <div className="service_head">
          <h3>Other</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </li>
        </ul>
      </article>

    </div>
    </section>
  )
}

export default Services