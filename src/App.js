import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./components/footer";
import Home from "./components/home";
import Navigation from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/services";
import Blog from "./components/blog";

function App() {
  return (
    <>
    <Navigation></Navigation>
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/services" Component={Services} />
        {/* <Route path="/blog" Component={Blog}/> */}
      </Routes>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
