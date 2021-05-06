import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Cover.css";

export default function Cover() {
  return (
    <div className="home-cover">
      <Carousel showStatus={false} showThumbs={false} dynamicHeight={true} infiniteLoop={true} autoPlay={true} stopOnHover={true}>
        <div>
          <img src={require("./Images/cover-image-1.jpg").default} alt="Cover-1"/>
          <p className="legend">Cover-Image-1</p>
        </div>
        <div>
          <img src={require("./Images/cover-image-2.jpg").default}  alt="Cover-2"/>
          <p className="legend">Cover-Image-2</p>
        </div>
        <div>
          <img src={require("./Images/cover-image-3.jpg").default}  alt="Cover-3"/>
          <p className="legend">Cover-Image-3</p>
        </div>
      </Carousel>
    </div>
  );
}
