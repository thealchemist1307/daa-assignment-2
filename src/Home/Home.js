import React from "react";
import styled from "styled-components";
import StudentCarousel from "./StudentCarousel";
import Segmented from "../Assets/segmented.png"
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      
      <div style={{ backgroundColor: "#282828", alignItems: "center" }}>
        <h1
          style={{
            alignSelf: "center",
            textAlign: "center",
            color: "#a756bb",
            marginTop: "40px",
            marginBottom: "10px"
          }}
        >
          Design and Analysis of Algorithm Assignment
        </h1>
        <h2
          style={{
            alignSelf: "center",
            textAlign: "center",
            color: "rgb(217 170 228)",

          }}
        >
          Implementation and visualization of the Least Segmented Square Algorithm
        </h2>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img
            src={Segmented}
            alt="Image"
            style={{ alignSelf: "center", height: "200px", width: "400px" }}
          />
        </div>
        <StudentCarousel />
      </div>
    );
  }
}

export default Home;
