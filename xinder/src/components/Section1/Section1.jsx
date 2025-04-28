import React from "react";
import "./Section1.scss";
import heroImg from "../../assets/hero-img.png";

const Section1 = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="row hero-row align-items-center">
          <div className="col-lg-7 col-sm-12 left">
            <div>
              <h1>Search the work of the best artists</h1>
            </div>
            <div>
              <form>
                <input
                  type="text"
                  placeholder="search for artists, work name, or category"
                />
                <button type="submit">Search</button>
              </form>
            </div>
            <div className="search-link">
              <a href="#">Oil Painting</a>
              <a href="#">Abstract Art</a>
              <a href="#">Sculpture</a>
              <a href="#">Art Deco</a>
              <a href="#">Pop Art</a>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 right-img">
            <img src={heroImg} alt="Hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
