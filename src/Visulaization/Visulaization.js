import React from "react";
import styled from "styled-components";
import JXGBoard from "jsxgraph-react-js";

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logicJS = (b1) => {
    var coords = this.props.coords;
    var coord = coords[0];

    b1.suspendUpdate();
    for (var i = 0; i < coords.length; i++) {
      var p1 = b1.create("point", [coords[i].x1, coords[i].y1], { size: 0 });
      var p2 = b1.create("point", [coords[i].x1, coords[i].y2], { size: 0 });
      var p3 = b1.create("point", [coords[i].x2, coords[i].y2], { size: 0 });
      var p4 = b1.create("point", [coords[i].x2, coords[i].y1], { size: 0 });
      var poly = b1.create("polygon", [p1, p2, p3, p4], {
        borders: { strokeColor: "black" }
      });
    }

    b1.unsuspendUpdate();
  };

  render() {
    return (
      <JXGBoard
        logic={this.logicJS}
        boardAttributes={{ axis: true, boundingbox: [-12, 10, 12, -10] }}
        style={{
          border: "3px solid tomato",
          height: "1000px",
          width: "fill"
        }}
      />
    );
  }
}

export default Visualization;
