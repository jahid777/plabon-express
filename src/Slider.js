import React from "react";
import slider1 from "./image/slider1.jpg";
import slider2 from "./image/slider2.jpg";
import slider3 from "./image/slider3.jpg";
import slider4 from "./image/slider4.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
      data-interval="1500"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item  slider-height active">
          <img
            src={slider1}
            class="d-block w-100 slider-img-height"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item  slider-height">
          <img
            src={slider2}
            class="d-block w-100 slider-img-height"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item  slider-height">
          <img
            src={slider3}
            class="d-block w-100 slider-img-height"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item  slider-height">
          <img
            src={slider4}
            class="d-block w-100 slider-img-height"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
