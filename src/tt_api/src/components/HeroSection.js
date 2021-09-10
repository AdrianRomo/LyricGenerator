import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/vinyl.mp4' autoPlay loop muted />
            <h1>You are</h1>
            <p>What you listen to</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Generate your own song <i class="fas fa-play fa-xs" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
