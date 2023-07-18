import React from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import team from "../img/jeff2.png";
import '../styles/home.css'
import Slider from "./carousel";

const Home = () => {
  document.documentElement.style.setProperty('--background', "url('./img/DESKTOP.png')");
  return (
    <div className="d-flex justify-content-center align-content-center content m-4">
        <Row className="gap-4 w-100">
          <Col className="carousel align-content-center" lg >
            <Slider className="d-flex flex-nowrap align-content-center "></Slider>
          </Col>
          <Col lg className="text-center text-lg-start d-flex align-items-center">
            <div>
              <h2 className="fw-bold">
                Hey there, I'm Jeff from XGlobal Consulting!
              </h2>
              <h1 className="fw-bold mt-2"><span>Accelerate your growth.</span> <br></br> XGlobal will help you define a strong growth strategy and execute on it.</h1>
              <p className="text-body-secondary mt-2">
                We've <span>experienced</span> the up's, survived the downs. <br></br>
                And we want to help you do the same.
              </p>
              <ul className="mt-2 mx-3">
                <li> <span>Dependable</span> consulting partner to pioneers. </li>
                <li>Book a <span>no-bullsh*t</span> meeting with someone who speaks your language. </li>
                <li>Tired of putting out fires? <span>That's where we come in.</span></li>
              </ul>
              <h3 className="mt-3"> Set up your pipeline and solidify your network.  <br></br> <span>Let's chat.</span> </h3>
              <Row className="justify-content-center justify-content-lg-start mt-4">
                <Col sm='7' md='9'>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter your Telegram username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="rounded-0"
                    />
                    <Button className="rounded-0" variant="outline-secondary" id="button-addon2">
                      LET'S TALK
                    </Button>
                  </InputGroup>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      
    </div>
  );
};

export default Home;
