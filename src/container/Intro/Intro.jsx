import React from 'react';

import ImageGallery from 'react-image-gallery';

/* Images */
import cm1 from '../../assets/images/cm1.JPG';
import cm2 from '../../assets/images/cm2.JPG';
import cm3 from '../../assets/images/cm3.JPG';
import cm4 from '../../assets/images/cm4.JPG';
import cm5 from '../../assets/images/cm5.JPG';

import './Intro.css';

const images = [
  {
    original: cm1,
  },
  {
    original: cm2,
  },
  {
    original: cm3,
  },
  {
    original: cm4,
  },
  {
    original: cm5,
  }
];

const Intro = () => {

  return (
    <>
      {/* Image Carousel */}
      <div id="collabs" className="app__video bg-[#070707]">
        <br />
        <h1 className="headtext__cormorant text-center">Collaborations</h1>
        <br />
        <ImageGallery
          items={images}
          autoPlay={true}
          infinite={true}
          showThumbnails={false}
          slideDuration={1000}
          slideInterval={5000}
          showFullscreenButton={false}
          showGalleryFullscreenButton={false}
          showPlayButton={true}
          showGalleryPlayButton={true}
        />
      </div>

    </>
  );
};

export default Intro;
