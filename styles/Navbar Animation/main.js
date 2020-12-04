const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
  "linear-gradient(to right, #333333, #dd1818)",
  "linear-gradient(to right, #a8c0ff, #3f2b96)",
  "linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)",
];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
        bubble.style.setProperty("left", `${directions.left}px`);
        bubble.style.setProperty("top", `${directions.top}px`);
        bubble.style.setProperty("height", `${directions.height}px`);
        bubble.style.setProperty("width", `${directions.width}px`);
        bubble.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
