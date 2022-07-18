import React from "react";
import "./About.css";
import { FaAward, FaFolderOpen } from "react-icons/fa";
import {GiGraduateCap} from "react-icons/gi"
import img from "../../assets/images/me3.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={img} alt="Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 month<br/>Nexusberry</small>
            </article>
            <article className="about_card">
              <GiGraduateCap className="about_icon" />
              <h5>Degree</h5>
              <small>BS CS <br/>Comsats University Lahore</small>
            </article>
            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>6 projects</small>
            </article>
           
          </div>
            <p>
              My Name is Muhammad Abdullah Shahzad. i'm a BSCS graduate from Comsats University Lahore Campus. 
              I specialize in Web development and am always eager to learn new techniques and technologies. 
              I'm also passionate about graphic designing, I love to think of new ideas and designs to implement. 
              I also design posters and logos. I have worked on a number of projects during my University
              time that include web projects, java, python and graphic designing projects. 
              After my graduation now I want to work with a professional organization to enhance my skills 
              to a professional level and gain as much experience as I can. I'm a hardworker with problem
              solving and good communication skills. To reach out to me click on the button below.
            </p>
            <a href="#contact" className="btn btn-primary">
              Lets Talk
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
