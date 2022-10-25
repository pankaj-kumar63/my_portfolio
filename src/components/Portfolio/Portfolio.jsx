import React from 'react'
import './Portfolio.css';
// import IMG1 from '../../assets/me.png';
import data from './github projects/Projects';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, img, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={img} alt={title} />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section >
  )
}

export default Portfolio