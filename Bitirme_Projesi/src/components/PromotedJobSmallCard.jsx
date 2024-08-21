import React from 'react'

function PromotedJobSmallCard({ link, imgSrc, job, company, location }) {
  return (
    <div className='container px-0 card-hover-shadow' style={{ border: "1px solid #e4e4e4", borderRadius: "4px", maxWidth: "540px", width: "100%", marginRight: "22px", marginBottom: "16px", maxHeight: "110px" }}>
      <a className='px-0' href={link} style={{ textDecoration: "none" }}>
        <div className='d-flex align-items-start' style={{ padding: "16px" }}>
          <div style={{ width: "64px", height: "64px", padding: "3px" }}>
            <img src={imgSrc} alt="Company Image" style={{ width: "100%", height: "100%" }} />
          </div>
          <div style={{ marginLeft: "8px", paddingRight: "8px" }} >
            <p style={{ color: "#333", fontSize: "14px", marginBottom: "9px", textWrap: "nowrap", fontWeight: "500" }}>{job}</p>
            <p style={{ color: "#333", textWrap: "nowrap" }}>{company}</p>
            <p style={{ color: "#878787", fontSize: "12px", textWrap: "nowrap", marginBottom: "9px" }}>{location}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default PromotedJobSmallCard
