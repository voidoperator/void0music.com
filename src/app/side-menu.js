// Slide site when menu icon clicked

"use strict";

const popMenu = () => {
  const menu = document.getElementsByClassName("side-menu")[0];
  const header = document.getElementsByTagName("header")[0];
  const body = document.getElementsByTagName("body")[0];
  const main = document.getElementsByTagName("main")[0];
  const controls = document.getElementsByClassName("controls")[0];
  // const contentArrow = document.getElementsByTagName("a")[8];
  menu.classList.toggle("hidden-menu");
  menu.classList.toggle("visible-menu");
  header.classList.toggle("side-menu-visible");
  header.classList.toggle("side-menu-hidden");
  body.classList.toggle("side-menu-visible");
  body.classList.toggle("side-menu-hidden");
  main.classList.toggle("side-menu-visible");
  main.classList.toggle("side-menu-hidden");
  controls.classList.toggle("hidden");
  // contentArrow.classList.toggle("hidden");
};
