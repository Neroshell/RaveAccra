import React from 'react';
import './Gallery.css';
import { useMediaQuery, useTheme } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';
import img1 from '../../assets/club.jpg';
import img2 from '../../assets/club.jpg';
import img3 from '../../assets/pic.jpg';
import img4 from '../../assets/event_img.jpeg';

const itemData = [
  { img: img1, title: 'Image 1' },
  { img: img2, title: 'Image 2' },
  { img: img3, title: 'Image 3' },
  { img: img4, title: 'Image 4' },
  { img: img2, title: 'Image 2' },
  { img: img3, title: 'Image 3' },

  // Add more image data as needed
];

const Gallery = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('sm'));

  let columns = 3;
  if (isMediumScreen) {
    columns = 2;
  } else if (isLargeScreen) {
    columns = 3;
  }



  return (
    <div className="gallery" style={{ overflowX: 'hidden' }}>
      <h3>Gallery</h3>
      <ImageList className='image-list' sx={{ width: '100%', height: '550px' }} cols={columns} style={{ overflowY: 'hidden' }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Gallery;
