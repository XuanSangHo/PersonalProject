const card = document.querySelector(".card");
const container = document.querySelector(".container");
//  Item
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".infor h3");
const sizes = document.querySelector(".sizes");
const act = document.querySelector(".sizes button");

//  Moving Animation Event
container.addEventListener("mouseover", (e) => {
  //   console.log(e.pageX);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// Animation In
container.addEventListener("mouseover", (e) => {
  card.style.transition = "all 1s eaes";
  // Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  purchase.style.transform = "translateZ(125px)";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(75px)";
});
// Animation Out

container.addEventListener("mouseout", (e) => {
  card.style.transition = "all 1s eaes";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //   Popout
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  purchase.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});
