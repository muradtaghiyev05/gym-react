import React from 'react'
import Price1 from '../../assets/images/price1.jpg'
import Price2 from '../../assets/images/price2.jpg'
import Price3 from '../../assets/images/price3.jpg'

const ChoosePackage = () => {
  return (
    <div className='choose-package' id='price'>
        <div className='choose-package-container'>
            <div className='info-container'>
                <h3>Choose Your Package</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className='packages-container'>
                <div className='package'>
                    <div className='price'>
                        $59/Month
                    </div>
                    <div className='img-container'>
                        <img src={Price1} alt='price1' />
                    </div>
                    <div className='detail'>
                        <h3>Body Building Training</h3>
                        <span>Get Free WiFi</span>
                        <span>Month to Month</span>
                        <span>No Time Restrictions</span>
                        <span>Gym and Cardio</span>
                        <span>Service Locker Rooms</span>
                        <button>Join Now</button>
                    </div>
                </div>
                <div className='package'>
                    <div className='price'>
                        $69/Month
                    </div>
                    <div className='img-container'>
                        <img src={Price2} alt='price2' />
                    </div>
                    <div className='detail'>
                        <h3>Body Building Training</h3>
                        <span>Get Free WiFi</span>
                        <span>Month to Month</span>
                        <span>No Time Restrictions</span>
                        <span>Gym and Cardio</span>
                        <span>Service Locker Rooms</span>
                        <button>Join Now</button>
                    </div>
                </div>
                <div className='package'>
                    <div className='price'>
                        $99/Month
                    </div>
                    <div className='img-container'>
                        <img src={Price3} alt='price3' />
                    </div>
                    <div className='detail'>
                        <h3>Body Building Training</h3>
                        <span>Get Free WiFi</span>
                        <span>Month to Month</span>
                        <span>No Time Restrictions</span>
                        <span>Gym and Cardio</span>
                        <span>Service Locker Rooms</span>
                        <button>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChoosePackage