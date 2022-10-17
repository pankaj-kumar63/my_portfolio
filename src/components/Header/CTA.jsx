import React from 'react';
import CV from '../../assets/Pankaj_kumar_RESUME.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={CV}>Download CV</a>
        <a href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA