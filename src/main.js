import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const name = document.getElementById("vanta-bg");
const typingText = document.querySelector("#typing-text");
const navBar = document.querySelector("#nav-bar");
const form = document.querySelector("#email-form");

FOG({
  el: name,
  THREE: THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0x707070,
  midtoneColor: 0x434343,
  lowlightColor: 0x0,
  baseColor: 0x0,
  blurFactor: 0.8,
});

const names = [
  "CS Student",
  "Problem Solver",
  "Tech Enthusiast",
  "Web Developer",
];

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    typeText(typingText, 200, names[0], 1000);
  }, 2500);

  const loadingScreen = document.querySelector("#loader");
  loadingScreen.style.display = "none";

  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.classList.add("active-item");
  });

  const mainName = document.querySelector(".main-name");
  mainName.classList.add("main-name-active");

  const introContainer = document.querySelector(".intro-container");
  introContainer.classList.add("intro-container-active");

  const arrow = document.querySelector(".down-arrow");
  arrow.classList.add("down-arrow-active");

  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    const leftCard = project.querySelector(".left-card");
    const rightCard = project.querySelector(".right-card");
    rightCard.addEventListener("click", () => {
      leftCard.classList.add("animate-shuffleLeft");
      leftCard.classList.toggle("opacity-60");
      setTimeout(() => {
        leftCard.classList.toggle("z-10");
      }, 500);
      setTimeout(() => {
        leftCard.classList.remove("animate-shuffleLeft");
      }, 1000);
      rightCard.classList.add("animate-shuffleRight");
      setTimeout(() => {
        rightCard.classList.toggle("z-10");
      }, 500);
      rightCard.classList.toggle("opacity-60");
      setTimeout(() => {
        rightCard.classList.remove("animate-shuffleRight");
      }, 1000);
    });
    leftCard.addEventListener("click", () => {
      leftCard.classList.add("animate-shuffleLeft");
      leftCard.classList.toggle("opacity-60");
      setTimeout(() => {
        leftCard.classList.toggle("z-10");
      }, 500);
      setTimeout(() => {
        leftCard.classList.remove("animate-shuffleLeft");
      }, 1000);
      rightCard.classList.add("animate-shuffleRight");
      setTimeout(() => {
        rightCard.classList.toggle("z-10");
      }, 500);
      rightCard.classList.toggle("opacity-60");
      setTimeout(() => {
        rightCard.classList.remove("animate-shuffleRight");
      }, 1000);
    });
  });
});

let titleIndex = 0;
function typeText(element, speed, str, delay) {
  if (titleIndex >= names.length) {
    titleIndex = 0;
  }
  str = names[titleIndex];
  titleIndex++;
  const chars = str.split("");
  let i = 0;
  element.textContent = "";
  const interval = setInterval(() => {
    if (element.textContent.length < chars.length) {
      element.textContent += chars[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        deleteText(element, speed - 140, str, delay);
      }, delay);
    }
  }, speed);
}
function deleteText(element, speed, str, delay) {
  let chars = str.split("");
  const interval = setInterval(() => {
    if (element.textContent.length > 0) {
      element.textContent = chars.slice(0, -1).join("");
      chars = chars.slice(0, -1);
    } else {
      clearInterval(interval);
      setTimeout(() => {
        typeText(element, speed + 140, str, delay);
      }, delay);
    }
  }, speed);
}

function debounce(callback, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}
function handleScroll() {
  if (window.scrollY > 0) {
    navBar.classList.add("bg-main", "backdrop-blur-md", "bg-opacity-90");
  } else {
    navBar.classList.remove("bg-main", "backdrop-blur-md", "bg-opacity-90");
  }
}
function elementInView(e) {
  const rect = e.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", debounce(handleScroll, 25));
