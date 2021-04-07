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
          workedOn: "Founder at Shauryasexual",
          img: ""
        },
        {
          name: "Nishit Chouhan",
          workedOn: "Founder at Shauryasexual",
          img: ""
        },
        {
          name: "Shivang Singh",
          workedOn: "Founder at Shauryasexual",
          img: ""
        },

        {
          name: "Shivank Thakur",
          workedOn: "Founder at Shauryasexual",
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
      <div>
        <span style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          Group Members
        </span>
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
