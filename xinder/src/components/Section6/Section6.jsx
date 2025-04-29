import React from "react";
import "./Section6.scss";
import Explore from "../ui/Button/Explore";

const Section6 = () => {
  return (
    <section className="Solutions">
      <div className="container">
        <div className="row solution-row">
          <div className="col-lg-6 col-sm-12">
            <h2>Best solutions for your demanding collection</h2>
            <p>
              Odio vulputate cras vel lacinia turpis volutpat adipiscing.
              Sollicitudin at velit, blandit tempus nunc in.
            </p>
            <ul>
              <li>
                <img src="src/assets/check.svg" alt="" />
                Interdum volutpat turpis malesuada ac turpis.
              </li>
              <li>
                <img src="src/assets/check.svg" alt="" />
                Tortor ipsum pretium quis nunc.
              </li>
              <li>
                <img src="src/assets/check.svg" alt="" />
                Vitae odio a id purus in.
              </li>
            </ul>
            {/* <button>Explore Xinder</button> */}
            <Explore/>
          </div>
          <div className="col-lg-6 col-sm-12 solution-img">
            <img src="src/assets/Col.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
