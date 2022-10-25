// Play/Pause video with button

const videoSrc = document.getElementsByTagName('video')[0];
const ppButton = document.getElementById('control-btn');
const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (isVideoPlaying(videoSrc)) {
      return;
    } else {
      videoSrc.play();
    };
  }, 3000)
})

ppButton.addEventListener('click', () => {
  if (isVideoPlaying(videoSrc)) {
    videoSrc.pause();
    return;
  };
  if (!isVideoPlaying(videoSrc)) {
    videoSrc.play();
    return;
  };
});
