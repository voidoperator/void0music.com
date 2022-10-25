const slidesContainer = document.getElementsByClassName("main-carousel-wrapper")[0];
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", (event) => {
    const slideWidth = slidesContainer.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
  });

prevButton.addEventListener("click", () => {
const slideWidth = slidesContainer.clientWidth;
slidesContainer.scrollLeft -= slideWidth;
});