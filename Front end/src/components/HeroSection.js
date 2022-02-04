import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>NIRVANA HOUSING</h1>
      <p>Welcome to the era Of Smart Housing!</p>
      <p><q>Home is where our story begins…</q></p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;