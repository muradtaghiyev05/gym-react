import React from 'react'
import Location from '../../assets/images/location.svg'
import Phone from '../../assets/images/phone.svg'
import Mail from '../../assets/images/mail.svg'
import Facebook from '../../assets/images/facebook.svg'
import Linkedin from '../../assets/images/linkedin.svg'
import Instagram from '../../assets/images/instagram.svg'
import Youtube from '../../assets/images/youtube.svg'

const Footer = () => {
  return (
    <div className='footer' id='contact'>
        <div className='footer-container'>
          <div className='mail-container'>
            <form>
              <input type='text' placeholder='Enter Name' />
              <input type='email' placeholder='Enter Email' />
              <input type='number' placeholder='Enter Mobile' />
              <textarea rows='5' cols='40' placeholder='Enter Message'></textarea>
              <button type='submit'>Send Message</button>
            </form>
          </div>
          <div className='contact-container'>
            <h2>Get Connected with Gym</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className='detail-container'>
              <ul>
                <li>
                  <img src={Location} alt='address' />
                  <span>Baku, Azerbaijan, House no 34, Office 150</span>
                </li>
                <li>
                  <img src={Phone} alt='phone' />
                  <span>+994559999999</span>
                </li>
                <li>
                  <img src={Mail} alt='mail' />
                  <span>gym@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className='social-container'>
              <div className='social'>
                <img src={Facebook} alt='facebook' />
              </div>
              <div className='social'>
                <img src={Linkedin} alt='linkedin' />
              </div>
              <div className='social'>
                <img src={Instagram} alt='instagram' />
              </div>
              <div className='social'>
                <img src={Youtube} alt='youtube' />
              </div>
            </div>
            <div className='copyr'>Created by &copy; Murad Taghiyev</div>
          </div>
        </div>
    </div>
  )
}

export default Footer