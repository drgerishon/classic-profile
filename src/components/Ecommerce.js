import React from 'react'
import '../App.css';
import './Ecommerce.css';
import {Button} from './Button';

function Ecommerce() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted  type="video/mp4"/>
        {/* <h1>Adventure Awaits</h1> */}
        <p>Adventure Awaits</p>    
        <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Get Started
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                     Watch Later < i className='far fa-play-cirle'></i>
            </Button>
            
        </div>
        </div>
    )
}
export default Ecommerce;   