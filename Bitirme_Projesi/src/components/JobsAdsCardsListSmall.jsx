import React from 'react'
import JobsAdsCardSmall from './JobsAdsCardSmall'

function JobsAdsCardsListSmall({ data }) {
 
  return (
    <div>
      <div className='container px-0 pt-3 d-md-none' style={{ maxWidth: "540px", backgroundColor: "#FFFFFF", marginBottom: "12px" }}>
        <div className='d-flex justify-content-between'>
          <p className='m-0 ps-3' style={{ fontSize: "16px", fontWeight: "300" }}>{(data.title).toUpperCase()}</p>
          <a href='https://www.kariyer.net/is-ilanlari/yeni' className='m-0 pe-3' style={{ fontSize: "14px", fontWeight: "500", color: "rgb(131, 22, 181)", textDecoration: "none", cursor: "pointer" }}>Tüm İlanlar</a>
        </div>
        <div style={{ overflowX: "scroll" }}>
          <div className='row px-3' style={{ height: "178px", width: "1120px", marginTop: "16px" }}>
              {(data.cards).map((card, index)=> (
                <div className='col-2' key={index}>
                  <JobsAdsCardSmall  cardData={card} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsAdsCardsListSmall
