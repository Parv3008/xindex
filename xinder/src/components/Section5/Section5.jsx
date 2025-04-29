import React from "react";
import "./Section5.scss";  
import Services from "../ui/Button/Services";

const servicesData = [
  {
    img: "src/assets/service1.svg",
    title: "Nibh viverra",
  },
  {
    img: "src/assets/service2.svg",
    title: "Cursus amet",
  },
  {
    img: "src/assets/service3.svg",
    title: "Ipsum fermentum",
  },
  {
    img: "src/assets/service4.svg",
    title: "Quisque euismod",
  },
  {
    img: "src/assets/service5.svg",
    title: "Arcu vulputate",
  },
  {
    img: "src/assets/service6.svg",
    title: "Cras auctor",
  },
];

const Section5 = () => {
  return (
    <section className="services">
      <div className="container text-center">
        <h4>Expanding services</h4>
        <div className="services-img d-flex justify-content-between" id="services-container">
          {servicesData.map((service, index) => (
            <div key={index}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
        {/* <button>Find Services</button> */}
        <Services/>
      </div>
    </section>
  );
};

export default Section5;
