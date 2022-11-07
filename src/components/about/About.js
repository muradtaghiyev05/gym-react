import React from 'react'
import About1 from '../../assets/images/about1.jpg'
import About2 from '../../assets/images/about2.jpg'
import About3 from '../../assets/images/about3.jpg'


const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-container'>
            <div className='card'>
                <div className='img-container'>
                    <img src={About1} />
                </div>
                <div className='txt-container'>
                    <h3>Free Consultation</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>
            <div className='card'>
                <div className='img-container'>
                    <img src={About2} />
                </div>
                <div className='txt-container'>
                    <h3>Best Training</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>
            <div className='card'>
                <div className='img-container'>
                    <img src={About3} />
                </div>
                <div className='txt-container'>
                    <h3>Build Perfect Body</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About