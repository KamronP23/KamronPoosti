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
              As a software engineer, I am driven by the opportunity to develop solutions
              that can positively impact individuals and communities. My career objective
              has always been to effect change in the lives of others, and I am convinced
              that the tech industry provides the perfect platform to realize this ambition.</p>
            <p>
              Having recently completed the 19-week Hack Reactor bootcamp, I have acquired a
              wealth of knowledge and hands-on experience that has yielded tangible results
              in my coding projects. My programming skills are characterized by efficiency,
              autonomy, and an unwavering work ethic. I am also a perceptive problem-solver,
              with the ability to engage clients effectively and deliver projects in a timely manner.
            ​<br />
            </p>
            <p>
            My experience as a licensed marriage and family therapist has equipped me with invaluable
            skills in time management and innovative thinking that are fundamental to the success of a
            software engineer. As I pursue my next role, I am eager to continue learning, develop new
            leadership skills, and collaborate effectively with others to streamline processes
            and optimize outcomes.
            ​<br />
            </p>
            <p>
            My ultimate goal as a software engineer is to develop innovative solutions that positively
            impact the lives of others. I am enthusiastic about embracing new challenges and contributing
            my skills and expertise towards making a meaningful difference in the world.
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
