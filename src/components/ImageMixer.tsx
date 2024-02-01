import React from 'react';
import img1 from '../assets/1.jpg'
import img2 from '../assets/im.jpg'
import img3 from '../assets/2.jpeg'
import img4 from '../assets/3.webp'
import '../App.css'
const ImageOverlapExample = () => {
  const imageStyle1 = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    zIndex: '1', // Adjust the zIndex to control the stacking order
  };

  const imageStyle2 = {
    position: 'absolute',
    top: '50px',
    left: '130px',
    zIndex: '2', // Higher zIndex brings the element to the front
  };
  const imageStyle3 = {
    position: 'absolute',
    top: '100px',
    left: '-1px',
    zIndex: '3',
  };
  const imageStyle4 = {
    position: 'absolute',
    top: '160px',
    left: '100px',
    zIndex: '3',
  };

  return (
    <div className='mt-5 shadow-lg hover:shadow-black' style={{ position: 'relative', width: '300px', height: '200px' }}>
      <img className='w-64 rounded-lg shadow-lg hover:scale-110' src={img1} alt='healthy' style={imageStyle1} />
      <img className='w-48 rounded-lg shadow-lg hover:scale-110' src={img3} alt='another' style={imageStyle2} />
      <img className='w-40 rounded-lg shadow-lg hover:scale-110' src={img2} alt='another' style={imageStyle3} />
      <img className='w-40 rounded-lg shadow-lg hover:scale-110' src={img4} alt='another' style={imageStyle4} />

    </div>
  );
};

export default ImageOverlapExample;