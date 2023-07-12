import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Services = () => {

    return (
        <Container className='h-100 content'>
            <Row className='gap-5 mx-auto justify-content-center'>
                <Row className='flex-column text-center flex-md-row text-md-start align-items-center p-2 gap-5'>
                    <Col>
                        <h1 className='yellow'>
                            XGLOBAL CONSULTING
                        </h1>
                        <p>
                            In the ever-evolving web3 space, XGlobal is your navigational beacon. We demystify complexities, plot clear strategies, and transform web3 ambitions into impactful realities. With us you don't just have to adapt to web3, you conquer it.
                        </p>
                        <Button>
                            LET'S TALK
                        </Button>
                    </Col>
                    <Col className=''>
                        <h2>Offerings</h2>
                        <ul>
                            <li>Operations</li>
                            <li>Bussiness Development</li>
                            <li>Community Management</li>
                            <li>Research Analysis</li>
                            <li>Software Support</li>
                            <li>Marketing Services</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <h2>Get In Touch</h2>
                    <Col>
                        <Row>
                            <Col>
                                <img></img>
                            </Col>
                            <Col>
                                <h3>Jeff Chau</h3>
                                <ul>
                                    <li>CEO, XGlobal Consulting</li>
                                    <li>jeff@xglobal.gg</li>
                                    <li>Telegram: @rip_xg</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <img></img>
                            </Col>
                            <Col>
                                <h3>Ansel Gravelle</h3>
                                <ul>
                                    <li>Principal Consultant, XGlobal Consulting</li>
                                    <li>ansel@xglobal.gg</li>
                                    <li>Telegram: @ItsAnsel_ETH</li>
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