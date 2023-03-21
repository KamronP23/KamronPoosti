import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Me from "../../Assets/Me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGitlab,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p>
              As a software engineer, I am fueled by my passion for problem-solving and the opportunity
              to positively impact the world through technology. Prior to entering this field, I spent
              several years as a Licensed Marriage and Family Therapist, where I refined my critical
              thinking and communication skills. This experience instilled in me a deep commitment
              to helping and supporting others.
            </p>
            <p>
              I thrive as a collaborative team player and excel in finding creative solutions to complex
              problems. My passion for continuous learning and problem-solving has been instrumental in
              my success as a software engineer.
            ​<br />
            </p>
            <p>
              Moving forward in my career, I am eager to leverage my skills and experiences to make
              meaningful contributions to the field, with a particular focus on improving access to
              digital resources for all.
            ​<br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={Me}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://gitlab.com/KamronP23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="gitlab"
                >
                  <AiFillGitlab />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kamronpoosti@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kamronpoosti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
