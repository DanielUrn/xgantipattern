import React from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import team from "../img/jeff2.png";
import '../styles/home.css'

const Home = () => {
  return (
    <div className="flex-grow-1 d-flex d-xl-inline-flex align-content-center flex-wrap content">
      <Container className="pt-5">
        <Row className="gap-5">
          <Col className="d-flex align-content-center" lg >
            <img className="m-auto mw-100 h-100" src={team} alt="Team pfps"></img>
          </Col>
          <Col lg className="text-center text-lg-start">
            <div className="mt-5">
              <h2 className="fw-bold">
                Hey there, I'm Jeff from XGlobal Consulting!
              </h2>
              <h1 className="fw-bold mt-4"><span>Unlock</span> the Web3 World <br></br> with Our <span>Expert Guidance</span></h1>
              <p className="text-body-secondary mt-4">
                We've <span>experienced</span> the up's, survived the downs. <br></br>
                And we want to help you do the same
              </p>
              <ul className="mt-4">
                <li> <span>Dependable</span> consulting partner to pioneers </li>
                <li>Book a <span>no-bullsh*t</span> meeting with someone who speaks your language. </li>
                <li>Tired of putting out fires? <span>That's where we come in</span></li>
              </ul>
              <h3 className="mt-4">Disappointed but undeterred? <br></br> <span>Show us your determination</span> </h3>
              <Row className="justify-content-center justify-content-lg-start mt-5">
                <Col sm='7' md='8'>
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
      </Container>
    </div>
  );
};

export default Home;
