import React from 'react'
import "./Services.css";
import {BsCheck} from 'react-icons/bs';


const Services = () => {
  return (
    <section id = "services"> 
    <h5>Here are</h5>
    <h2>My Projects</h2>
    <div className='container service_container'>
      <article className='service'>
        <div className="service_head">
          <h3>Graphic Designing</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>UI/UX design of my FYP using Figma</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Poster to aware people about managing e-waste Using Illustrator</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Designed a logo for a company called LahoreSign</p>
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
            <p>E-commerce store Using MERN stack as my semester project</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Sliding puzzle game in javascript, html and css using localstorage</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Calendar Application to schedule daily tasks in MERN stack with complete user auth.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Recipes application in Mern stack using Redux Saga with complete user auth.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>InternsIn Portal for jobs and internships Using ReactJs and Firebase</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Inventory Management System using React JS, Redux Saga, Nest JS, Type ORM, PostgreSql</p>
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
            <p>Student management System in Java, Swing and SqLite</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Intruder detection System Using Python and OpenCV</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>ChatX, a messaging mobile app using React Native and Firebase</p>
          </li>
        </ul>
      </article>

    </div>
    </section>
  )
}

export default Services