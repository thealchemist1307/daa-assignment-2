import React from "react";
import styled from "styled-components";
import Slider from "infinite-react-carousel";
import StudentCard from "./StudentCard";
class StudentCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      student: [
        {
          name: "Deepak George",
          workedOn: "",
          img: ""
        },
        {
          name: "Nishit Chouhan",
          workedOn: "",
          img: ""
        },
        {
          name: "Shivang Singh",
          workedOn: "",
          img: ""
        },

        {
          name: "Shivank Thakur",
          workedOn: "",
          img: ""
        }
      ]
    };
  }

  render() {
    const settings = {
      autoplay: false,
      arrows: true
    };
    return (
      <div style={{marginTop:"60px",borderStyle:'solid',borderTopWidth:'4px',borderTopColor:'#a756bb'}}>
        {/* <span style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          Group Members
        </span> */}
        <Slider {...settings}>
          {this.state.student.map((item, index) => {
            return <StudentCard item={item} key={index} />;
          })}
        </Slider>
      </div>
    );
  }
}

export default StudentCarousel;
