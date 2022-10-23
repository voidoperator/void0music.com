// Twitter iFrame window injection

const injectIframe = window.addEventListener("DOMContentLoaded", () => {
  // setup
  const origin = window.location.origin;
  const urlUriEncoded = encodeURIComponent(origin);
  const sessionId = Math.round(Math.random() * 1000000000000000);
  const iframeUrl = `https://syndication.twitter.com/srv/timeline-profile/screen-name/void0music?dnt=true&embedId=twitter-widget-0&frame=false&hideBorder=true&hideFooter=false&hideHeader=false&hideScrollBar=true&lang=en&maxHeight=400px&origin=${urlUriEncoded}&sessionId=${sessionId}&showHeader=true&showReplies=false&theme=dark&transparent=false&widgetsVersion=1c23387b1f70c%3A1664388199485`;
  const iframeNode = document.createElement("iframe");
  iframeNode.id = "twitter-widget-footer";
  iframeNode.scrolling = "no";
  iframeNode.frameBorder = "0";
  iframeNode.allowTransparency = "true";
  iframeNode.allowFullscreen = "true";
  iframeNode.classList.add = "twitter-widget-iframe";
  iframeNode.title = "void(0) Twitter Timeline";
  iframeNode.src = iframeUrl;

  // append iframe to footer
  const twitterWrapper = document.getElementsByClassName("tweet-wrapper")[0];
  twitterWrapper.appendChild(iframeNode);
});
