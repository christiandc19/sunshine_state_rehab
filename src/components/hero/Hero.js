import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';

import Zoom from 'react-reveal/Zoom';

import "./Hero.css";

const Hero = () => {
  return (
    <>
<figure>

	<div class="imagesContainer">

  <div className="hero-caption">
    <Zoom duration={2000}>
    <h1>Sunshine State <br/>Rehab</h1>
    </Zoom>
    <Zoom duration={3000}>
    <h2>Mental Health and Substance Abuse Treatment Facility</h2>
    </Zoom>

    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>    
      <Zoom duration={2000}>

          <div className="hero-btn">
          <Link to="/contact">
                <button>Call Us</button>
          </Link>
          </div>
        </Zoom>
      </LinkRoll>

  </div>


		<div class="imageDiv image1">
    </div>
		<div class="imageDiv image2 fadeInClass"></div>
	</div>
</figure>
    </>
  );
};

export default Hero;
