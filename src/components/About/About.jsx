import React from 'react';
import './About.css'
import ME from '../../assets/me.png';
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Clients</h5>
              <small>200+ World Wide</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse nostrum tempore repellendus minus qui vitae ratione ea omnis consectetur, iure asperiores at impedit maxime tempora dolores tenetur eum obcaecati iste quae suscipit soluta.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About