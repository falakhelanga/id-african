import React from "react";
import { Image } from "react-bootstrap";
const Section2Card = ({ image, direction, title, desc }) => {
  return (
    <div
      className="section2_card "
      style={{
        flexDirection: direction,
      }}
    >
      <Image src={image} alt="image" fluid className="w-50 " />
      <div className="sec2_card_content text-center  w-100 ">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Section2Card;
