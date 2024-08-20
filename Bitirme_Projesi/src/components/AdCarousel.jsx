import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImgComponent from './CarouselImg';

function AdCarousel() {
  return (
    <div className='container' >
        <Carousel>
        <Carousel.Item>
            <CarouselImg imgSrc={"/AdCarousel-img1.webp"} imgAlt={"Img 1"} />
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselImg imgSrc={"/AdCarousel-img2.webp"} imgAlt={"Img 1"} />
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselImg imgSrc={"/AdCarousel-img3.webp"} imgAlt={"Img 1"} />
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default AdCarousel
