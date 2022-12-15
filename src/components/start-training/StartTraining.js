import React from 'react'
import Gallery4 from '../../assets/images/gallery4.jpg'

const StartTraining = () => {
  return (
    <div className='start-training' id='start-training'>
        <div className='start-training-container'>
            <div className='info-container'>
                <h2>Start Your Training Today</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <button>Start Now</button>
            </div>
            <div className='img-container'>
                <img src={Gallery4} alt='start-training' />
            </div>
        </div>
    </div>
  )
}

export default StartTraining