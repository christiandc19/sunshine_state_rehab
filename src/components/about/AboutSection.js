import React from 'react'
import './AboutSection.css'
import ContactForm from '../contact/ContactForm'
import { BsCheckLg } from "react-icons/bs";

import Mission from '../../assets/mission-img1.png'



const AboutSection = () => {
    return (
        <>


            <div className='mission-section container'>
                <div className='mission-section-content '>
                    <div className='mission-section-header'>
                        <h1>ABOUT US</h1>
                        <p>Welcome to Sunshine State Rehab, where healing and hope converge on the path to recovery. At the heart of our mission is a commitment to guiding individuals towards freedom from substance abuse and mental health challenges, fostering a supportive environment for transformation and growth.</p>
                    </div>

                    <div className='our-mission-flex'>
                        <div className='our-mission'>
                            <h1>OUR MISSION</h1>
                            <p>Sunshine State Rehab is dedicated to empowering individuals to break free from the chains of substance abuse and mental health disorders, promoting holistic healing and sustainable recovery. Our mission is to provide compassionate, evidence-based care that addresses the unique needs of each person on their journey to wellness.</p><br/>

                            <div className="mission-checklist">
                                <div className="homeSection2-icon">
                                    <BsCheckLg />
                                </div>
                                <div>
                                    <p>Comprehensive Care.</p>
                                </div>
                            </div>

                            <div className="mission-checklist">
                                <div className="homeSection2-icon">
                                    <BsCheckLg />
                                </div>
                                <div>
                                    <p>Holistic Healing.</p>
                                </div>
                            </div>

                            <div className="mission-checklist">
                                <div className="homeSection2-icon">
                                    <BsCheckLg />
                                </div>
                                <div>
                                    <p>Expert Team.</p>
                                </div>
                            </div>

                            <div className="mission-checklist">
                                <div className="homeSection2-icon">
                                    <BsCheckLg />
                                </div>
                                <div>
                                    <p>Safe Haven for Recovery.</p>
                                </div>
                            </div>

                            <div className="mission-checklist">
                                <div className="homeSection2-icon">
                                    <BsCheckLg />
                                </div>
                                <div>
                                    <p>Community and Connection.</p>
                                </div>
                            </div>

                            <div className="mission-checklist">
                                <div className="homeSection2-icon">
                                    <BsCheckLg />
                                </div>
                                <div>
                                    <p>Aftercare Support.</p>
                                </div>
                            </div>

                        </div>

                        <div className='our-mission-image'>
                            <img src={Mission} alt='nurse' loading='lazy' />
                        </div>
                    </div>   

                    <div className='mission-footer'>
                        <p>At Sunshine State Rehab, we stand as a beacon of hope, offering a lifeline to those seeking a way out of the darkness of addiction and mental health challenges. If you or a loved one is ready to embark on the transformative journey to recovery, we invite you to join us on the path towards lasting healing and a brighter future.</p>
                    </div>



                </div>

            </div>


        
        <ContactForm />

</>
    )
}

export default AboutSection
