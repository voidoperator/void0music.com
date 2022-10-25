// Autoplay iFrame Hero Banner

  const tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'sRlyruPl64Q',
      playerVars: {
        playlist: 'sRlyruPl64Q',
        loop: 1,
        autoplay: 0,
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
    event.target.setVolume(0);
    event.target.playVideo();
  }

  let done = false;
  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 400000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
