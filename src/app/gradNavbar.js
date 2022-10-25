// Gradient NavBar on scroll

const navBar = document.getElementById('navbar-background');

window.onscroll = () => {
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navBar.classList.add('nav-scroll');
    navBar.classList.remove('nav-top');
  } else {
    navBar.classList.add('nav-top');
    navBar.classList.remove('nav-scroll');
  }
};