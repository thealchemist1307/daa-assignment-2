import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";

let issues = [
  "Understanding and Implementing the pseudo code and formulas based on the notations used",
  "Handling precision values and generating test cases",
  "Implementing timing analysis and memory usage for the program",
  "Generating and visualizing the results based on various parameters",
  "Building Documentation and HTML pages for the results.",
  "Deciding on a convenient format to present the output for visualization",
  "Learning how to analyze runtime memory usage for a C++ program"
  
];

class Issues extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        class="container"
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            alignSelf: "center",
            marginTop: "20px",
            marginBottom: "40px"
          }}
        >
          Issues in Coding
        </h1>
        <ul>
          {issues.map((item, index) => {
            return (
              <li style={{ fontSize: "20px" }} key={index}>
                <h4> {item}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Issues;
