import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="experience_container">
        <div className="experince_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experiencez-details'>
              <BsPatchCheckFill className = 'experiencez_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencez-details'>
              <BsPatchCheckFill className = 'experiencez_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencez-details'>
              <BsPatchCheckFill className = 'experiencez_details-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencez-details'>
              <BsPatchCheckFill className = 'experiencez_details-icon' />
              <div>
                <h4>TAILWIND</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>
        <div className="exprience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experiencez-details'>
              <BsPatchCheckFill className = 'experiencez_details-icon' />
              <div>
                <h4>NODEJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencez-details'>
              <BsPatchCheckFill className = 'experiencez_details-icon' />
              <div>
                <h4>MONGODB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencez-details'>
              <BsPatchCheckFill className = 'experiencez_details-icon' />
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencez-details'>
              <BsPatchCheckFill className = 'experiencez_details-icon' />
              <div>
                <h4>PYTHON</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience