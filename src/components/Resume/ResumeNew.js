import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const onButtonClick = () => {
  fetch('KamronPoostiResume.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'KamronPoostiResume.pdf';
          alink.click();
      })
  })
}
const resumeLink =
  "KamronPoostiResume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfUrl, setPdfUrl] = useState(null)

  useEffect(() => {
    setWidth(window.innerWidth)
    setPdfUrl(resumeLink);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <button onClick={onButtonClick} style={{ maxWidth: "250px" }}>
            Download PDF
          </button>
        </Row>

        <Row className="resume">
          <Document file={pdfUrl} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        <button onClick={onButtonClick} style={{ maxWidth: "250px" }}>
            Download PDF
          </button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
