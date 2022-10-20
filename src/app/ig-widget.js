// IG API Widget
import { token, testToken, userId, userName } from "./secretTokens.js";

const sideMenu = document.getElementsByClassName("ig-feed-wrapper")[0];
const baseUrl = "https://graph.instagram.com";
const feedEndpoint =
  "media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&access_token=";

window.addEventListener("DOMContentLoaded", () => {
  const urlToFetch = `${baseUrl}/${userId}/${feedEndpoint}${testToken}`;
  const feedGrab = async () => {
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        const feed = jsonResponse.data;
        for (let i = 0; i < feed.length - 1; i++) {
          if (feed[i].media_type !== "VIDEO") {
            let caption = feed[i].caption;
            let permalink = feed[i].permalink;
            let urlToImg = feed[i].media_url;
            let overlayContainer = document.createElement("div");
            let wrapper = document.createElement("div");
            let iconOverlay = document.createElement("img");
            let newAnchor = document.createElement("a");
            let newImg = document.createElement("img");
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
            let caption = feed[i].caption;
            let permalink = feed[i].permalink;
            let thumbnail = feed[i].thumbnail_url;
            let overlayContainer = document.createElement("div");
            let wrapper = document.createElement("div");
            let iconOverlay = document.createElement("img");
            let newAnchor = document.createElement("a");
            let newImg = document.createElement("img");
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
      }
    } catch (error) {
      console.log(error);
    }
  };
  feedGrab();
});
