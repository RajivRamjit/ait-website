import React from 'react';
import './content.styles.scss';

import SlideShow from '../slideshow/slideshow.component';

const Content = () => (
    <div className='content'>
        <SlideShow />
        <div className='services'>
            <h1 className='title'>SERVICES WE PROVIDE</h1>
            <div className='quick-list'>
                <div className='items-list'>
                    <i className="fas fa-car"></i>
                    <h3>On-Site Support</h3>
                </div>
                <div className='items-list'>
                    <i className="fas fa-headset"></i>
                    <h3>Remote Support</h3>
                </div>
                <div className='items-list'>
                    <i className="fas fa-laptop"></i>
                    <h3>System Sales And Support</h3>
                </div>
                <div className='items-list'>
                    <i className="fas fa-globe"></i>
                    <h3>Web Development</h3>
                </div>
            </div>
            <h4 className='services-foot'>With thousands of satisfied clients, you can rest assured that we will serve you with excellence.</h4>
        </div>
        <div className='job-types'>
            <div className='job-box bus'>
                <h1 className='title'>BUSINESS SERVICES</h1>
                <h4 className='about-job'>WITH MANY YEARS OF EXPERIENCE, WE OFFER SOLUTIONS TO HELP YOUR BUSINESS BETTER SUCCEED.</h4>
                <div className='job-bn'>MORE INFORMATION</div>
            </div>
            <div className='job-box res'>
                <h1 className='title'>RESIDENTAL SERVICES</h1>
                <h4 className='about-job'>OUR FRIENDLY SUPPORT TEAM WILL ASSIST YOU WITH ALL YOUR COMPUTER AND NETWORKING NEEDS.</h4>
                <div className='job-bn'>MORE INFORMATION</div>
            </div>
        </div>
        <div className='about'>
            <div className='about-img'></div>
            <div className='about-info'>
                <h1 className='title'>OUR PASSION TO SERVE</h1>
                <div className='about-text'>
                    <p>
                        Advance Information Technologies was founded by Taran Ramjit as a result of his extensive IT knowledge and passion for helping others. Serving customers since 2010, we have successfully assisted hundreds of clients with their IT challenges. Confidentiality and great customer service are the focus our company. Being an independent business allows us the freedom to be flexible in our approach and our solutions are tailored to meet your needs. </p>

                    <p>Not only are we great at resolving your current IT issues and challenges, we have created some of the best automated maintenance and monitoring services. With AIT you have peace of mind knowing your IT needs are in good hands.</p>
                </div>

            </div>
        </div>
    </div>
);


export default Content;

