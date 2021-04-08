import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "./Document.css";
import Plot from "../Assets/plot.png";
import TA from "../Assets/ta.jpeg"
import MA from "../Assets/ma.jpeg"
import OVP from "../Assets/ovp.jpeg"
import EVP from "../Assets/evp.jpeg"
let table = {
  "Sheet1": [
      {
          "Subroutine Name": "compare_points()",
          "Time Complexity": "O(1)",
          "Explanation": "Just compares the x and y coordinates of two points and provides ordering."
      },
      {
          "Subroutine Name": "Sum_Squares_Error_point()",
          "Time Complexity": "O(1)",
          "Explanation": "Calculates the Sum of Squares error for a given line and a point."
      },
      {
          "Subroutine Name": "find_cumulative_sum()",
          "Time Complexity": "O(n)",
          "Explanation": "Accesses all the input points (O(n)) to calculate the sum of x and y coordinates respectively."
      },
      {
          "Subroutine Name": "find_cumulative_product()",
          "Time Complexity": "O(n)",
          "Explanation": "Accesses all the input points (O(n)) to calculate the sum of squares of x coordinates and the sum of product of x and y coordinates for each input."
      },
      {
          "Subroutine Name": "FindBestFit()",
          "Time Complexity": "O(n)",
          "Explanation": "Uses helper functions find_cumulative_sum- O(n) and find_cumulative_product- O(n) for a given set of points to calculate best fit."
      },
      {
          "Subroutine Name": "calculateErrorValues()",
          "Time Complexity": "O(n)",
          "Explanation": "Creates a sublist of points based on indices O(n) and finds the best fit line for that set O(n) and uses it ot calculate the corresponding error O(n)"
      },
      {
          "Subroutine Name": "segmentedLeastSquares()",
          "Time Complexity": "O(n*n)",
          "Explanation": "Since we have already precalculated error values for all (i,j) segments, we compute the recurrence in O(n*n) [ for all possible segments for each j]"
      },
      {
          "Subroutine Name": "findSegments()",
          "Time Complexity": "O(n*n)",
          "Explanation": "Recursive function to compute the optimal segments from pre computed values. Uses recurrence relation :\nT(n) = T(n-k) + O(n)"
      }
  ]
}
let analysis = {
  "Sheet1": [
      {
          "n": "10",
          "c": "0",
          "ms": "0.12",
          "mb": "1.73"
      },
      {
          "n": "10",
          "c": "85.62",
          "ms": "0.11",
          "mb": "1.71"
      },
      {
          "n": "10",
          "c": "456.89",
          "ms": "0.14",
          "mb": "1.72"
      },
      {
          "n": "10",
          "c": "1187.74",
          "ms": "0.12",
          "mb": "1.72"
      },
      {
          "n": "50",
          "c": "0",
          "ms": "4.56",
          "mb": "2.34"
      },
      {
          "n": "50",
          "c": "85.62",
          "ms": "4.23",
          "mb": "1.93"
      },
      {
          "n": "50",
          "c": "456.89",
          "ms": "4.52",
          "mb": "1.96"
      },
      {
          "n": "50",
          "c": "1187.74",
          "ms": "4.59",
          "mb": "1.98"
      },
      {
          "n": "100",
          "c": "0",
          "ms": "26.31",
          "mb": "6.08"
      },
      {
          "n": "100",
          "c": "85.62",
          "ms": "21.21",
          "mb": "3.05"
      },
      {
          "n": "100",
          "c": "456.89",
          "ms": "21.69",
          "mb": "3.06"
      },
      {
          "n": "100",
          "c": "1187.74",
          "ms": "22.43",
          "mb": "3.64"
      },
      {
          "n": "500",
          "c": "0",
          "ms": "2091.1",
          "mb": "503.11"
      },
      {
          "n": "500",
          "c": "85.62",
          "ms": "1556.96",
          "mb": "132.51"
      },
      {
          "n": "500",
          "c": "456.89",
          "ms": "1559.83",
          "mb": "138.57"
      },
      {
          "n": "500",
          "c": "1187.74",
          "ms": "1613.18",
          "mb": "156.35"
      },
      {
          "n": "1000",
          "c": "0",
          "ms": "16746.22",
          "mb": "3643.87"
      },
      {
          "n": "1000",
          "c": "85.62",
          "ms": "10824.78",
          "mb": "642.48"
      },
      {
          "n": "1000",
          "c": "456.89",
          "ms": "10795.68",
          "mb": "658.79"
      },
      {
          "n": "1000",
          "c": "1187.74",
          "ms": "17954.36",
          "mb": "539.69"
      }
  ]
}
let penalty={
  "Sheet1": [
      {
          "Penalty Value (C)": "0",
          "Total Error": "0",
          "No. of Optimum Segments": "13"
      },
      {
          "Penalty Value (C)": "10",
          "Total Error": "55.96",
          "No. of Optimum Segments": "5"
      },
      {
          "Penalty Value (C)": "100",
          "Total Error": "505.96",
          "No. of Optimum Segments": "5"
      },
      {
          "Penalty Value (C)": "1000",
          "Total Error": "5005.97",
          "No. of Optimum Segments": "5"
      },
      {
          "Penalty Value (C)": "10000",
          "Total Error": "50006",
          "No. of Optimum Segments": "5"
      },
      {
          "Penalty Value (C)": "20000",
          "Total Error": "96847.4",
          "No. of Optimum Segments": "4"
      },
      {
          "Penalty Value (C)": "50000",
          "Total Error": "216847",
          "No. of Optimum Segments": "4"
      },
      {
          "Penalty Value (C)": "100000",
          "Total Error": "401195",
          "No. of Optimum Segments": "3"
      },
      {
          "Penalty Value (C)": "200000",
          "Total Error": "701195",
          "No. of Optimum Segments": "3"
      },
      {
          "Penalty Value (C)": "500000",
          "Total Error": "1317160",
          "No. of Optimum Segments": "1"
      },
      {
          "Penalty Value (C)": "1000000",
          "Total Error": "1817160",
          "No. of Optimum Segments": "1"
      },
      {
          "Penalty Value (C)": "2000000",
          "Total Error": "2817160",
          "No. of Optimum Segments": "1"
      },
      {
          "Penalty Value (C)": "5000000",
          "Total Error": "5817160",
          "No. of Optimum Segments": "1"
      }
  ]
}
class Document extends React.Component {
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
          Timing Analysis and Memory Usage
{" "}


          </h1>


          <div class="container">
          <h3 style={{ color: "white", textAlign: "center", margin: "20px" }}>

Average Running Time (milliseconds) and Memory Usage (mB) 
for 10 - Randomly Generated Test cases based on the Number of points (n) and Penalty value (C)  :-

</h3>
            <div class="row">
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >

No. of Points (n)

              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >

Penalty value (C)

              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >

Avg Time Taken (ms)

              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >

Runtime Memory Usage (mB)

              </div>
            </div>
            {analysis.Sheet1.map((item, index) => {
              return (
                <div class="row">
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba",
                      textAlign: "center"
                    }}
                  >
                    {item.n}
                  </div>
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba",
                      textAlign: "center"
                    }}
                  >
                    {item.c}
                  </div>
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba",
                      textAlign: "center"
                    }}
                  >
                    {item.ms}
                  </div>
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba",
                      textAlign: "center"
                    }}
                  >
                    {item.mb}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            <img
              src={TA}
              alt="Image"
              style={{
                background: "white",
                alignSelf: "center",
                width: "50%",
                marginBottom: 10
              }}
            />

          </div>

          <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginTop: 20
            }}
          >

                        <img
              src={MA}
              alt="Image"
              style={{
                background: "white",
                alignSelf: "center",
                width: "50%",
                marginBottom: 10
              }}
            />
          </div>
            
          <div class="container">
          <h1 style={{ color: "white", textAlign: "center", margin: "20px" }}>
          Experimental Analysis based on Penalty Value (C)  {" "}
          </h1>
          <h4 style={{ margin: "20px" }}>
          Penalty value indicates that component of the total cost function that is incurred due to the introduction of a new segment.            </h4>
            <h4 style={{ margin: "20px" }}>
            For the given set of randomly generated input points , we perform an analysis on the variation of error values (Sum of Squares Error) and the number of optimum segments with change in penalty values(c):-</h4>         </div>

          <div class="container">
            <div class="row">
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >

Penalty Value (C)

              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >


Total Error


              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >

No. of Optimum Segments
              </div>

            </div>
            {penalty.Sheet1.map((item, index) => {
              return (
                <div class="row">
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba",
                      textAlign: "center"
                    }}
                  >
                    {item["Penalty Value (C)"]}
                  </div>
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba",
                      textAlign: "center"
                    }}
                  >
                    {item["Total Error"]}
                  </div>
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba",
                      textAlign: "center"
                    }}
                  >
                    {item["No. of Optimum Segments"]}
                  </div>

                </div>
              );
            })}
          </div>







          <div class="container">
          <h1 style={{ color: "white", textAlign: "center", margin: "20px" }}>
            Observation{" "}
          </h1>
          <h2 style={{ margin: "20px" }}>
          The Error value increases by a fixed value if the number of segments don’t change with increase in penalty value. But if we vary the penalty value by a large amount, the optimal number of segments changes and that changes the corresponding Error value.
            </h2>
            <h2 style={{ margin: "20px" }}>
            No substantial change was observed in the running time and memory consumption of the code when we change the penalty value for a given set of points.            </h2>
            </div>
            <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            <img
              src={EVP}
              alt="Image"
              style={{
                background: "white",
                alignSelf: "center",
                width: "50%",
                marginBottom: 10
              }}
            />

          </div>

          <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginTop: 20
            }}
          >

                        <img
              src={OVP}
              alt="Image"
              style={{
                background: "white",
                alignSelf: "center",
                width: "50%",
                marginBottom: 10
              }}
            />
          </div>
          <div class="container">   
          <h1 style={{ color: "white", textAlign: "center", margin: "20px" }}>
            Calculating the Time Complexity{" "}
          </h1>
            <h2 style={{ margin: "20px" }}>
            The Complexity Analysis for the common subroutines involved in our implementation of Segmented Least Squares Problem:-
            </h2>
            <div class="row">
              <div
                class="col-3"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Subroutine Name
              </div>
              <div
                class="col-3"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Time Complexity
              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#8c5dba",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Explanation
              </div>
            </div>
            {table.Sheet1.map((item, index) => {
              return (
                <div class="row">
                  <div
                    class="col-3"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba"
                    }}
                  >
                    {item["Subroutine Name"]}
                  </div>
                  <div
                    class="col-3"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba"
                    }}
                  >
                    {item["Time Complexity"]}
                  </div>
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "#8c5dba"
                    }}
                  >
                    {item.Explanation}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Document;
