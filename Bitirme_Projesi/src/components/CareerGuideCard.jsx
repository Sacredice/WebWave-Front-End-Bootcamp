import React from 'react'
import Card from 'react-bootstrap/Card';


function CareerGuideCard({ card }) {
  return (
    <>
      <div className='d-md-none'>
        <Card>
          <a href="" style={{ textDecoration: "none", display: "block", height: "245.5px", width: "182px", color: "rgb(51, 51, 51)", fontSize: "15px", fontWeight: "500" }}>
            <Card.Img variant="top" src={card.imgSrc} />
            <Card.Body>
              <Card.Text>
                {card.cardText}
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </div>
      <div className='d-none d-md-block d-lg-none'>
        <Card>
          <a href="" style={{ textDecoration: "none", display: "block", height: "271.5px", width: "237px", color: "rgb(51, 51, 51)", fontSize: "15px", fontWeight: "500" }}>
            <Card.Img variant="top" src={card.imgSrc} />
            <Card.Body>
              <Card.Text>
              {card.cardText}
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </div>
      <div className='d-none d-lg-block d-xl-none'>
        <Card>
          <a href="" style={{ textDecoration: "none", display: "block", height: "245.5px", width: "214px", color: "rgb(51, 51, 51)", fontSize: "15px", fontWeight: "500" }}>
            <Card.Img variant="top" src={card.imgSrc} />
            <Card.Body>
              <Card.Text>
              {card.cardText}
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </div>
      <div className='d-none  d-xl-block'>
        <Card>
          <a href="" style={{ textDecoration: "none", display: "block", height: "252px", width: "259px", color: "rgb(51, 51, 51)", fontSize: "15px", fontWeight: "500" }}>
            <Card.Img variant="top" src={card.imgSrc} />
            <Card.Body>
              <Card.Text>
              {card.cardText}
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </div>
    </>
  )
}

export default CareerGuideCard
