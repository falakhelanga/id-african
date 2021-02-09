import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <div className="banner_container">
        <div className="banner_content text-center">
          <h1> We offer products to better your skin</h1>
          <p
            className=" w-50 mx-auto mt-3"
            style={{
              fontSize: "1.5rem",
            }}
          >
            From african black soaps, essential oils including carrot, avocado,
            coconut oil and shea butter. Soon to Launch our very own soaps and
            creams with even better results. We also do Courier service on
            online orders
          </p>
          <div className="btn_div mt-5">
            <Button>View Products</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
