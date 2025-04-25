const navItems = [
  { text: "Explore", href: "#" },
  { text: "Solutions", href: "#" },
  { text: "Articles", href: "#" },
  { text: "Sign In", href: "#" },
  { text: "Join Now", href: "#", class: "join" },
];

const navContainer = document.querySelector(".navbar-nav");

navContainer.innerHTML = navItems
  .map(
    (item) => `
  <li class="nav-item">
    <a class="nav-link ${item.class || ""}" href="${item.href}">${item.text}</a>
  </li>
`
  )
  .join("");

  
const artData = [
  { img: "src/assets/art1.jpg", category: "Pottery", title: "Vases Family" },
  { img: "src/assets/art1.jpg", category: "Pottery", title: "Vases Family" },
  { img: "src/assets/art1.jpg", category: "Pottery", title: "Vases Family" },
  { img: "src/assets/art1.jpg", category: "Pottery", title: "Vases Family" },
  { img: "src/assets/art1.jpg", category: "Pottery", title: "Vases Family" },
];

const container = document.getElementById("art-container");

container.innerHTML = artData
  .map(
    (art) => `
    <div class="art-img">
      <img src="${art.img}" alt="">
      <span>${art.category}</span>
      <h6>${art.title}</h6>
    </div>
  `
  )
  .join("");

const sliderData = [
  {
    img: "src/assets/slider1-img1.jpg",
    userImg: "src/assets/slider1-user1.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
  {
    img: "src/assets/slider1-img1.jpg",
    userImg: "src/assets/slider1-user1.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
  {
    img: "src/assets/slider1-img1.jpg",
    userImg: "src/assets/slider1-user1.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
  {
    img: "src/assets/slider1-img1.jpg",
    userImg: "src/assets/slider1-user1.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
  {
    img: "src/assets/slider1-img1.jpg",
    userImg: "src/assets/slider1-user1.jpg",
    title: "Flower Decorations",
    author: "by Melvina Spring",
  },
];

const sliderContainer = document.getElementById("slider-container");

sliderContainer.innerHTML = sliderData
  .map(
    (slide) => `
    <div class="slider-card">
      <div class="slider-card-img">
        <img src="${slide.img}" alt="">
      </div>
      <div class="slider-card-text d-flex">
        <div>
          <img src="${slide.userImg}" alt="">
        </div>
        <div>
          <h5>${slide.title}</h5>
          <h6>${slide.author}</h6>
        </div>
      </div>
    </div>
  `
  )
  .join("");

const servicesData = [
  {
    img: "src/assets/service1.svg",
    title: "Nibh viverra",
  },
  {
    img: "src/assets/service1.svg",
    title: "Nibh viverra",
  },
  {
    img: "src/assets/service1.svg",
    title: "Nibh viverra",
  },
  {
    img: "src/assets/service1.svg",
    title: "Nibh viverra",
  },
  {
    img: "src/assets/service1.svg",
    title: "Nibh viverra",
  },
  {
    img: "src/assets/service1.svg",
    title: "Nibh viverra",
  },
];

const servicesContainer = document.getElementById("services-container");

servicesContainer.innerHTML = servicesData
  .map(
    (service) => `
  <div>
    <img src="${service.img}" alt="">
    <h3>${service.title}</h3>
  </div>
`
  )
  .join("");

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

const slider2Container = document.getElementById("slider2-container");

slider2Container.innerHTML = slider2Data
  .map(
    (item) => `
  <div class="slider2-card d-flex justify-content-between align-items-center">
    <div class="video-container">
      <video src="${item.videoSrc}" class="custom-video"></video>
      <div class="custom-play-button"></div>
    </div>
    <div>
      <h6>${item.name}, ${item.role} <span>${item.company}</span></h6>
      <p>“${item.quote}”</p>
    </div>
  </div>
`
  )
  .join("");

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

const slider3Container = document.getElementById("slider3-container");

slider3Container.innerHTML = slider3Data
  .map(
    (item) => `
  <div class="slick3-card">
    <div class="slider3-img">
      <img src="${item.img}" alt="">
    </div>
    <div class="slick3-text">
      <img src="${item.userImg}" alt="">
      <span>${item.title}</span>
    </div>
  </div>
`
  )
  .join("");

const artCardData = [
  {
    img: "src/assets/art1.png",
    title: "Wild Horse Event",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    img: "src/assets/art1.png",
    title: "Wild Horse Event",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    img: "src/assets/art1.png",
    title: "Wild Horse Event",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];

const artCardsContainer = document.getElementById("art-cards-container");

artCardsContainer.innerHTML = artCardData
  .map(
    (item) => `
  <div class="col-lg-4 art-card">
    <div class="art-card-img">
      <img src="${item.img}" alt="">
      <div class="feature">Featured</div>
    </div>
    <div class="art-card-text">
      <h6>${item.title}</h6>
      <p>${item.description}</p>
    </div>
  </div>
`
  )
  .join("");

const footerData = [
  {
    category: "Categories",
    imgSrc: "src/assets/footer1.svg",
    items: [
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer1.svg",
    items: [
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer1.svg",
    items: [
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer1.svg",
    items: [
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer1.svg",
    items: [
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
    ],
  },
  {
    category: "Categories",
    imgSrc: "src/assets/footer1.svg",
    items: [
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
      "User Interface",
    ],
  },
];

const footerContainer = document.getElementById("footer-container");

footerContainer.innerHTML = footerData
  .map(
    (section) => `
  <div class="col-lg-2">
    <ul>
      <li><img src="${section.imgSrc}" alt="">${section.category}</li>
      ${section.items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  </div>
`
  )
  .join("");
