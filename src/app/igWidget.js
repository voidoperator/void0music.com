// IG API Widget
import { token, testToken, userId, userName } from './secretTokens.js';
import { fillSideMenu, fillMainCarousel } from './igWidgetHelper.js';

const baseUrl = 'https://graph.instagram.com';
const feedEndpoint =
  'media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&access_token=';

export const feed = window.addEventListener('DOMContentLoaded', () => {
  const urlToFetch = `${baseUrl}/${userId}/${feedEndpoint}${testToken}`;
  const feedGrab = async () => {
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        const feed = jsonResponse.data;
        return feed;
      }
    } catch (error) {
      console.log(error);
    }
  };
  feedGrab().then(fillSideMenu);
  feedGrab().then(fillMainCarousel);
});
