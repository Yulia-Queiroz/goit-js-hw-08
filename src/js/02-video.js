import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const onPlay = function ({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime !== null) {
  player.setCurrentTime(currentTime);
} else {
  player.setCurrentTime(0);
}
