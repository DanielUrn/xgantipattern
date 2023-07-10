import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './components/footer';
import Home  from "./components/home";
import Navigation from './components/navbar';

function App() {


  return (
    <>
      <Navigation></Navigation>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
