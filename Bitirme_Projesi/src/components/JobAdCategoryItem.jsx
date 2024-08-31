import React from 'react'

function JobAdCategoryItem({ textContent, href }) {
  return (
    <div>
      <a className='d-block d-md-none pe-1 ad-categories-item' style={{ maxWidth: "540px", height: "30px", textDecoration: "none", fontSize: "12px", color: "rgb(0, 0, 0)", cursor: "pointer" }} href={href}>{textContent}</a>
      <a className='d-none d-md-block d-lg-none pe-1 pb-3 ad-categories-item' style={{ maxWidth: "169px", textDecoration: "none", fontSize: "14px", color: "rgb(0, 0, 0)", cursor: "pointer" }} href={href}>{textContent}</a>
      <a className='d-none d-lg-block d-xl-none pe-1 pb-3 ad-categories-item' style={{ maxWidth: "183px", textDecoration: "none", color: "rgb(0, 0, 0)", cursor: "pointer" }} href={href}>{textContent}</a>
      <a className='d-none d-xl-block pe-1 pb-3 ad-categories-item' style={{ maxWidth: "219px", textDecoration: "none", color: "rgb(0, 0, 0)", cursor: "pointer" }} href={href}>{textContent}</a>
    </div>
  )
}

export default JobAdCategoryItem
