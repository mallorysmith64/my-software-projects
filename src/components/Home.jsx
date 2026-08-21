import React, { Component } from "react";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";

class Home extends Component {
  render() {
    return (
      <>
        <Projects />
        <Footer/>
      </>
    );
  }
}

export default Home;
