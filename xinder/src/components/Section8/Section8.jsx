import React, { useEffect } from "react";
import "./Section8.scss";
import Explore from "../ui/Button/Explore";

const slider3Data = [
  {
    img: "src/assets/slider3-img1.png",
    userImg: "src/assets/silder3-user1.png",
    title: "Colorful Face",
  },
  {
    img: "src/assets/slider3-img1.png",
    userImg: "src/assets/silder3-user1.png",
    title: "Colorful Face",
  },
  {
    img: "src/assets/slider3-img1.png",
    userImg: "src/assets/silder3-user1.png",
    title: "Colorful Face",
  },
  {
    img: "src/assets/slider3-img1.png",
    userImg: "src/assets/silder3-user1.png",
    title: "Colorful Face",
  },
];

const Section8 = () => {
  useEffect(() => {
    $(".slick3").slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      arrows: true,
      autoplay: false,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            variableWidth: true,
            centerMode: true,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            variableWidth: true,
            centerMode: true,
            arrows: false,
          },
        },
      ],
    });
    return () => {
        $('.slick3').slick('unslick');
      };
  }, []);

  return (
    <section className="slider3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="slider3-text">
              <h2>Be incredible</h2>
              <p>
                Nec ultricies eget placerat ultricies eleifend dignissim aliquet
                sapien. Senectus vestibulum, eget erat at et congue cursus
                pretium.
              </p>
              {/* <button>Explore Xinder</button> */}
              <Explore/>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="slick3-wrapper">
              <div className="slick3">
                {slider3Data.map((item, index) => (
                  <div className="slick3-card" key={index}>
                    <div className="slider3-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="slick3-text">
                      <img src={item.userImg} alt="" />
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
