import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from './images/image1.jpg'
import imageTwo from './images/image2.jpg'
import imageThree from './images/image3.jpg'
import imageFour from './images/image4.jpg'
import imageFive from './images/image5.jpg'
import imageSix from './images/image6.jpg'
import imageSeven from './images/image7.jpg'
import imageEight from './images/image8.jpg'
import imageNine from './images/image9.jpg'

const styleWhite = {color : 'white'};
const largeFont = {fontSize : 50};
//onst fonts = {font : 'Calibri'}

 class Photography extends Component {
  render() {


    return (
      
      <section id="photography"> 

      

<p></p>

<div className="legend" align="center" style={styleWhite, largeFont}>
  Check out my Photography!
    </div>
    <p></p>
    <p align="center"> Click on the image for the instagram link!</p>
   

      <Carousel>
        <a href="https://www.instagram.com" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageOne)} />
        </a>
        <a href="https://www.instagram.com" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageTwo)} />
        </a>
        <a href="https://www.instagram.com" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageThree)} />
        </a>
        <a href="https://www.instagram.com" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageFour)} />
        </a>
        <a href="https://www.instagram.com" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageFive)} />
        </a>
        <a href="https://www.instagram.com" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageSix)} />
        </a>
        <a href="https://www.instagram.com" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageSeven)} />
        </a>
        <a href="https://www.instagram.com" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageEight)} />
        </a>
        <a href="https://www.instagram.com" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageNine)} />
        </a>
        
        </Carousel>
        </section>
    );
  }
}

export default Photography;