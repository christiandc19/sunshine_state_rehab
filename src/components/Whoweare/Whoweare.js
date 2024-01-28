import React from "react";
import "./Whoweare.css";
import Zoom from 'react-reveal/Zoom';

import { BsCheckLg } from "react-icons/bs";
import HomeSection2Image from "../../assets/whoWeAre1-min.png";

const Whoweare = () => {
  return (
    <>
      <div className="homeSection2 ">
        <div className="homeSection2-content container">
          <div className="homeSection2-left">
            <h1>WHO WE ARE</h1>

            <p>Welcome to Sunshine State Rehab, a beacon of hope and healing for those seeking recovery from addiction and mental health challenges. At our clinic, we are dedicated to providing compassionate and comprehensive care to support individuals on their journey to wellness.</p> <br />

            <p>
            We strive to make overcoming addiction achievable by focusing on your sobriety. We use proven medical practices and a comprehensive approach to healing through better guidance, greater compassion, and a stronger community.
            </p><br />
            <h1>OUR MISSION</h1>
            <p>At Sunshine State Rehab, our mission is to empower individuals to overcome the grip of addiction and mental health disorders, guiding them towards a path of lasting recovery and renewed purpose. We are committed to fostering an environment of understanding, respect, and unwavering support for every person who walks through our doors.</p><br />

            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                Therapy and support groups for either addiction or mental health disorders.
                </p>
              </div>
            </div>

            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>Compassionate staff that is dedicated to your success.</p>
              </div>

            </div>
            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                Evidence-based practices that give you the best chance of recovery.
                </p>
              </div>
            </div>

            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                Employment tools and resources to get you hired.                
                </p>
              </div>
            </div>

          </div>


          <Zoom duration={2000}>
            <div className="homeSection2-right">
              <img src={HomeSection2Image} loading="lazy" alt="psychologist" />
            </div>
          </Zoom>

        </div>
      </div>
    </>
  );
};

export default Whoweare;
