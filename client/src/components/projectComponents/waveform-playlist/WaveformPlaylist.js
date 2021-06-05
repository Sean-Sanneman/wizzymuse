import WaveformPlaylist from 'waveform-playlist';
import vocalsEx from '../../../assets/media/audio/Vocals30.mp3';
import bassDrumsEx from '../../../assets/media/audio/BassDrums30.mp3';

var playlist = WaveformPlaylist({
  samplesPerPixel: 3000,
  mono: true,
  waveHeight: 70,
  container: document.getElementById('playlist'),
  state: 'cursor',
  colors: {
    waveOutlineColor: '#E0EFF1',
    timeColor: 'grey',
    fadeColor: 'black',
  },
  controls: {
    show: false,
    width: 150,
  },
  zoomLevels: [500, 1000, 3000, 5000],
});

playlist
  .load([
    {
      src: '../../../assets/media/audio/Vocals30.mp3',
      name: 'Vocals',
      gain: 0.5,
    },
    {
      src: '../../../assets/media/audio/BassDrums30.mp3',
      name: 'Drums',
      start: 8.5,
      fadeIn: {
        duration: 0.5,
      },
      fadeOut: {
        shape: 'logarithmic',
        duration: 0.5,
      },
    },
    {
      src: '../../../assets/media/audio/Guitar30.mp3',
      name: 'Guitar',
      start: 23.5,
      fadeOut: {
        shape: 'linear',
        duration: 0.5,
      },
      cuein: 15,
    },
  ])
  .then(function () {
    // can do stuff with the playlist.
  });
