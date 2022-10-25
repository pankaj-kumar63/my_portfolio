import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className='service_head'>
            <h3> UI / UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className='service_head'>
            <h3> WEB DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
          </ul>
        </article>
        {/* End of WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service_head'>
            <h3> CONTENT CREATION</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services