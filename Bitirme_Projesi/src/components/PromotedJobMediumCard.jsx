import React from "react";

function PromotedJobMediumCard({ link, imgSrc, job, company, location, width }) {
  return (
    <div className='container px-0 m-0 card-hover-shadow' style={{ border: "1px solid #e4e4e4", borderRadius: "4px", maxWidth: width, backgroundColor: "#FFFFFF", height: "100%" }}>
      <a className='px-0 mx-0' href={link} style={{ textDecoration: "none", textAlign: "center"}}>
        <div className='d-flex flex-column align-items-center' style={{ padding: "16px" }}>
          <div style={{ width: "64px", height: "64px", padding: "3px" }}>
            <img src={imgSrc} alt="Company Image" style={{ display: "block", width: "60px", height: "60px" }} />
          </div>
          <div style={{ marginLeft: "8px", paddingRight: "8px" }} >
            <p style={{ color: "#333", fontSize: "14px", marginBottom: "9px", fontWeight: "500" }}>{job}</p>
            <p style={{ color: "#333"}}>{company}</p>
            <p style={{ color: "#878787", fontSize: "12px", textWrap: "nowrap", marginBottom: "9px" }}>{location}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PromotedJobMediumCard;