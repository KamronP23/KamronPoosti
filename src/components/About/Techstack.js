import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiDjango,
  DiGit,
  DiPython,
  DiPostgresql,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiFastapi,
  SiRedux,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize:"25px"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize:"25px"}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize:"25px"}}>NodeJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize:"25px"}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p style={{fontSize:"25px"}}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <p style={{fontSize:"25px"}}>django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize:"25px"}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p style={{fontSize:"25px"}}>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <p style={{fontSize:"25px"}}>FastAPI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{fontSize:"25px"}}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{fontSize:"25px"}}>CSS</p>
      </Col>
    </Row>
  );
}

export default Techstack;
