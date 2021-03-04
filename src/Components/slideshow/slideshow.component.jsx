import React from 'react';

import SlideShowItem from '../SlideshowItems/slideshow.items';
import './slideshow.styles.scss';
import img1 from '../../assets/report.jpg';
import img2 from '../../assets/report2.jpg';
import img3 from '../../assets/inputoutput.jpg';


class SlideShow extends React.Component {

    constructor() {
        super();

        this.state = {
            images: [{
                imageUrl: img1,
                alt: "slide-1",
                id: 1
            },
            {
                imageUrl: img2,
                alt: "slide-2",
                id: 2
            },
            {
                imageUrl: img3,
                alt: "slide-3",
                id: 3
            }]
        }
    }
    componentDidMount() {

        showSlides();


    }
    componentWillUnmount() {

        stopCount();

    }

    render() {
        return (
            <div className='slideshow' >
                {
                    this.state.images.map(({ imageUrl, id, alt }) => (
                        <SlideShowItem key={id} url={imageUrl} alt={alt} />
                    ))
                }
            </div>
        );
    }
}
var slideIndex = 0;
var t;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    t = setTimeout(showSlides, 4000); // Change image every 2 seconds
}
function stopCount() {
    clearTimeout(t);
}
export default SlideShow;




