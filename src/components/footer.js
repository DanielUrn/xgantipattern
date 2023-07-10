import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Telegram } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='mt-5'>
      <Container>
        <Row>
          <Col md='9' className='d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center text-center'>
              <span className='p-1'>XGlobal Singapore Pte Ltd. Copyright 2023.</span>
              <span className='p-1'><b>All Rights Reserved.</b></span>
          </Col>
          <Col md='3' className='p-2 d-flex justify-content-center justify-content-md-end align-items-center'>
              <Facebook className='mx-1' size={40}></Facebook>
              <Telegram className='mx-1' size={40}></Telegram>
              <FontAwesomeIcon icon={faFacebookF} />
              
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
