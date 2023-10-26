import React from "react";
import Slider from "react-slick";
import classes from "./ImageCarousel.module.scss";

function ImageCarousel({ contentModule }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  console.log("carra", contentModule);

  return (
    <Slider {...settings}>
      {contentModule.map((item, index) => (
        <figure key={index} className={`${classes.mCarouselImage}`}>
          <div
            className={`${classes.aImage}`}
            style={{
              backgroundImage: `url(http:${item.fields.file.url})`,
            }}
          ></div>
        </figure>
      ))}
    </Slider>
  );
}

export default ImageCarousel;
