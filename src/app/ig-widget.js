// IG API Widget
import { token, testToken, userId, userName } from "./secretTokens.js";

const sideMenu = document.getElementById("ig-feed-wrapper");
const baseUrl = "https://graph.instagram.com";
const feedEndpoint =
  "media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=";

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
            let permalink = feed[i].permalink;
            let newAnchor = document.createElement("a");
            newAnchor.href = permalink;
            newAnchor.target = "_blank";
            let urlToImg = feed[i].media_url;
            let newImg = document.createElement("img");
            newImg.src = urlToImg;
            newAnchor.appendChild(newImg);
            sideMenu.appendChild(newAnchor);
          } else {
            let permalink = feed[i].permalink;
            let newAnchor = document.createElement("a");
            newAnchor.href = permalink;
            newAnchor.target = "_blank";
            let thumbnail = feed[i].thumbnail_url;
            let newImg = document.createElement("img");
            newImg.src = thumbnail;
            newAnchor.appendChild(newImg);
            sideMenu.appendChild(newAnchor);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  feedGrab();
});
