import React from 'react'

function CarouselImg({ imgSrc, imgAlt }) {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} style={{ width: "100%", height: "auto" }} />
    </div>
  )
}

export default CarouselImg

