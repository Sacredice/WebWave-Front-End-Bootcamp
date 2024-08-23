import React, { useState } from 'react'
import JobAdsCardsListMedium from './JobsAdsCardsListMedium';

function JobsAdsCardsListLarge({ data }) {
  const [selectedList, setSelectedList] = useState("bugun");

  return (
    <div>
      <div className='container p-0 ' style={{ maxWidth: "1140px" }}>
        <div className='d-flex align-items-top justify-content-between jobs-ads-container'>
          <div style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)", width: "225px", height: "269px" }}>

            <div className='select-button' onClick={() => setSelectedList("bugun")}>
              <p style={{ width: "100%" }}>Bugün Yayınlananlar</p>
              <div className='button-underline-div'></div>
            </div>
            <div className='select-button' onClick={() => setSelectedList("uzaktan")}>
              <p style={{ width: "100%" }}>Uzaktan Çalışma İlanları</p>
              <div className='button-underline-div'></div>
            </div>

            <div className='select-button' onClick={() => setSelectedList("partTime")}>
              <p style={{ width: "100%" }}>Part-time İlanlar</p>
              <div className='button-underline-div'></div>
            </div>

            <div className='select-button' onClick={() => setSelectedList("yeniMezun")}>
              <p style={{ width: "100%" }}>Yeni Mezun İlanları</p>
              <div className='button-underline-div'></div>
            </div>

            <div className='select-button' onClick={() => setSelectedList("yonetici")}>
              <p style={{ width: "100%" }}>Yönetici </p>
              <div className='button-underline-div'></div>
            </div>
          </div>
          <JobAdsCardsListMedium data={data[selectedList]} />
        </div>
      </div>
    </div>
  )
}

export default JobsAdsCardsListLarge
