import React from 'react'
import './ServicesMH.css'
import Zoom from 'react-reveal/Zoom';
import ServicesMH1 from "../../assets/servicesMH.png";
import { BsCheckLg } from "react-icons/bs";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';

const ServicesMH = () => {
  return (
    <>
      <div className='servicesMH'>
        <div className='servicesMH-content container'>

          <Zoom duration={2000}>
            <div className='servicesMH-left'>
                <img src={ServicesMH1} loading="lazy" alt="psychologist" />
            </div>
          </Zoom>

          <Zoom duration={3000}>
            <div className='servicesMH-right'>
                <h1>SERVICES</h1>
                <h2>Mental Health Treatment</h2>
                <p>Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.</p>

                <div className="servicesMH-icon">
                     <p> <span><BsCheckLg /></span> Anxiety</p>
                     <p> <span><BsCheckLg /></span> Sadness / Depression</p>
                     <p> <span><BsCheckLg /></span> Anger Management</p>
                     <p> <span><BsCheckLg /></span> Panic Disorder</p>
                </div>

                <div className='servicesMH-btn'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/mental-health">
                        <button> VIEW ALL</button>
                    </Link>
                </LinkRoll>
                </div>
            </div>
        </Zoom>



        </div>

      </div>
    </>
  )
}

export default ServicesMH
