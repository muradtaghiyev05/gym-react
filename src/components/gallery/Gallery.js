import React from 'react'
import Gallery1 from '../../assets/images/gallery1.jpg'
import Gallery2 from '../../assets/images/gallery2.jpg'
import Gallery3 from '../../assets/images/gallery3.jpg'
import Gallery4 from '../../assets/images/gallery4.jpg'

const Gallery = () => {
  return (
    <div className='gallery' id='gallery'>
        <div className='gallery-container'>
            <h2>Workout Gallery</h2>
            <div className='images-container'>
                <div className='image-container'>
                    <img src={Gallery1} alt='gallery1' />
                </div>
                <div className='image-container'>
                    <img src={Gallery2} alt='gallery2' />
                </div>
                <div className='image-container'>
                    <img src={Gallery3} alt='gallery3' />
                </div>
                <div className='image-container'>
                    <img src={Gallery4} alt='gallery4' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery