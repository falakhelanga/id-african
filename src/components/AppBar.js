import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
const AppBar = () => {
  const [showBlack, setShowBlack] = useState(false);

  useEffect(() => {
    const handleBackGround = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          setShowBlack(true);
        } else setShowBlack(false);
      });
    };

    handleBackGround();
    return () => {
      window.removeEventListener("scroll", handleBackGround);
    };
  }, []);
  return (
    <div className={`appbar_wrapper  ${showBlack && "black_bg"} `}>
      <Container className="appbar_container">
        <div className="logo_div">
          <NavLink to="/" className="links home_link">
            {/* <h1>ID-AFRICAN</h1> */}
            <Image
              src="/images/organic/african_logo.jpg"
              alt="logo"
              fluid
              style={{
                height: "80px",
                maxWidth: "100px",
                borderRadius: "50%",
              }}
            />
          </NavLink>
        </div>
        <div className="nav_div">
          <ul>
            <li>
              <NavLink to="/clients" className="links nav_link">
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="links nav_link">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className="links nav_link">
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="links nav_link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="links nav_link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="icons_div d-flex"
          style={{
            color: "white",
            alignItems: "baseline",
          }}
        >
          <FacebookIcon className="icon" />
          <InstagramIcon className="mx-5 icon" />
          <TwitterIcon className="icon" />
        </div>
      </Container>
    </div>
  );
};

export default AppBar;
