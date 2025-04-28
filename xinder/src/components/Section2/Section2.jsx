import React from "react";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import "./Section2.scss";

const Section2 = () => {
  return (
    <section className="company-logo">
      <div className="container d-flex justify-content-evenly logo-img">
        <div><img src={logo1} alt="Logo 1" /></div>
        <div><img src={logo2} alt="Logo 2" /></div>
        <div><img src={logo3} alt="Logo 3" /></div>
        <div><img src={logo4} alt="Logo 4" /></div>
        <div><img src={logo5} alt="Logo 5" /></div>
      </div>
    </section>
  );
};

export default Section2;
