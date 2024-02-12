// InpageGallery.js

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/InPageGallery.css';

const InpageGallery = () => {
  const images = [
    '/images/image-1.jpg',
    '/images/image-2.jpg',
    '/images/image-3.jpg',
  ];

  const containerStyle = {
    width: '60vw',
    height: '40vw',
    margin: 'auto',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div className="inpage-gallery-container" style={containerStyle}>
      <div className="inpage-gallery">
        <Slide images={images} easing="ease" transitionDuration={1000}>
          {images.map((image, index) => (
            <div key={index} className="each-slide">
              <div className="image-container">
                <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
              </div>
            </div>
          ))}
        </Slide>

        <div className="indicators">
          {images.map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InpageGallery;
