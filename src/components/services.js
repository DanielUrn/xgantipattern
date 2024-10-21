import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import jeff  from "../img/Jeff-Chau.webp";
const Services = () => {

    return (
        <Container className='h-100 content'>
            <Row className='gap-5 mx-auto justify-content-center py-4'>
                <Row className='flex-column text-center flex-md-row text-md-start align-items-center p-2 gap-5'>
                    <Col lg='7'>
                        <h1 className='yellow'>
                            XGLOBAL
                        </h1>
                        <p>
                            We demystify complexities, plot clear strategies, and transform web3 ambitions into impactful realities. With us you don't just have to adapt to web3, you conquer it.
                        </p>
                        <Button className='services-button'>
                            LET'S TALK
                        </Button>
                    </Col>
                    <Col lg='4' className='d-flex justify-content-center justify-md-content-end'>
                        <div>
                            <h2>Offerings</h2>
                            <ul className='opacity-25'>
                                <li>Operations</li>
                                <li>Business Development</li>
                                <li>Community Management</li>
                                <li>Research Analysis</li>
                                <li>Software Support</li>
                                <li>Marketing Services</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className='gap-4'>
                    <h2 className='semi'>Get In Touch</h2>
                    <Col lg>
                        <Row>
                            <Col>
                                <img src={jeff} className='w-100' alt='Consultants profile pic'></img>
                            </Col>
                            <Col>
                                <h3 className='yellow semi'>Jeff Chau</h3>
                                <ul>
                                    <li>Me</li>
                                    <li className='yellow'>jeff@ripxg.com</li>
                                    <li>Telegram: @rip_xg</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Services