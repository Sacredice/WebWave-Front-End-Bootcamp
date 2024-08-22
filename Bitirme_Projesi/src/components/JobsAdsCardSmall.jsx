import React from 'react'

function JobsAdsCardSmall({ cardData }) {
  return (
    <div className='container px-0 m-0 card-static-shadow' style={{ border: "1px solid #e4e4e4", borderRadius: "4px", width: "170px", backgroundColor: "#FFFFFF", height: "100%" }}>
      <a className='px-0 mx-0' href="" target='_blank' style={{ textDecoration: "none", textAlign: "center", margin: "1px 0 8px 0" , padding: "16px 8px", overflowX: "hidden", textOverflow: "ellipsis" }}>
        <div className='d-flex flex-column align-items-center px-3'>
          <div style={{ width: "65px", height: "65px", padding: "3px" }}>
            <img src={cardData.imgSrc} alt="Company Image" style={{ display: "block", width: "100%", height: "100%" }} />
          </div>
          <div style={{ maxWidth: "140px"}}>
            <p style={{ color: "#333", fontSize: "14px", fontWeight: "500", lineHeight: "20px", maxHeight: "40px", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "0", whiteSpace: "nowrap" }}>{cardData.job}</p>
            <p style={{ color: "#333", overflow: "hidden", maxHeight: "20px", textOverflow: "ellipsis", marginBottom: "0", whiteSpace: "nowrap" }}>{cardData.company}</p>
            <p style={{ color: "#878787", fontSize: "12px", textWrap: "nowrap", marginBottom: "0" }}>{cardData.location}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default JobsAdsCardSmall
