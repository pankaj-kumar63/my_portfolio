import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Git In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_conainer">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>dummygator@gmail.com</h5>
            <a href="mailto:dummygator@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine/>
            <h4>Messager</h4>
            <h5>Pankaj Kumar</h5>
            <a href="https://m.me/pankaj.kumar"target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+916306599280</h5>
            <a href="https://api.whatsapp.com/send?phone=+916306599280"target="_blank">Send a Message</a>
          </article>
          {/* End of contact options */}
          <form action=""></form>
        </div>
      </div>
    </section>
  )
}

export default Contact