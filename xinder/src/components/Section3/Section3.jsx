import React from "react";
import "./Section3.scss";  

const artData = [
  { img: "src/assets/art1.jpg", category: "Pottery", title: "Vases Family" },
  { img: "src/assets/art2.jpg", category: "Oil Painting", title: "Camel Portrait" },
  { img: "src/assets/art3.jpg", category: "Abstract Painting", title: "Euforia " },
  { img: "src/assets/art4.jpg", category: "Object Design", title: "Classic Watch" },
  { img: "src/assets/art5.jpg", category: "Sculpture", title: "White Angel" },
];

const Section3 = () => {
  return (
    <section className="Feature-art">
      <div className="container">
        <div className="feature-text d-flex justify-content-between align-items-center">
          <h4>Featured art categories</h4>
          <div>
            <a href="#">View All Categories</a>
            <img src="src/assets/arrow-right.svg" alt="Arrow Right" />
          </div>
        </div>
        <div className="art d-flex justify-content-between">
          {artData.map((art, index) => (
            <div key={index} className="art-img">
              <img src={art.img} alt={art.title} />
              <span>{art.category}</span>
              <h6>{art.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
