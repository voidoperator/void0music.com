// Play/Pause video with button

const ppButton = document.getElementById('control-btn');

ppButton.addEventListener('click', () => {
  const playerState = player.getPlayerState();
  if (playerState === 1) {
    player.pauseVideo();
  }
  if (playerState !== 1) {
    player.playVideo();
  }
});
