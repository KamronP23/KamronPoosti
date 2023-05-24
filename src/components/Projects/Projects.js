import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import TherapyHub from "../../Assets/Projects/TherapyHub.png";
import CarCar from "../../Assets/Projects/CarCar.png";
import Wardrobify from "../../Assets/Projects/Wardrobify.png";
import Scrumptious from "../../Assets/Projects/Scrumptious.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import ConferenceGo from "../../Assets/Projects/ConferenceGo.png";
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TherapyHub}
              title="TherapyHub"
              description="A Full-Stack directory web application using FastAPI, React,
              Python and Docker, where therapists can sign up to be listed on the directory,
              users can make accounts to search through the directory to locate therapists
              in their area, further filter with specialties and payment methods, and add
              the therapists to a wishlist to save the therapist's information. Deployed via Caprover"
              ghLink="https://github.com/KamronP23/therapy-hub-fork"
              demoLink="https://team-swank.gitlab.io/therapy-hub/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Site"
              description="A fully responsive Front-End portfolio site with built in light
              & dark mode utilizing React & Bootstrap. Deployed via AWS."
              ghLink="https://github.com/KamronP23/KamronPoosti"
              demoLink="https://team-swank.gitlab.io/therapy-hub/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={CarCar}
              title="Dealership Website"
              description="A Full-Stack web application using Python, React, Django,
              Docker & Microservices to provide an auto dealership with vehicle data, sales,
              service appointments and tracking history of sales and service appointments."
              ghLink="https://github.com/KamronP23/project-beta/tree/kamron-branch"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Wardrobify}
              title="Wardrobify"
              description="A Full-Stack web application to organize a users closer
              by aling inputing hat and shoe information, create bins, closets,
              update items and delete items utilizing Microservices, Python,
              Django, Docker & React."
              ghLink="https://github.com/KamronP23/microservice-two-shot"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ConferenceGo}
              title="ConferenceGo"
              description="A Full-Stack web application to provide information
              regarding upcoming conferences, with the ability to create new
              conferences, create a user, register to attend conferences as
              well as the ability to create and register presentations. Built
              using Python, Django, Docker, React & Microservices"
              ghLink="https://github.com/KamronP23/Fearless-Front-end"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Scrumptious}
              title="Scrumptious"
              description="A Full-Stack web recipe book application with user
              authentication, database integration, responsive design and form
              handling utilizing Django, HTML & CSS."
              ghLink="https://github.com/KamronP23/Scrumptious"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
