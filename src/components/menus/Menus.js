import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./Menus.css";

import { AiOutlineArrowRight } from "react-icons/ai";

import Depression from "../../assets/mental-health-depression.png";
import Anxiety from "../../assets/top-flex-icon10.png";
import Panic from "../../assets/mental-health-panic.png";
import Stress from "../../assets/top-flex-icon8.png";
import Anger from "../../assets/top-flex-icon9.png";
import ADHD from "../../assets/top-flex-icon10.png";
import PTSD from "../../assets/mental-health-ptsd.png";
import Bipolar from "../../assets/mental-health-bipolar.png";
import Schizoaffective from "../../assets/mental-health-schizoaffective.png";
import Schizophrenia from "../../assets/mental-health-schizophrenia.png";

const Menus = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
          SUNSHINE STATE REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
          PROGRAMS
        </h1>
        <p>
          At Sunshine State Rehab Treatment Center, clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.{" "}
        </p>
      </div>

      <div class="mh-card-wrap"></div>

      {/* Mental Health Thumbnails */}

      <div className="top-flex">
        <div className="top-flex-item">
          <div className="top-flex-icon">
            <img src={Depression} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>DEPRESSION</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/depression">
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
            <img src={Anxiety} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>ANXIETY</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/anxiety">
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
            <img src={Panic} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>PANIC DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/panic-disorder">
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
            <img src={Stress} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>STRESS DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/acute-stress-disorder">
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
            <img src={Anger} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>ANGER DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/anger-disorder">
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
            <img src={ADHD} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>ADHD DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/adhd">
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
            <img src={PTSD} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>PTSD DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/ptsd">
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
            <img src={Bipolar} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>BIPOLAR DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/bipolar-disorder">
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
            <img src={Schizoaffective} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>SCHIZOAFFECTIVE</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/schizoaffective">
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
            <img src={Schizophrenia} alt="Mental Health" loading="lazy" />
          </div>
          <div className="top-flex-text">
            <h1>Mental Health Treatment</h1>
            <h2>SCHIZOPHRENIA</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/schizophrenia">
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

export default Menus;
