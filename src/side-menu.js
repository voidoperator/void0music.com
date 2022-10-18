// Slide site when menu icon clicked

"use strict";

const popMenu = () => {
  const header = document.getElementById("header");
  const body = document.getElementById("body");
  const menu = document.getElementsByClassName("side-menu")[0];
  const menuToggle = menu.classList[1];
  header.classList.toggle("side-menu-toggle");
  body.classList.toggle("side-menu-toggle");
  if (menuToggle === "hidden-menu") {
    menu.classList.remove("hidden-menu");
    menu.classList.add("visible-menu");
    return;
  }
  if (menuToggle === "visible-menu") {
    menu.classList.remove("visible-menu");
    menu.classList.add("hidden-menu");
    return;
  }
};
