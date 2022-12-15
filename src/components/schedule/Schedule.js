import React from 'react'
import Schedule1 from '../../assets/images/schedule1.png'

const Schedule = () => {
  return (
    <div className='schedule' id='schedule'>
        <div className='schedule-container'>
            <div className='info-container'>
                <h2>Classes Schedule</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <div className='img-container'>
                    <img src={Schedule1} alt='schedule' />
                </div>
            </div>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <td className='day'>Monday</td>
                            <td className='time'>9:00 AM</td>
                            <td>Body Building <br />9:00 to 10:00 AM</td>
                            <td>Room No:210</td>
                        </tr>
                        <tr>
                   	 		<td className="day">Tuesday</td>
                   	 		<td className='time'>9:00 AM</td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 	<tr>
                   	 		<td className="day">Wednesday</td>
                   	 		<td className='time'>9:00 AM</td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 	<tr>
                   	 		<td className="day">Thursday</td>
                   	 		<td className='time'>9:00 AM</td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 	<tr>
                   	 		<td className="day">Friday</td>
                   	 		<td className='time'>9:00 AM</td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 	<tr>
                   	 		<td className="day">Saturday</td>
                   	 		<td className='time'>9:00 AM</td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Schedule