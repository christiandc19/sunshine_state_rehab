import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'
// import Wave from '../../assets/waves.svg'


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
{/* <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div> */}
            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            <Fade right>
                  <p>Our Addiction and Recovery Support team is available to assist you. </p>
            </Fade>

            <Fade top>
                    <h2>+1 (123) 456-789</h2>
            </Fade>

            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact