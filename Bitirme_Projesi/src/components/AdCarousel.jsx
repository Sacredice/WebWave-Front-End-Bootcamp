import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg from './CarouselImg';

function AdCarousel() {
  return (
    <div className='px-3'>
      <div className='container d-md-none py-3 px-0' >
        <Carousel indicators={false} touch >
          <Carousel.Item>
            <CarouselImg imgSrc={"/AdCarousel-imgSmall1.webp"} imgAlt={"Img 1"} />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg imgSrc={"/AdCarousel-imgSmall2.webp"} imgAlt={"Img 1"} />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg imgSrc={"/AdCarousel-imgSmall3.webp"} imgAlt={"Img 1"} />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='container d-none d-md-block px-0 py-4' >
        <Carousel indicators={false}>
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
    </div>
  )
}

export default AdCarousel
