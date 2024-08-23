import React from 'react'
import JobsAdsCardMedium from './JobsAdsCardMedium'

function JobAdsCardsListMedium({ data }) {
  return (
    <div>
      <div className='container px-0 pt-3 d-none d-md-block d-lg-none' style={{ height:"520px", maxWidth: "720px", marginBottom: "12px", boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)", borderRadius: "6px" }}>
        <div className='d-flex justify-content-between'>
          <p className='m-0 ps-3' style={{ fontSize: "20px", fontWeight: "300" }}>{(data.title).toUpperCase()}</p>
          <a className='m-0 pe-3' style={{ fontSize: "14px", fontWeight: "500", color: "rgb(131, 22, 181)", textDecoration: "none" }}>Tüm İlanlar</a>
        </div>
        <div>
          <div className='row px-3' style={{ height: "178px", width: "100%", marginTop: "16px" }}>
              {(data.cards).map((card, index)=> (
                <div className='col-6' key={index}>
                  <JobsAdsCardMedium  cardData={card} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='container px-2 py-3 d-none d-lg-block d-xl-none' style={{ height:"520px", maxWidth: "720px", marginBottom: "12px", boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)", borderRadius: "6px" }}>
        <div className='d-flex justify-content-between'>
          <p className='m-0 ps-3' style={{ fontSize: "20px", fontWeight: "300" }}>{(data.title).toUpperCase()}</p>
          <a className='m-0 pe-3' style={{ fontSize: "14px", fontWeight: "500", color: "rgb(131, 22, 181)", textDecoration: "none" }}>Tüm İlanlar</a>
        </div>
        <div>
          <div className='row px-3' style={{ height: "178px", width: "100%", marginTop: "16px" }}>
              {(data.cards).map((card, index)=> (
                <div className='col-6' key={index}>
                  <JobsAdsCardMedium  cardData={card} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='container px-3 pt-4 d-none d-xl-block' style={{ height:"552px", maxWidth: "899px", marginBottom: "12px", boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)", borderRadius: "6px" }}>
        <div className='d-flex justify-content-between'>
          <p className='m-0 ps-3' style={{ fontSize: "22px", fontWeight: "300" }}>{(data.title).toUpperCase()}</p>
          <a className='m-0 pe-3' style={{ fontSize: "14px", fontWeight: "500", color: "rgb(131, 22, 181)", textDecoration: "none" }}>Tüm İlanlar</a>
        </div>
        <div>
          <div className='row px-3' style={{ height: "178px", width: "100%", marginTop: "16px" }}>
              {(data.cards).map((card, index)=> (
                <div className='col-6' key={index}>
                  <JobsAdsCardMedium  cardData={card} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobAdsCardsListMedium
