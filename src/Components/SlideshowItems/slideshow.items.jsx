import React from 'react';

import './slideshow.items.styles.scss';

const SlideShowItem = ({ url, alt }) => (
    <div className="mySlides fade">
        <img src={url} alt={alt} />
    </div>
);
//tsis
export default SlideShowItem;
