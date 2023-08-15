import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Discord, EnvelopeFill, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='mt-1'>

      <Row>
        <Col md='7' className='d-flex flex-column flex-md-row justify-content-center align-items-center text-center'>
          <span className='p-1 text-white-50'>XGlobal Singapore Pte Ltd. Copyright 2023.</span>
          <span className='p-1 text-white-50'>All Rights Reserved.</span>
        </Col>
        <Col md='5' className='p-2 d-flex justify-content-center align-items-center gap-3'>
          <a href='mailto:jeff@xglobal.gg' ><EnvelopeFill className='mx-1' size={40}></EnvelopeFill></a>
          <a href='https://t.me/rip_xg' target='_blank' rel="noreferrer"><FontAwesomeIcon className='mx-1' size="2xl" icon={faPaperPlane} style={{color: "#ffffff",}} /></a>
          <a href='https://twitter.com/XGlobalGG?s=20' target='_blank' rel="noreferrer"><Twitter className='mx-1' size={40}></Twitter></a>

        </Col>
      </Row>

    </footer>
  )
}

export default Footer
