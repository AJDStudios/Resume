import React, { useState } from "react";
import { images } from "../Helpers/CarouselData.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel-contiainer">
      <h2>Art for VN</h2>
      <div className="carousel">
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${images[currImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </div>
          <div className="center">
            <h1>{images[currImg].title}</h1>
            <p>{images[currImg].subtitle}</p>
          </div>
          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
      <p>All 3D models are made using daz 3D. Post work is handled with a combination of Gimp, Paint(vanilla and 3D), and PhotoEditor</p>
    </div> 
  );
}

export default Carousel;