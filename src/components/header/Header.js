import React, {useState} from 'react'

const Header = () => {

  const [active, setActive] = useState(false);

  const hamburgerClick = () => {
    setActive(!active);
  }

  return (
    <div className='header' id='header'>
        <div className='header-container'>
            <div className='header-left'>
                <a href='#'>Fitness <span id='club'>Club</span></a>
            </div>

            <div className='header-right'>
              <div onClick={hamburgerClick} className={active ? 'hamburger hamburger-active' : 'hamburger'}>
                <div className='line'></div>
                <div className='line'></div>              
                <div className='line'></div>              
              </div>
            </div>
        </div>
        <div className="nav" style={{right: active ? '0px' : '-280px'}}>
          <ul onClick={hamburgerClick}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#price">Price</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
 	 	</div>
    </div>
  )
}

export default Header