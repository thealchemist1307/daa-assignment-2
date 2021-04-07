import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";

class Result extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Scrollbars
        style={{ position: "absolute" }}
        disableDefaultStyles
        renderThumbHorizontal={(props) => <div {...props} class="vertical" />}
        renderThumbVertical={(props) => <div {...props} class="vertical" />}
      >
        <div class="container" style={{ color: "white", alignSelf: "center" }}>
          <h1 style={{ textAlign: "center" }}>Result of our Code</h1>
          <div class="row">
            <div
              class="col"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "tomato",
                fontWeight: "bold"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Input</h2>
            </div>
            <div
              class="col-6"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "tomato",
                fontWeight: "bold"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Output</h2>
            </div>
            <div
              class="col"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "tomato",
                fontWeight: "bold"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Visualize</h2>
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Result;
