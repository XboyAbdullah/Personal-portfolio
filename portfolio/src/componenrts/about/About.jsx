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
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance.The first line of Lorem Ipsum, "Lorem ipsum
              dolor sit amet..", comes from a line in section 1.10.32.
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
