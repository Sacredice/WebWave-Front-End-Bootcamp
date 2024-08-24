import React from 'react'

function JobAdUpTimeStatus({ status }) {

  const styleObj = { color: "", fontSize: "12px", fontWeight: "400" }
  const textColor = status === "Son gün" ? "rgb(222, 71, 71)" : status === "Yeni" ? "rgb(73, 202, 119)" : "rgb(135, 135, 135)"
  styleObj.color = textColor;

  return (
    <div>
      <p className='mb-0' style={styleObj}>{status}</p>
    </div>
  )
}

export default JobAdUpTimeStatus
