import React from "react";
import "./Section10.scss";
import Join from "../ui/Button/Join";

const Section10 = () => {
  return (
    <section className="join-now">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-sm-12 join-text">
            <h2>Add more masterpieces to your growing collection</h2>
            {/* <button>Join Now</button> */}
            <Join/>
          </div>
          <div className="col-lg-5 col-sm-12 join-img">
            <img src="src/assets/join-img.png" alt="Join Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
