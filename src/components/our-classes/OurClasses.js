import React from 'react'
import Class1 from '../../assets/images/class1.jpg'
import Class2 from '../../assets/images/class2.png'

const OurClasses = () => {
  return (
    <div className='our-classes' id='classes'>
        <div className='our-classes-container'>
            <div className='img-container'>
              <img src={Class2} alt='class-photo' />
            </div>
            <div className='info-container'>
              <h2>Our Classes</h2>
              <p id='black-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              <div className='program-container'>
                <div className='program-img'>
                  <img src={Class1} alt='class' />
                  <div className='price'>
                    $99
                  </div>
                </div>
                <div className='program-info'>
                  <h3>Stretching Training</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href='#'>Get Details</a>
                </div>
              </div>
              <div className='program-container'>
                <div className='program-info' id='second-info'>
                  <h3>Stretching Training</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href='#'>Get Details</a>
                </div>
                <div className='program-img'>
                  <img src={Class1} alt='class' />
                  <div className='price' id='second-price'>
                    $99
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default OurClasses