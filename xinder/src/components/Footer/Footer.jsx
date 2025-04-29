import React from "react";
import './Footer.scss'

const footerData = [
  {
    category: "Categories",
    imgSrc: "src/assets/footer1.svg",
    items: [
      "User Interface",
      "User Experience",
      "Digital Media",
      "Lifestyle",
      "Programming",
      "Animation",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer2.svg",
    items: [
      "Pricing",
      "Overview",
      "Browse",
      "Accessibility",
      "Five",
      "Changelog",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer3.svg",
    items: [
      "Brainstorming",
      "Ideation",
      "Wireframing",
      "Research",
      "Design",
      "Concept",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer4.svg",
    items: [
      "Help Center",
      "Blog",
      "Tutorials",
      "FAQs",
      "Community",
      "Events",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer5.svg",
    items: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
      "Webinar",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer6.svg",
    items: [
      "About",
      "Press",
      "Events",
      "Careers",
      "Customers",
      "Partners",
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer-row" id="footer-container">
          {footerData.map((section, index) => (
            <div key={index} className="col-lg-2">
              <ul>
                <li>
                  <img src={section.imgSrc} alt="" />
                  {section.category}
                </li>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center">
          <span>@ 2023 Xinder, Inc. All rights reserved.</span>
          <div className="social-logo d-flex">
            <div>
              <img src="src/assets/youtube.svg" alt="" title="Youtube" />
            </div>
            <div>
              <img src="src/assets/facebook.svg" alt="" title="Facebook" />
            </div>
            <div>
              <img src="src/assets/twitter.svg" alt="" title="Twitter" />
            </div>
            <div>
              <img src="src/assets/instagram.svg" alt="" title="Instagram" />
            </div>
            <div>
              <img src="src/assets/linkedin.svg" alt="" title="Linkedin" />
            </div>
          </div>
        </div>
        <div>
          <p className="footer-p">
            In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum,
            non. Tellus mattis enim volutpat habitasse. Semper posuere lectus
            consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam
            eget volutpat vestibulum elit. Blandit aliquet bibendum pellentesque
            turpis id penatibus faucibus id nunc. Aenean rhoncus, erat
            pellentesque eu. Quis morbi condimentum phasellus in ultricies eu
            amet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
