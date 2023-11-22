import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

// Inicjalizacja odtwarzacza Vimeo
const player = new VimeoPlayer(document.getElementById('vimeo-player'));

// Śledzenie zdarzenia timeupdate z użyciem lodash.throttle
player.on(
  'timeupdate',
  throttle(function (event) {
    // Zapisywanie aktualnego czasu odtwarzania w local storage
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

// Przy przeładowaniu strony, ustaw czas odtwarzania z local storage
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player.setCurrentTime(parseFloat(savedTime));
}

// Dodatkowe zdarzenie, aby obsłużyć ładowanie nowego wideo
player.on('loaded', function () {
  // Przy przeładowaniu strony, ustaw czas odtwarzania z local storage
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime));
  }
});
