import React from 'react';
import CarouselItem from './CarouselItem';
import slider1 from '../../../assets/slide1.jpg'
import slider2 from '../../../assets/slide2.jpg'
import slider3 from '../../../assets/slide3.jpg'


const carouselData = [
    {
        image: slider1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: slider2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: slider3,
        prev: 2,
        id: 3,
        next: 1
    }
]

const Carousel = () => {
    
    return (
        <div className='carousel w-full max-h-[600px] rounded-lg'>
            {
                carouselData.map(slide => <CarouselItem
                    key={slide.id}
                    slide={slide}
                ></CarouselItem>)
            }

        </div>
    );
};

export default Carousel;