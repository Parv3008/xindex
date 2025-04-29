import React from "react";
import "./Section9.scss"; 

const artCardData = [
  {
    img: "src/assets/art1.png",
    box: "Featured",
    title: "Wild Horse Event",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    img: "src/assets/art2.png",
    box: "New",
    title: "Great Colors",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    img: "src/assets/art3.png",
    box: "Coming-Soon",
    title: "Happy Father’s Day",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];

const Section9 = () => {
  return (
    <section className="art-section">
      <div className="container">
        <div className="art-text d-flex justify-content-between align-items-center">
          <h4>Art events</h4>
          <a href="#">
            Explore All Events{" "}
            <img src="src/assets/arrow-right.svg" alt="arrow-right" />
          </a>
        </div>
        <div className="row" id="art-cards-container">
          {artCardData.map((item, index) => (
            <div className="col-lg-4 art-card" key={index}>
              <div className="art-card-img">
                <img src={item.img} alt={item.title} />
                <div className={item.box}>{item.box}</div>
              </div>
              <div className="art-card-text">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section9;
