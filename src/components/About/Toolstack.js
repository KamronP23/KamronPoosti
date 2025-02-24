import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiIos,
  SiVisualstudiocode,
  SiRabbitmq,
  SiGithub,
} from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIos />
        <p style={{fontSize:"25px"}}>IOS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize:"25px"}}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq />
        <p style={{fontSize:"25px"}}>RabbitMQ</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGitlab />
        <p style={{fontSize:"25px"}}>GitLab</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{fontSize:"25px"}}>GitHub</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
