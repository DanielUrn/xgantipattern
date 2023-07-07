import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Telegram } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='position-relative bottom-0'>
      <Container>
        <Row>
          <Col md='9' className='p-2 d-flex flex-column flex-md-row justify-content-center justify-content-md-start text-center'>
              <span className='p-1'>XGlobal Singapore Pte Ltd. Copyright 2023.</span>
              <span className='p-1'><b>All Rights Reserved.</b></span>
          </Col>
          <Col md='3' className='p-2 d-flex justify-content-center justify-content-md-end'>
              <Facebook className='mx-1' width={"8vw"} height={"8vw"}></Facebook>
              <Telegram className='mx-1' width={"8vw"} height={"8vw"}></Telegram>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
