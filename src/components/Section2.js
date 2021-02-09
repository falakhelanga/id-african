import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Section2Card from "./Section2Card";

const Section2 = () => {
  return (
    <div className="section2_wrapper mt-5">
      <Container className="section2_container">
        <h1 className="text-center mb-5">Featured case studies</h1>
        <Carousel>
          <Carousel.Item>
            <Section2Card
              image="/images/organic/before_after1.jpg"
              title="Make Your Face smooth and Fresh"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Carousel.Item>
          <Carousel.Item>
            <Section2Card
              image="/images/organic/before_after2.jpg"
              direction="row-reverse"
              title="Make Your Face smooth and Fresh"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Carousel.Item>
          <Carousel.Item>
            <Section2Card
              image="/images/organic/before_after3.jpg"
              title="Make Your Face smooth and Fresh"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Carousel.Item>
          {/* 
          <Carousel.Item>
            <Section2Card
              image="/images/section2/sec2_image4.jpg"
              direction="row-reverse"
              title="Leon Restourants"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Carousel.Item>
          <Carousel.Item>
            <Section2Card
              image="/images/section2/sec2_image5.jpg"
              title="Leon Restourants"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Carousel.Item> */}
        </Carousel>
      </Container>
    </div>
  );
};

export default Section2;
