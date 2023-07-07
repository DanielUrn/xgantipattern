import React from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import jeff from "../img/jeff2.png";
import ansel from "../img/ansel2.png";
import team from "../img/jeff2.png";

const Home = () => {
  return (
    <div className="flex-grow-1 d-flex d-xl-inline-flex align-content-center flex-wrap">
      <Container className="pt-5">
        <Row>
          <Col className="d-flex align-content-center" lg >
            <img className="m-auto mw-100 h-100" src={team} alt="Team pfps"></img>
          </Col>
          <Col lg className="text-center text-lg-start">
            <div className="pt-2">
              <h2 className="text-muted">
                Hey there, I'm Jeff from XGlobal Consulting!
              </h2>
              <h1><span>Unlock</span> the Web3 World with Our <span>Expert Guidance</span></h1>
              <p className="text-body-secondary">
                We've <span>experienced</span> the up's, survived the downs. <br></br>
                And we want to help you do the same
              </p>
              <ul>
                <li> <span>Dependable</span> consulting partner to pioneers </li>
                <li>Book a <span>no-bullsh*t</span> meeting with someone who speaks your language. </li>
                <li>Tired of putting out fires? <span>That's where we come in</span></li>
              </ul>
              <h3>Disappointed but undeterred? <br></br> <span>Show us your determination</span> </h3>
              <Row className="justify-content-center justify-content-lg-start pt-3">
                <Col sm='7' md='8'>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter your Telegram username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="rounded-0"
                    />
                    <Button className="rounded-0 bg-dark" variant="outline-secondary" id="button-addon2">
                      LET'S TALK
                    </Button>
                  </InputGroup>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
