// Gradient NavBar on scroll

"use strict";

const navBar = document.getElementById("navbar-background");

window.onscroll = () => {
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navBar.classList.add("nav-scroll");
    navBar.classList.remove("nav-top");
  } else {
    navBar.classList.add("nav-top");
    navBar.classList.remove("nav-scroll");
  }
};

// Copy contact email to clipboard

const copyBooking = () => {
  const copyText = "booking@void0music.com";
  navigator.clipboard.writeText(copyText);
};

const copyMgmt = () => {
  const copyText = "mgmt@void0music.com";
  navigator.clipboard.writeText(copyText);
};

const copyOperator = () => {
  const copyText = "operator@void0music.com";
  navigator.clipboard.writeText(copyText);
};

const copyPromo = () => {
  const copyText = "promo@void0music.com";
  navigator.clipboard.writeText(copyText);
};
