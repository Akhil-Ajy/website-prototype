import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} className='video' autoPlay loop muted />
      <h1>Engineer & Builders</h1>
      <p>Defence Contract</p>
      <div className='hero-btns'>
        <ScrollLink
          to='portfolios'
          smooth={true}
          duration={500}
          offset={-80}
          className='btns'
        >
          Services
        </ScrollLink>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Contact Us <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
