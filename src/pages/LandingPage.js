import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className= {styles.LandingArea}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>Do you want to ask help from Cupid?</p>
        <Container >
          <Button href="" variant="secondary" className="m-2 custom-button">Login</Button>
          <Button href="" variant="secondary" className="m-2 custom-button">Signup</Button>
        </Container>

    </div>
  );
};

export default LandingPage;
