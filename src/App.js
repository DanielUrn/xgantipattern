import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./components/footer";
import Home from "./components/home";
import Navigation from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" exact Component={Home} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
