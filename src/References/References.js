import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";
let refer = [
  {
    name: "Code and Algorithm Implementation",
    comp: [
      {
        name: "Princeton - Dynamic Programming",
        url: "https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/06DynamicProgrammingI.pdf "
      },
      {
        name: "People - Segmented Least Square",
        url: "https://people.cs.umass.edu/~sheldon/teaching/mhc/cs312/2013sp/Slides/Slides15%20-%20Segmented%20Least%20Squares.pdf "
      },
      {
        name: "Homes - Lec 25",
        url:
          "https://homes.cs.washington.edu/~jrl/teaching/cse312au10/lec25.pdf "
      },
      {
        name: "Comparator Class in C++ with Examples - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/comparator-class-in-c-with-examples/"
      },
      {
        name: "CSV file management using C++ - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/csv-file-management-using-c/"
      },
      {
        name: "Debugging in VS Code",
        url: "https://code.visualstudio.com/docs/editor/debugging"
      }
    ]
  },
  {
    name: "Documentation",
    comp: [
      {
        name: "Doxygen: Main Page",
        url: "https://www.doxygen.nl/index.html"
      }
    ]
  },
  {
    name: "Visualization",
    comp: [
      {
        name: "Matplotlib: Python plotting — Matplotlib 3.3.4 documentation",
        url: "https://matplotlib.org/"
      },
      {
        name: "Getting Started – React (reactjs.org)",
        url: "https://reactjs.org/docs/getting-started.html"
      },
      {
        name: "JSXGraph - JSXGraph (uni-bayreuth.de)",
        url: "https://jsxgraph.uni-bayreuth.de/wp/index.html"
      }
    ]
  }
];
class References extends React.Component {
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
        <h1 style={{ textAlign: "center" }}>References</h1>
        {refer.map((item, index) => {
          return (
            <div
              style={{ marginTop: "20px", marginBottom: "20px" }}
              key={index}
            >
              <h3>{item.name} </h3>
              {item.comp.map((child, ind) => {
                return (
                  <h5 key={ind}>
                    <a  href={child.url}>{child.name}</a>
                  </h5>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default References;
