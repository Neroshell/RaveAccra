import React from 'react';
import './Gallery.css';
import img1 from '../../assets/club-house3.jpg';
import img2 from '../../assets/club-house3.jpg';
import img3 from '../../assets/club-house3.jpg';
import img4 from '../../assets/event_img.jpeg';

const itemData = [
  { img: img1, title: 'Image 1' },
  { img: img2, title: 'Image 2' },
  { img: img3, title: 'Image 3' },
  { img: img4, title: 'Image 4' },
  { img: img2, title: 'Image 2' },
  { img: img3, title: 'Image 3' },
  { img: img3, title: 'Image 3' },
  { img: img3, title: 'Image 3' },
  // Add more image data as needed
];

const Gallery = () => {
  return (
    <div className='gallery'>
      <h3>Gallery</h3>
      <p>Latest Event images</p>
      <div className='image-container'>
        {itemData.map((item, index) => (
          <div key={index} className='image-fluid'>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
