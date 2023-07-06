import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Footer from './components/footer';
import Home  from "./components/home";
import Navigation from './components/navbar';

function App() {

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your email handling logic here
    console.log('Submitted email:', email);
    // Reset the form
    setEmail('');
  };

  return (
    <div>
      <Navigation></Navigation>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
