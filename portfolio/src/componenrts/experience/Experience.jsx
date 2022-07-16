import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id = "experience"> 
    <h5>What Skills I have?</h5>
    <h2>My Skills</h2>
    <div className='container experience_container'>
      <div className="experience_frontend">
        <h3>FrontEnd Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>HTML</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>CSS</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Bootstrap</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Tailwind CSS</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>React</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
        </div>
      </div>

      <div className="experience_backend">
      <h3>BackEnd Development</h3>
      <div className="experience_content">
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Nodejs</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>MongoDB</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>MySql</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Firebase</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Strapi</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
        </div>
      </div>

      <div className="experience_frontend">
        <h3>Languages</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>C</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>C++</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Java</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Python</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>React Native</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
        </div>
      </div>

      <div className="experience_frontend">
        <h3>Softwares</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>MS Word</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>MS Excel</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>MS Powerpoint</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>MS Visio</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Visual Studio Code</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Github</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience