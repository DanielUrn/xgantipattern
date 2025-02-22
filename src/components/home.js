import React, {useState} from "react";
import { Form, Button, Row, Col, InputGroup, ToastContainer, Toast } from "react-bootstrap";
import logo from "../img/XGlobal White.webp";
import '../styles/home.css'
import Slider from "./carousel";
import { addUserToTelegram } from "../services/firestore";

const Home = () => {
  const [user, setUser] = useState('');
  const [show, setShow] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleOnClick = () => {
    if(user){
      const res = addUserToTelegram(user);
      if(res){
        setUser('')
        toggleToast()
      }

    }
  }

  const handleInputChange = (event) => {
    setUser(event.target.value);
  }
  
  const toggleToast = () => {
    setShow(!show)
  }

  const toggleToastError = ()=>{
    setShowError(!showError)
  }

  document.documentElement.style.setProperty('--background', "url('./img/DESKTOP.webp')");
  return (
    <div className="d-flex justify-content-center align-content-center content m-4">
        <Row className="gap-4 w-100">
          <Col className="carousel align-content-center" lg >
            <Slider className="d-flex flex-nowrap align-content-center "></Slider>
          </Col>
          <Col lg className="text-center text-lg-start d-flex align-items-center">
            <div>
              <h2 className="fw-bold">
                Hey there, I'm Jeff!
              </h2>
              <h1 className="fw-bold mt-2"><span>Accelerate your growth.</span></h1>
              <ul className="mt-2 mx-3">
                <li> <span>Dependable</span> advisory for leaders looking to grow. </li>
                <li>Book a <span>no-bullsh*t</span> meeting with someone who speaks your language. </li>
              </ul>
              <h3 className="mt-3"> Chat with me</h3>
              <Row className="justify-content-center justify-content-lg-start mt-4">
                <Col sm='7' md='9'>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter your Telegram username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="rounded-0"
                      value={user}
                      onChange={handleInputChange}
                    />
                    <Button 
                      onClick={handleOnClick}
                      className="rounded-0" variant="outline-secondary" id="button-addon2">
                      LET'S TALK
                    </Button>
                  </InputGroup>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      <ToastContainer position="bottom-end" className="m-2">
        <Toast show={show} onClose={toggleToast}>
          <Toast.Header className="bg-dark">
            <img src={logo} className="me-2" alt="toast xglobal logo" width={'100px'} />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="bg-dark">Your Telegram Username was successfully sent!</Toast.Body>
        </Toast>
      </ToastContainer>
      <ToastContainer position="bottom-end" className="m-2">
        <Toast show={showError} onClose={toggleToastError}>
          <Toast.Header className="bg-dark">
            <img src={logo} className="me-2" alt="toast xglobal logo" width={'100px'} />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="bg-dark">There was a problem sending your Telegram username, please try again or contact us through our socials!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Home;
