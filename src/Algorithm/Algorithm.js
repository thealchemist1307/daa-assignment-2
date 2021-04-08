import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";
import AlgorithmImage from "../Assets/algorithm.png";
let common = [
  "We define a frame (rectangle) F that encloses all the iso-rectangles.",
  "For the given set of iso-rectangles, their vertical edges are extracted and stored in a sorted manner as E.",
  "Rectangle dac (E,F) calls the recursive procedure stripes and returns the final set of stripes with their x_union.",
  "We apply a divide and conquer algorithm stripes on the set of edges E, and the given frame F.",
  "When we"
];
class Algorithm extends React.Component {
  constructor() {
    super();
    this.state = {
      height: ""
    };
  }
  componentDidMount() {
    this.setState({ height: window.innerHeight });
  }
  render() {
    return (
      <Scrollbars
        disableDefaultStyles
        renderThumbHorizontal={(props) => (
          <div {...props} className="vertical" />
        )}
        renderThumbVertical={(props) => <div {...props} className="vertical" />}
        style={{ width: "fill", height: this.state.height * 0.9 }}
      >
        <div style={{ color: "white" }}>
          <h1 style={{ color: "white", textAlign: "center", margin: "20px" }}>
            General Discussion on Algorithm
          </h1>

          <div class="container">
            <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
            The algorithm aims to solve the Segmented Least Squares problem that intends to split a given set of n points into segments such that each segment has a best fit line that minimizes the overall sum of squares of error for the complete set of points, provided there is a penalty value associated with introducing a new segment.


            </h4>
            <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
            Using the algorithm we intend to minimize the cost function for a given set of points.



            </h4>
            <h4 style={{fontWeight:'bold',marginTop: "20px", marginBottom: "20px"}}>            Total Cost Function ::= Total Sum of Squares Error + Total Penalty</h4>
            <h4 style={{fontWeight:'bold',marginTop: "20px", marginBottom: "20px"}}>Total Sum of Squares Error ::=  ∑ (SSE)  ∀ segments</h4>
            <h4 style={{marginTop: "20px", marginBottom: "20px"}}><span style={{fontWeight:'bold',}}>SSE ::= ∑ (yi - axi -b) </span>, where y=ax+b is the Best Fit Line for the given points.
</h4>
            <h4 style={{marginTop: "20px", marginBottom: "20px"}}><span style={{fontWeight:'bold'}}>Total Penalty ::= (number of segments) x penalty value </span>, where penalty value is the penalty introduced for each new segment.
</h4>
            
            <div class="row" style={{ marginTop: "40px" }}>
              <h2 style={{ fontWeight: "bold" }}>
                {" "}
                Common Approach to the Algorithms :
              </h2>
              <img
                src={AlgorithmImage}
                style={{ width: "-webkit-fill-available", marginTop: "40px" }}
              />
              {/* <ul>
                {common.map((item, index) => {
                  return (
                    <li key={index}>
                      <h3>{item}</h3>{" "}
                    </li>
                  );
                })}
              </ul> */}
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Algorithm;
