import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../videos/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
    <video src={Video} className='video' autoPlay loop muted />
      <h1>Engineer & Builders</h1>
      <p>Defence Contract</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Services
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contact Us <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;