import React from "react";
import Section3Card from "./Section3Card";
import { Container } from "react-bootstrap";

const Section3 = () => {
  return (
    <Container fluid className="section3 ">
      <h1 className="text-center text-capitalize ">instagram update</h1>
      <div className="section3_cards">
        <Section3Card />
      </div>
    </Container>
  );
};

export default Section3;
