import React from "react";
import Section1Card from "./Section1Card";
import { Container } from "react-bootstrap";

const Section1 = () => {
  return (
    <div
      className="section1_wrapper   w-100   "
      // style={{
      //   paddingTop: "5rem",
      // }}
    >
      <Container
        className="section1_wrapper  pb-5 w-100   "
        style={{
          paddingTop: "5rem",
        }}
      >
        <h1
          className="text-center mb-5 text-white mb-3"
          style={{
            fontWeight: "bold",
          }}
        >
          Our Products
        </h1>
        <div className="row_div">
          {/****  FIRST ROW     ******/}

          <div className="col_div mt-5 ">
            <Section1Card
              image="/images/organic/shea_butter.jpg"
              title="Shea Butter"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              width="300px"
            />
          </div>
          <div
            className="col_div mx-5"
            style={{
              marginTop: "-30px",
            }}
          >
            <Section1Card
              image="/images/organic/black_soap.jpg"
              title="Black Soap"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              width="300px"
            />
          </div>
          <div className="col_div mt-5">
            <Section1Card
              image="/images/organic/oil.jpg"
              title="Essential Oils"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              width="300px"
            />
          </div>
        </div>

        {/* SECOND ROW */}

        {/* <div
          className="row_div"
          style={{
            marginTop: "5rem",
          }}
        >
          <div className="col_div  ">
            <Section1Card
              image="/images/examples.jpg"
              title="Examples of our work"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              width="300px"
            />
          </div>
          <div
            className="col_div mx-5"
            style={{
              marginTop: "4rem",
            }}
          >
            <Section1Card
              image="/images/menu.jpg"
              title="Menu & experience reviews"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              width="300px"
            />
          </div>
          <div className="col_div ">
            <Section1Card
              image="/images/burger.jpg"
              title="New Concept Creation"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              width="300px"
            />
          </div>
        </div> */}

        {/***** * THIRD ROW ******/}

        {/* <div className="row_div mt-5 ">
          <div className="col_div  ">
            <Section1Card
              image="/images/examples.jpg"
              title="New Concept Creation"
              desc="Examples of our work"
              width="650px"
            />
          </div>

          <div className="col_div ml-2 ">
            <Section1Card
              image="/images/burger.jpg"
              title="New Concept Creation"
              desc="We tailor projects to our clients needs"
              width="650px"
            />
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default Section1;
