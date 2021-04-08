import React from "react";
import styled from "styled-components";
import JXGBoard from "jsxgraph-react-js";

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logicJS = (b1) => {
    var coords = this.props.points;


    b1.suspendUpdate();
    for (var i = 0; i < coords.length; i++) {
        var p1 = b1.create("point", [coords[i].x, coords[i].y], {
          size: 2,
          name: ""
        });


      
    }

    var contour = this.props.segments;
    for (var i = 0; i < contour.length; i++) {
      console.log("visualize")
      var p1 = b1.create("point", [contour[i].x1, contour[i].y1], {
        size: 0,
        name: ""
      });
      var p2 = b1.create("point", [contour[i].x2, contour[i].y2], {
        size: 0,
        name: ""
      });
      var li = b1.create("line", [p1, p2], {
        straightFirst: false,
        straightLast: false,
        strokeColor: "green",
        strokeWidth: 2
      });
    }

    b1.unsuspendUpdate();
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{this.props.title} </h1>
        <JXGBoard
          logic={this.logicJS}
          boardAttributes={{
            axis: true,
            boundingbox: [-12, 10, 12, -10],
            zoom: {
              factorX: 1.25,
              factorY: 1.25,
              wheel: true,
              needshift: true,
              eps: 0.1
            }
          }}
          style={{
            border: "3px solid #8c5dba",
            height: "1000px",
            width: "fill",
            fontSize: "30px"
          }}
        />
      </div>
    );
  }
}

export default Visualization;
