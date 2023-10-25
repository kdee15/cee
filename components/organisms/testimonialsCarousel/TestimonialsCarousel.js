import Slider from "react-slick";
import TestimonialCarouselCard from "../../molecules/testimonialCarouselCard/TestimonialCarouselCard";
import classes from "./TestimonialsCarousel.module.scss";

export default function TestimonialsCarousel({ contentModule }) {
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

  return (
    <div className={`${classes.oCarouselTestimonials}`}>
      <Slider {...settings}>
        {contentModule.fields.cards?.map((card) => {
          return <TestimonialCarouselCard key={card.id} {...card} />;
        })}
      </Slider>
      <style global jsx>{`
        .slick-slider {
          max-width: 1920px;
          margin: 0 auto;
          overflow: hidden;
        }
        .oCarouselTestimonials .slick-track {
          overflow: auto;
          display: flex !important;
        }
        .oCarouselTestimonials .slick-slide {
          transform: scale(0.9);
          transition: 0.3s;
          display: block;
          height: auto;
        }
        .oCarouselTestimonials .slick-slide > div {
          height: 100%;
        }
        .slick-slide.slick-center {
          transform: scale(1);
          transition: 0.3s;
        }
        .slick-slider button {
          position: absolute;
        }
        .oCarouselTestimonials .slick-dots {
          list-style-type: none;
          padding: 0;
          margin: 30px 10% 0;
          display: block;
          text-align: center;
        }
        .slick-dots li {
          display: inline-block;
          background-color: #dfe1e2;
          width: 10px;
          height: 10px;
          border-radius: 10px;
          margin-right: 5px;
        }
        .slick-dots li:last-child {
          margin-right: 0;
        }
        .oCarouselTestimonials .slick-dots li.slick-active {
          background-color: #ff7039;
        }
        .slick-dots li button {
          opacity: 0;
        }
        .slick-arrow {
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          border: 0;
          background-color: transparent;
          text-indent: 400px;
          overflow: hidden;
          width: 50px;
          background-position: center;
          background-repeat: no-repeat;
        }
        .slick-arrow.slick-next {
          right: 2%;
          background-image: url("./images/icon-arrow-right.svg");
        }
        .slick-arrow.slick-prev {
          left: 2%;
          background-image: url("./images/icon-arrow-left.svg");
        }
      `}</style>
    </div>
  );
}
