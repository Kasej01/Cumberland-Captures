// src/pages/Gallery.js
import React from 'react';
import InPageGallery from '../components/InPageGallery';
import '../styles/GalleryPage.css';

const Gallery = () => {
    return (
        <div className="Gallery-page-container">
            <div className="Sample-gallery-container">
                <div className="Sample-gallery-text">
                    <h2>Sample Gallery</h2>
                    <p>Want to know how your pictures might turn out? Take a look at these sample photos to get an idea. All photos
                        listed were taken by me.
                    </p>
                </div>
                <InPageGallery/>
            </div>
        </div>
    );
};

export default Gallery;
