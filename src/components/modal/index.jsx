import React, { useEffect, useRef } from 'react'
import DriveIcon from '../../images/DriveIcon.png'
import GmailIcon from '../../images/GmailIcon.png'
import SheetsIcon from '../../images/SheetsIcon.png'
import SlidesIcon from '../../images/SlidesIcon.png'
import CalenderIcon from '../../images/CalenderIcon.png'
import FormIcon from '../../images/FormIcon.png'
import MeetIcon from '../../images/MeetIcon.png'
import './style.css'

function Modal({setModal}) {
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
  return (
    <div className='grid-container' ref={ref}>
        <div className="grid-item">
            <a href="https://drive.google.com/" target='_blank' style={{textDecoration: 'none'}}>
                <img src={DriveIcon} style={{width: 48, height: 48}}/>
                <p className='modalText'>Drive</p>
            </a>
        </div>
        <div className="grid-item">
            <a href="https://mail.google.com/" target='_blank' style={{textDecoration: 'none'}}>
                <img src={GmailIcon} style={{width: 48, height: 48}}/>
                <p className='modalText'>GMail</p>
            </a>
        </div>
        <div className="grid-item">
            <a href="https://www.google.com/sheets/" target='_blank' style={{textDecoration: 'none'}}>
                <img src={SheetsIcon} style={{width: 48, height: 48}}/>
                <p className='modalText'>Sheets</p>
            </a>
        </div>  
        <div className="grid-item">
            <a href="https://www.google.com/slides/" target='_blank' style={{textDecoration: 'none'}}>
                <img src={SlidesIcon} style={{width: 48, height: 48}}/>
                <p className='modalText'>Slides</p>
            </a>
        </div> 
        <div className="grid-item">
            <a href="https://calendar.google.com/calendar/" target='_blank' style={{textDecoration: 'none'}}>
                <img src={CalenderIcon} style={{width: 48, height: 48}}/>
                <p className='modalText'>Calender</p>
            </a>
        </div> 
        <div className="grid-item">
            <a href="https://www.google.com/forms/" target='_blank' style={{textDecoration: 'none'}}>
                <img src={FormIcon} style={{width: 48, height: 48}}/>
                <p className='modalText'>Forms</p>
            </a>
        </div> 
        <div className="grid-item">
            <a href="https://meet.google.com/" target='_blank' style={{textDecoration: 'none'}}>
                <img src={MeetIcon} style={{width: 48, height: 48}}/>
                <p className='modalText'>Meet</p>
            </a>
        </div>
    </div>
  )
}

export default Modal