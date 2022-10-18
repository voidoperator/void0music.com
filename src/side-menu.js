// Slide site when hamburger clicked

const popMenu = () => {
  const header = document.getElementById("header");
  const body = document.getElementById("body");
  const menu = document.getElementById("side-menu");
  header.classList.toggle("side-menu-toggle");
  body.classList.toggle("side-menu-toggle");
  console.log(menu.style);
  if (menu.style.right === "-20%") {
    menu.style = "right: 0%";
  } else {
    menu.style = "right: -20%";
  }
};
