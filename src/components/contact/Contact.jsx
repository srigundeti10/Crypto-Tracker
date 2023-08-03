import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsPhoneFill} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7sjxo5h', 'template_8caksyc', form.current, 'ncSTD5MAboPWtpnc3')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            
            <div>
              <MdEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>s.gundeti@iitg.ac.in</h5>
              <a href="mailto:s.gundeti@iitg.ac.in" target="_blank">Send A Message</a>
            </div>
          </article>
          <article className="contact__option">
            
            <div>
              <RiWhatsappFill className="contact__option-icon"/>
              <h4>Whatsapp</h4>
              <h5>(+91)9494625295</h5>
              <a href="https://api.whatsapp.com/send?phone=+919494625295" target="_blank">Send A Message</a>
            </div>
          </article>
          <article className="contact__option">
            
            <div>
              <BsPhoneFill className="contact__option-icon"/>
              <h4>Phone</h4>
              <h5>(+91)9494625295</h5>
              < a href="tel:+919494625295">Give A Call</a>
            </div>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" rows='7' placeholder="Your Message" required/>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact