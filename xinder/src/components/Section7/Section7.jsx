import React, { useEffect } from "react";
import "./Section7.scss";

const slider2Data = [
  {
    videoSrc: "src/assets/video.mp4",
    name: "Marie Poirot",
    role: "Co-Founder",
    company: "Art-Gal",
    quote:
      "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.",
  },
  {
    videoSrc: "src/assets/video.mp4",
    name: "Marie Poirot",
    role: "Co-Founder",
    company: "Art-Gal",
    quote:
      "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.",
  },
];

const Section7 = () => {
  useEffect(() => {
    $(".slick2").slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
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
        $('.slick2').slick('unslick');
      };
  }, []);

  return (
    <section className="slider2">
      <div className="container">
        <div className="slick2-wrapper">
          <div className="slick2">
            {slider2Data.map((item, index) => (
              <div className="slider2-card d-flex align-items-center" key={index}>
                <div className="video-container">
                  <video src={item.videoSrc} className="custom-video" />
                  <div className="custom-play-button"></div>
                </div>
                <div>
                  <h6>
                    {item.name}, {item.role} <span>{item.company}</span>
                  </h6>
                  <p>“{item.quote}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
