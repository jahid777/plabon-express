import React from "react";
import Navbar from "./Navbar";
import video1 from "./Shipping/1. Transport-1.m4v";
import video2 from "./Shipping/2. Private Car-1.m4v";
import video3 from "./Shipping/3. Ambulance-1.m4v";
import video4 from "./Shipping/4. Cargo-1.m4v";
// import video5 from "./Shipping/5. Shipping-1.m4v";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginBottom: "150px" }}>
        <h1
          style={{ color: "#5F2DA0", fontWeight: "bold", textAlign: "center" }}
        >
          Our Services
        </h1>

        <div
          className="main-1st d-flex container mt-5"
          style={{ justifyContent: "space-around" }}
        >
          <div>
            <video className="video-size" controls muted loop preload>
              <source src={video1} type="video/mp4"></source>
            </video>
          </div>

          <div>
            <video className="video-size" controls muted loop preload>
              <source src={video2} type="video/mp4"></source>
            </video>
          </div>
        </div>

        <div
          className="main-2nd d-flex container mt-2"
          style={{ justifyContent: "space-around" }}
        >
          <div>
            <video className="video-size" controls muted loop preload>
              <source src={video3} type="video/mp4"></source>
            </video>
          </div>

          <div>
            <video className="video-size" controls muted loop preload>
              <source src={video4} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
