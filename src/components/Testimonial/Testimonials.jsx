import React from 'react';
import './Testimonials.css';
// import IMG from '../../assets/me.png';
import data from '../Testimonial/Data';
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials_container">
        {
          data.map(({ idx, avatar, name, review }) => {
            return (
              <article key={idx} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="avatar image" />
                </div>
                <h5>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials