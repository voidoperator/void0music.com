// Gradient NavBar on scroll

"use strict";

const navBar = document.getElementById("navbar");

window.onscroll = () => {
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navBar.classList.add("nav-scroll");
    navBar.classList.remove("nav-top");
  } else {
    navBar.classList.add("nav-transparent");
    navBar.classList.remove("nav-scroll");
  }
};

// Autoplay iFrame Hero Banner

const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "Kona1lUcxes",
    playerVars: {
      playlist: "Kona1lUcxes",
      loop: 1,
      autoplay: 1,
      controls: 0,
      autohide: 1,
      playsinline: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 400000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
function onPlayerReady(event) {
  event.target.setVolume(0);
  event.target.playVideo();
}

// Play/Pause video with button

const ppButton = document.getElementById("control-btn");

ppButton.addEventListener("click", () => {
  const playerState = player.getPlayerState();
  if (playerState === 1) {
    player.pauseVideo();
  }
  if (playerState === 2) {
    player.playVideo();
  }
});
