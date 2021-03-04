import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import logo from '../../assets/aitNoEarth.png';
import { auth } from '../../firebase/firebase.utils';


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <img className='nav-logo' src={logo} alt='Logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/'>
                HOME
            </Link>
            <Link className='option' to='/services'>
                SERVICES
            </Link>
            <Link className='option' to='/remote-support'>
                REMOTE SUPPORT
            </Link>
            <Link className='option' to='/request'>
                SUBMIT REQUEST
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>

            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
                    :
                    <Link className='option' to='/sign-in'>
                        SIGN-IN
                    </Link>

            }

            <h3><i className="fas fa-phone"></i>1-868-644-1088</h3>
        </div>
    </div>
);
export default Header;