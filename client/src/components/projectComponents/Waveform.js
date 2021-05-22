import React, { Component } from 'react';
// import WaveSurfer from 'wavesurfer.js';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';

// import { WaveformContianer, Wave, PlayButton } from './Waveform.styled';

class Waveform extends Component {  
  state = {
    playing: false,
  };

  componentDidMount() {
    const track = document.querySelector('#track');

    this.waveform = Wavesurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 80,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
  };
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  
  render() {
    const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';

    return (
      <Container className='waveformContainer'>
        <Button onClick={this.handlePlay} className='playButton'>
          {!this.state.playing ? 'Play' : 'Pause'}
        </Button>
        <Wave id="waveform" />
        <audio id="track" src={url} />
      </Container>
    );
  }
};

export default Waveform;