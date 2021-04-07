import React from "react";
import styled from "styled-components";
import StudentCarousel from "./StudentCarousel";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: "#191414", alignItems: "center" }}>
        <h1
          style={{
            alignSelf: "center",
            textAlign: "center",
            color: "white",
            marginTop: "40px",
            marginBottom: "40px"
          }}
        >
          Design and Analysis of Algorithm Assignment
        </h1>
        <h2
          style={{
            alignSelf: "center",
            textAlign: "center",
            color: "white",
            marginTop: "40px",
            marginBottom: "40px"
          }}
        >
          Implementation and visualization of the the "Optimal
          Divide-and-Conquer to Compute Measure and Contour for a Set of
          Iso-Rectangles" by Ralf Hartmut Güting
        </h2>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img
            src="https://miro.medium.com/max/855/1*SfBEvWNJpmLRf-Lj_M5f-g.png"
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
