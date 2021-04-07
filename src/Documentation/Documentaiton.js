import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";

class Issues extends React.Component {
  constructor() {
    super();
    this.state = {};
    console.log(__dirname);
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
          Documentation{" "}
        </h1>
        <div class="row">
          <h3>Measure Problem </h3>
          <h5>
            <a href="/documentation/html1/index.html" target="_blank">
              Go to Documentation
            </a>
          </h5>
          <h3>
            Measure Problem : <a href="/measure_problem">Go to Documentation</a>{" "}
          </h3>
        </div>
      </div>
    );
  }
}

export default Issues;
