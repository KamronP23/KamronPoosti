import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi, my name's <span className="primary-header">Kamron Poosti</span>. I'm a software engineer based in Los Angeles, California.
            <br />
            <br />
            In addition to programming, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Exploring Nature
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Learning New Skills
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
