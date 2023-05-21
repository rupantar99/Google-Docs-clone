import React from 'react'
import './style.css'
import ContactsIcon from '../../images/google-contacts.png'
import MapsIcon from '../../images/google-maps.png'
import CalenderIcon from '../../images/CalenderIcon.png'
import PlusIcon from '../../images/plus-Icon.png'


function SideBar() {
  return (
    <div style={{left: 6}}>
        <div className='sideItemContainer'>
            <img src={CalenderIcon} alt="" style={{height: 24, width: 'auto'}}/>
        </div>
        <div className='sideItemContainer'>
            <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="" style={{height: 24, width: 'auto'}}/>
        </div>
        <div className='sideItemContainer'>
            <img src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="" style={{height: 24, width: 'auto'}}/>
        </div>
        <div className='sideItemContainer'>
            <img src={ContactsIcon} alt="" style={{height: 24, width: 'auto'}}/>
        </div>
        <div className='sideItemContainer'>
            <img src={MapsIcon} alt="" style={{height: 24, width: 'auto'}}/>
        </div>
        
        <div className='line'>

        </div>

        
        <div className='sideItemContainer'>
            <img src={PlusIcon} alt="" style={{height: 16, width: 'auto'}}/>
        </div>

    </div>
  )
}

export default SideBar