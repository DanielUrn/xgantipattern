import React from 'react'
import { Form, Button } from 'react-bootstrap';
import jeff from '../img/jeff2.png'
import ansel from '../img/ansel2.png'
import team from '../img/team.png'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='d-flex flex-md-row flex-column justify-content-center'>
          {/* <div className='d-flex flex-sm-row flex-lg-column flex-grow-1'>
            <img className='w-100' src={jeff} alt='Jeff pfp'></img>
            <img className='w-100' src={ansel} alt='Ansel pfp'></img>
          </div> */}
          <img className='w-100 m-auto' src={team} alt='Team pfps'></img>
          <div className="flex-grow-1">
            <h2 className='text-muted'>We are <span className='fw-bold'>XGlobal!</span></h2>
            <h1>Empowering Web 3 Growth</h1>
            <p className='text-body-secondary'>We inspire innovation. As a flexible and adaptable consulting business, we partner with experts to provide groundbreaking services for your success.</p>
            <h2>Our offerings include:</h2>
            <ul>
              <li>Tournament management, and robust growth consultancy. </li>
              <li>Social media mastery</li>
              <li>Graphic design wizardry</li>
              <li>Cutting-edge web development</li>
              <li>Extensive web 3 project research</li>
              <li>Robust Growth Consultancy</li>
            </ul>
            <h3>Embrace the new wave, drive exponential growth.</h3>
            <Form className='m-3'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
