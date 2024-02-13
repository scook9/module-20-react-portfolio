import React, { Component } from "react";
import Pdf from "../assets/resume.pdf";

class Resume extends Component {
  render() {
    return (
      <div className="App">
        <a href={Pdf} target="_blank">
          Download Resume
        </a>
      </div>
    );
  }
}

// function Resume() {
//   return <>Resume Filler Text</>;
// }

export default Resume;
