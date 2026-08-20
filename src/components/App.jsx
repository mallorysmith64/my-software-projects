import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Projects from "./Projects.jsx";

class App extends Component {
  render() {
    return (
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Projects />} />
          </Routes>
        </main>
      </Router>
    );
  }
}

export default App;