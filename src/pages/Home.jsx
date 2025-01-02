import React from "react";
import "../style/home.css";
import heroImg01 from "../images/hero-img01.jpg";
import heroImg02 from "../images/hero-img02.jpg";
import herovdo from "../images/hero-video.mp4";
import worldImg from "../images/world.png";
import Subtitle from "../shared/Subtitle";

const Home = () => {
  return (
    <div className="hero">
      <div className="main">
        <div className="left">
          <div className="left-content">
            <Subtitle subtitle={"Know Before Your Go"} />
            <img src={worldImg} height={45} alt="" />
          </div>
          <h1>
            Traveling open the door to creating{" "}
            <span style={{ color: "#FE9F40" }}> memories </span>{" "}
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipis icing elit. Quias
            quisquam debitis necessita tibus dolor ibus. Quaerat esse quos vol
            ptatum nesciunt, deserunt distinctio optio ipsam animi rerum.
          </p>
        </div>
        <div className="right">
          <div className="right-content">
            <img src={heroImg01} alt="" />
            <video src={herovdo}></video>
            <img src={heroImg02} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
