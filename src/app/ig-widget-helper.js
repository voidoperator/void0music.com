// IG Widget Helper functions
export const fillSideMenu = (feed) => {
  const sideMenu = document.getElementsByClassName("ig-feed-wrapper")[0];
  for (let i = 0; i < feed.length - 1; i++) {
    if (feed[i].media_type !== "VIDEO") {
      // Info grabbed from IG API
      let caption = feed[i].caption;
      let permalink = feed[i].permalink;
      let urlToImg = feed[i].media_url;

      // Setting nodes to append
      let overlayContainer = document.createElement("div");
      let wrapper = document.createElement("div");
      let iconOverlay = document.createElement("img");
      let newAnchor = document.createElement("a");
      let newImg = document.createElement("img");

      // Working...
      overlayContainer.classList.add("overlay-container");
      wrapper.classList.add("ig-post-container");
      iconOverlay.src = "./assets/img/social icons/instagram-overlay.png";
      iconOverlay.classList.add("icon-overlay");
      newAnchor.href = permalink;
      newAnchor.target = "_blank";
      newImg.classList.add("ig-post-img");
      newImg.src = urlToImg;
      newImg.title = caption;
      overlayContainer.appendChild(newAnchor);
      wrapper.appendChild(newImg);
      wrapper.appendChild(overlayContainer);
      newAnchor.appendChild(iconOverlay);
      sideMenu.appendChild(wrapper);
    } else {
      // Info grabbed from IG API
      let caption = feed[i].caption;
      let permalink = feed[i].permalink;
      let thumbnail = feed[i].thumbnail_url;

      // Setting nodes to append
      let overlayContainer = document.createElement("div");
      let wrapper = document.createElement("div");
      let iconOverlay = document.createElement("img");
      let newAnchor = document.createElement("a");
      let newImg = document.createElement("img");

      // Working...
      overlayContainer.classList.add("overlay-container");
      wrapper.classList.add("ig-post-container");
      iconOverlay.src = "./assets/img/social icons/instagram-overlay.png";
      iconOverlay.classList.add("icon-overlay");
      newAnchor.href = permalink;
      newAnchor.target = "_blank";
      newImg.classList.add("ig-post-img");
      newImg.src = thumbnail;
      newImg.title = caption;
      overlayContainer.appendChild(newAnchor);
      wrapper.appendChild(newImg);
      wrapper.appendChild(overlayContainer);
      newAnchor.appendChild(iconOverlay);
      sideMenu.appendChild(wrapper);
    }
  }
};

export const fillMainCarousel = (feed) => {
  const mainCarousel = document.getElementsByClassName(
    "main-carousel-wrapper"
  )[0];
  for (let i = 0; i < feed.length - 1; i++) {
    if (feed[i].media_type !== "VIDEO") {
      // Info grabbed from IG API
      let caption = feed[i].caption;
      let permalink = feed[i].permalink;
      let urlToImg = feed[i].media_url;

      // Setting nodes to append
      let overlayContainer = document.createElement("div");
      let wrapper = document.createElement("div");
      let iconOverlay = document.createElement("img");
      let newAnchor = document.createElement("a");
      let newImg = document.createElement("img");

      // Working...
      overlayContainer.classList.add("overlay-container-car");
      wrapper.classList.add("ig-post-container-car");
      iconOverlay.src = "./assets/img/social icons/instagram-overlay.png";
      iconOverlay.classList.add("icon-overlay-car");
      newAnchor.href = permalink;
      newAnchor.target = "_blank";
      newImg.classList.add("ig-post-img-car");
      newImg.src = urlToImg;
      newImg.title = caption;
      overlayContainer.appendChild(newAnchor);
      wrapper.appendChild(newImg);
      wrapper.appendChild(overlayContainer);
      newAnchor.appendChild(iconOverlay);
      mainCarousel.appendChild(wrapper);
    } else {
      // Info grabbed from IG API
      let caption = feed[i].caption;
      let permalink = feed[i].permalink;
      let thumbnail = feed[i].thumbnail_url;

      // Setting nodes to append
      let overlayContainer = document.createElement("div");
      let wrapper = document.createElement("div");
      let iconOverlay = document.createElement("img");
      let newAnchor = document.createElement("a");
      let newImg = document.createElement("img");

      // Working...
      overlayContainer.classList.add("overlay-container-car");
      wrapper.classList.add("ig-post-container-car");
      iconOverlay.src = "./assets/img/social icons/instagram-overlay.png";
      iconOverlay.classList.add("icon-overlay-car");
      newAnchor.href = permalink;
      newAnchor.target = "_blank";
      newImg.classList.add("ig-post-img-car");
      newImg.src = thumbnail;
      newImg.title = caption;
      overlayContainer.appendChild(newAnchor);
      wrapper.appendChild(newImg);
      wrapper.appendChild(overlayContainer);
      newAnchor.appendChild(iconOverlay);
      mainCarousel.appendChild(wrapper);
    }
  }
};
