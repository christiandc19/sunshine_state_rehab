import React from "react";
import "./ServicesSA.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import Zoom from 'react-reveal/Zoom';

import alcohol from '../../assets/alcoholic_man.webp'
import Prescriptions from '../../assets/prescriptions_addict_woman.webp'
import Xanax from '../../assets/xanax_man.webp'

const ServicesSA = () => {
  return (
    <>
      <div className="servicesSA">
        <div className="servicesSA-content container">

        <Zoom duration={2000}>
          <div className="servicesSA-header">
              <h1>SERVICES</h1>
              <h2>Substance Abuse Programs</h2>
              <p>
                No matter what type of addiction or mental health condition you
                are dealing with, there’s something for everyone at Sunshine
                Rehab Treatment Center.
              </p>
          </div>
        </Zoom>

        <Zoom duration={3000}>
          <div className="servicesSA-flex">

              <div className="servicesSA-flexItem">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>    
                  <Link to="/alcohol">
                    <div className="sa-image">
                      <img src={alcohol} alt="Alcoholic Man" loading="lazy" />
                      <h1>Alcohol Addiction</h1>
                    </div>
                  </Link>
                </LinkRoll>
              </div>

              <div className="servicesSA-flexItem">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>    
                    <Link to="/prescriptions">
                    <div className="sa-image">
                      <img src={Prescriptions} alt="Alcoholic Man" loading="lazy" />
                      <h1>Prescriptions Addiction</h1>
                    </div>
                  </Link>
                </LinkRoll>
              </div>


              <div className="servicesSA-flexItem">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>    
                  <Link to="/xanax">
                    <div className="sa-image">
                      <img src={Xanax} alt="Alcoholic Man" loading="lazy" />
                      <h1>Xanax Addiction</h1>
                    </div>
                    </Link>
                </LinkRoll>
              </div>

          </div>
      </Zoom>


          <div className="servicesSA-btn">
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/substance-abuse">
                <button> VIEW ALL</button>
              </Link>
            </LinkRoll>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSA;
