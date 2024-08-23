import React from 'react'

function JobsAdsCardMedium({ data }) {

  console.log(data)
  return (
    <div className='container px-0 card-hover-shadow' style={{ border: "1px solid #e4e4e4", borderRadius: "4px", maxWidth: "328px", width: "100%", marginRight: "22px", marginBottom: "16px", maxHeight: "135px" }}>
      <a className='px-0' href="" style={{ textDecoration: "none" }}>
        <div style={{ padding: "15px" }}>
          <div className='d-flex align-items-start' >
            <div style={{ width: "65px", height: "65px" }}>
              <img src={data.imgSrc} alt="Company Image" style={{ width: "100%", height: "100%" }} />
            </div>
            <div style={{ marginLeft: "8px", paddingRight: "8px", maxWidth: "211px" }} >
              <p style={{ color: "#333", fontSize: "16px", marginBottom: "8px", textWrap: "nowrap", fontWeight: "500", lineHeight: "19px", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>{data.job}</p>
              <p style={{ color: "#333", textWrap: "nowrap", lineHeight: "17px", marginBottom: "8px", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>{data.company}</p>
              <p style={{ color: "#878787", fontSize: "12px", textWrap: "nowrap", lineHeight: "14px", marginBottom: "0" }}>{data.location}</p>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-end' style={{ height: "39px" }}>
              <p className='mb-0'>Tam Zamanlı</p>
              <p className='mb-0'>Bugün</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default JobsAdsCardMedium
