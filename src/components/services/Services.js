import React, {useState} from 'react'
import { accordion } from '../../data'
import DownArrow from '../../assets/images/down-arrow.svg'

const Services = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className='services' id='services'>
        <div className='services-container'>
            <div className='info-container'>
              <h2>Services</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              <button>Start Now</button>
            </div>
            <div className='accordion-container'>
              {accordion.map((item, i) => (
                <div key={i} className={selected === i ? "accordion-box active" : "accordion-box"}>
                  <div className='accordion-header' onClick={() => toggle(i)}>
                    <h2>{item.header}</h2>
                    <img src={DownArrow} alt='down-arrow'/>
                  </div>
                  <div className='accordion-body'>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Services