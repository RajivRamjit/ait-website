import React from 'react';
import SimpleMap from '../GoogleMap/map.component';

import './content.styles.scss'


const ContactContents = () => (
    <div className="contact-content">
        <div className="contact-info">
            <div className="row">
                <div className="contact-text">
                    <h2>Email us at:</h2>
                    <p>taran.ramjit@gmail.com</p>
                </div>
                <div className="contact-icon">
                    <i className="far fa-envelope"></i>
                </div>
            </div>
            <div className="row">
                <div className="contact-icon">
                    <i className="far fa-compass"></i>
                </div>
                <div className="contact-text">
                    <h2>Located at:</h2>
                    <p>19 Dades Extension Trace #2<br />Tabaquite dRoad<br /> Rio Claro<br /> Trinidad & Tobago</p>
                </div>
            </div>
            <div className="row">
                <div className="contact-text">
                    <h2>Contact us at:</h2>
                    <p>1-868-644-1088</p>
                </div>
                <div className="contact-icon">
                    <i className="far fa-address-card"></i>
                </div>
            </div>
        </div>
        <div className="Google-map-container">
            <h1>VISIT OUR LOCATION TODAY</h1>
            <SimpleMap />
        </div>
    </div>
);


export default ContactContents;