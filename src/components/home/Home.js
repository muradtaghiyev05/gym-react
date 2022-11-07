import React from 'react'
import HomeImg from '../../assets/images/home.jpg'

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className='home-container'>
          <div className='text'>
              IT'S <span>GYM</span> TIME. LET'S GO<br />WE ARE READY TO <span>FIT YOU</span>
          </div>
          <a href='#about' className='down-btn'>
            <div className='btn-container'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </div>
          </a>
        </div>
        <div className='img-container'>
            <img src={HomeImg} alt='home' />
        </div>
    </div>
  )
}

export default Home