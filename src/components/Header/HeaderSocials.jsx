import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
const HeaderSocial= () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target="_blank"><AiFillLinkedin/></a>
        <a href='https://linkedin.com' target="_blank"><FaGithub/></a>
        <a href='https://linkedin.com' target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocial;