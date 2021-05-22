// React imports
import React, { useState, useEffect } from 'react';


// Utils
import moment from 'moment';


// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Audio
// import Z-Cars from '../../assets/audio/Z-Cars.wav';


const Arranger = () => {

  // use Audio constructor to create HTMLAudioElement
  const audioTune = new Audio('../../assets/audio/Wasted-Dreamtime-master.mp3');

  // variable to play audio in loop
  const [playInLoop, setPlayInLoop] = useState(false);

  // load audio file on component load
  useEffect(() => {
  audioTune.load();
  }, [])

  // set the loop of audio tune
  useEffect(() => {
  audioTune.loop = playInLoop;
  }, [playInLoop])

  // play audio sound
  const playSound = () => {
  audioTune.play();
  }
 
  // pause audio sound
  const pauseSound = () => {
  audioTune.pause();
  }
 
  // stop audio sound
  const stopSound = () => {
  audioTune.pause();
  audioTune.currentTime = 0;
  }

  return (
    <>
    <Container>
     <Row className='trackRow' style={{ height:'4rem'}}>
      <Col xs={2} style={{border: 'solid 2px', backgroundColor: 'white'}}>(info)</Col>
      <Col xs={10} style={{border: 'solid 2px', backgroundColor: 'white'}}>


      <div className="App">
        <h3 className="mb-4">Play an mp3 file - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
 
        <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound}></input>
        <input type="button" className="btn btn-warning mr-2" value="Pause" onClick={pauseSound}></input>
        <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={stopSound}></input>
 
        <label><input type="checkbox" checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)} /> Play in Loop</label>
      </div>


      </Col>
     </Row>
    </Container>

    </>
  );
};

export default Arranger;
