import React from 'react'
import Fade from 'react-reveal/Fade';
import './Treatment.css'

import ContactForm from '../contact/ContactForm';
import TreatmentSection from './TreatmentSection';



const Treatment = () => {
    return (
        <>


{/* -------------------------------- HERO -------------------------------------- */}

        <div className='treatment main-menu'>

            <div className="treatment-content">
                <Fade right>
                    <h1>TREATMENT PROGRAMS</h1>
                </Fade>
            </div>
        </div>

        <TreatmentSection />
        <ContactForm />
        </>
    )
}

export default Treatment
