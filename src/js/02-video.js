import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

const videoLastDuration = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(videoLastDuration, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
