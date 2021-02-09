import React from "react";
import { Image } from "react-bootstrap";
// import { Link} from 'react-router-dom'

const Section1Card = ({ image, title, desc, width }) => {
  return (
    <div
      className="card_wrapper "
      style={{
        width: width,
      }}
    >
      <div className="card_container  ">
        <Image src={image} alt="image" fluid />
        <div className="card_content mt-3 p-2">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Section1Card;
