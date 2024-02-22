import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});


const playerTimeUpdate = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const timeUpdate = throttle(playerTimeUpdate, 1000);

player.on('timeupdate', timeUpdate);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));


