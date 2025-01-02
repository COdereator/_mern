import React from "react";
import "../style/home.css";
import heroImg01 from "../images/hero-img01.jpg";
import heroImg02 from "../images/hero-img02.jpg";
import herovdo from "../images/hero-video.mp4";
import worldImg from "../images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";

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
        <div className="mainright">
          <div className="right-content">
            <img src={heroImg01} alt="" />
            <video src={herovdo} style={{position:'relative',top:'25px'}} autoPlay loop muted></video>
            <img src={heroImg02} style={{position:'relative',top:'55px'}} alt="" />
          </div>
        </div>
      </div>
      <SearchBar/>
      <div className="section">
        <div className="section1">
          <h5>What we serve</h5>
          <h2>We offer our best services</h2>
        </div>
        <ServiceList/>
      </div>
    </div>
  );
};

export default Home;
