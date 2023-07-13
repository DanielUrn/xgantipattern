import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Telegram } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='mt-2'>
      
        <Row>
          <Col md='7' className='d-flex flex-column flex-md-row justify-content-center align-items-center text-center'>
              <span className='p-1'>XGlobal Singapore Pte Ltd. Copyright 2023.</span>
              <span className='p-1'><b>All Rights Reserved.</b></span>
          </Col>
          <Col md='5' className='p-2 d-flex justify-content-center align-items-center'>
              <Facebook className='mx-1' size={40}></Facebook>
              <Telegram className='mx-1' size={40}></Telegram>
              <FontAwesomeIcon icon={faFacebookF} />
              
          </Col>
        </Row>
      
    </footer>
  )
}

export default Footer
