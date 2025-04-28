import React, { useEffect } from "react";
import "./Section4.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    img: "src/assets/slider1-img1.jpg",
    userImg: "src/assets/slider1-user1.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
  {
    img: "src/assets/slider1-img2.jpg",
    userImg: "src/assets/slider1-user2.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
  {
    img: "src/assets/slider1-img3.jpg",
    userImg: "src/assets/slider1-user3.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
  {
    img: "src/assets/slider1-img4.jpg",
    userImg: "src/assets/slider1-user4.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
  {
    img: "src/assets/slider1-img1.jpg",
    userImg: "src/assets/slider1-user5.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
];

const Section4 = () => {
  useEffect(() => {
    $('.slick1').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    return () => {
      $('.slick1').slick('unslick');
    };
  }, []);

  return (
    <section className="slider1">
      <div className="container">
        <div className="masterpiece-text d-flex justify-content-between align-items-center">
          <h4>Latest masterpieces</h4>
          <div>
            <a href="#">Discover More Masterpieces</a>
            <img src="src/assets/arrow-right.svg" alt="Arrow" />
          </div>
        </div>
      </div>
      <div className="slick1-wrapper">
        <div className="slick1" id="slider-container">
          {sliderData.map((slide, index) => (
            <div className="slider-card" key={index}>
              <div className="slider-card-img">
                <img src={slide.img} alt={`Slider image ${index + 1}`} />
              </div>
              <div className="slider-card-text d-flex">
                <div>
                  <img src={slide.userImg} alt={`User ${index + 1}`} />
                </div>
                <div>
                  <h5>{slide.title}</h5>
                  <h6>{slide.author}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
