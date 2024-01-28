import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./MenusSA.css";

import { AiOutlineArrowRight } from "react-icons/ai";

import Icon1 from "../../assets/top-flex-icon1.png";
import Icon2 from "../../assets/top-flex-icon2.png";
import Icon3 from "../../assets/top-flex-icon3.png";
import Icon4 from "../../assets/top-flex-icon4.png";
import Icon5 from "../../assets/top-flex-icon5.png";
import Icon6 from "../../assets/top-flex-icon6.png";
import Icon7 from "../../assets/top-flex-icon7.png";
import Icon8 from "../../assets/top-flex-icon8.png";
import Icon9 from "../../assets/top-flex-icon9.png";
import Icon10 from "../../assets/top-flex-icon10.png";
import Icon11 from "../../assets/top-flex-icon11.png";
import Icon12 from "../../assets/top-flex-icon12.png";

const MenusSA = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
          SUNSHINE STATE REHAB TREATMENT CENTER OFFERS VARIOUS SUBSTABCE ABUSE
          PROGRAMS
        </h1>
        <p>
          There are numerous options for addressing concerns related to
          substance use and addiction and each individual will have their own
          set of goals when engaging in treatment. Every person’s experience is
          different, and what has been effective for some people may not be
          effective for others. If you or someone you care about is struggling
          with alcohol, cannabis, or other substance use, find the right help
          for you below.
        </p>
      </div>

      {/* Mental Health Thumbnails */}

      <div className="top-flex">
        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon1} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>ALCOHOLISM</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/alcohol">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon2} alt="Substance Use" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>COCAINE</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/cocaine">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon3} alt="Substance Use" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>HEROIN</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/heroin">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon4} alt="Job Assistance" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>FENTANYL</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/fentanyl">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon5} alt="Job Assistance" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2> KRATOM</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/kratom">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon6} alt="Job Assistance" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>MDMA</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/mdma">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon7} alt="Job Assistance" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>METH</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/meth">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon8} alt="Job Assistance" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>OPIATE</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/opiate">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon9} alt="Job Assistance" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>OPIOID</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/opioid">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon10} alt="Job Assistance" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>OXYCODONE</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/oxycodone">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon11} alt="Job Assistance" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>PRESCRIPTIONS</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/prescriptions">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Icon12} alt="Job Assistance" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Substance Abuse Treatment</h1>
            <h2>XANAX</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/xanax">
                <p>
                  Learn More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenusSA;
