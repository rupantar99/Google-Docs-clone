import React, { useState } from 'react'
import Logo from '../../images/Logo.png'
import LockIcon from '../../images/LockIcon.png'
import MenuBtn from '../../images/MenuButton.png'
import { RWebShare } from "react-web-share";
import Modal from '../modal'
import './style.css'


function Header() {
    const [name, setName] =useState('Untitled Document')
    const handleChange = (event) => {
        const value = event.target.value;
        setName(value);
        event.target.style.setProperty('color','#000')
        event.target.style.setProperty('font-weight','500')
      };

      const [modal, setModal] = useState(false);

      const handleMenuBtn = () => {
        setModal(!modal);
      }

  return (
    <div className='container'>
        <div className="logo">
            <a href='/'>
                <img src={Logo} style={{width: 40, height: 40}}/>
            </a>
        </div>

        <div className="mid">
            <div className="docName">
                <input
                 className='docNameText' type="text" id="name" name="name" required value={name} 
                onChange={(e) => handleChange(e)}
                onFocus={(e) => {
                    e.target.select();
                }}
                onBlur={ (e) => {
                    if(e.target.value === ''){
                        setName('Untitled Document');
                    }
                }
                }
                
                />
            </div>

            <div className="menuBar">
                <div className='menuBtns'>
                    <p className='menuBtnText'>File</p>
                </div>
                <div className='menuBtns'>
                    <p className='menuBtnText'>Edit</p>
                </div>
                <div className='menuBtns'>
                    <p className='menuBtnText'>View</p>
                </div>
                <div className='menuBtns'>
                    <p className='menuBtnText'>Insert</p>
                </div>
                <div className='menuBtns'>
                    <p className='menuBtnText'>Format</p>
                </div>
                <div className='menuBtns'>
                    <p className='menuBtnText'>Tools</p>
                </div>
                <div className='menuBtns'>
                    <p className='menuBtnText'>Extensions</p>
                </div>
                <div className='menuBtns'>
                    <p className='menuBtnText'>Help</p>
                </div>    
            </div>
        </div>

        <div className="end">
            <RWebShare
                data={{
                text: "Share with friends",
                url: "http://localhost:3000",
                title: name,
                }}
            >
                <button className='shareContainer' onClick={()=> alert('Share with your friends')}>
                    <img src={LockIcon} style={{width: 16, height: 16, color: 'black'}}/>
                    <span id='shareText'>Share</span>
                </button>
            </RWebShare>
            

            <div id='services'>
                <img src={MenuBtn} className='menuBtn' style={{width: 16, height: 16}} onClick={handleMenuBtn}/>
            </div>

            {
                modal ?
                <div style={{height: 300, width: 300, backgroundColor: 'white', position: 'fixed', top: 60, right: 20, zIndex: 50, overflowY: 'scroll', borderRadius: 8, boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'}}>
                    <Modal setModal={setModal}/>
                </div>
                :
                null
            }
        </div>
    </div>
  )
}

export default Header