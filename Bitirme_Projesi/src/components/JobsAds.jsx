import React from 'react'
import JobsAdsTypesSmall from './JobsAdsTypesSmall'
import JobsAdsCardMedium from './JobsAdsCardMedium'
import { data } from "../jobs-data/jobsData"


function JobsAds() {

  return (
    <div className='job-ads' style={{ padding: "12px" }}>
      <div className='container p-0' style={{ maxWidth: "1140px" }}>

        <JobsAdsTypesSmall data={data.bugun} />
        <JobsAdsTypesSmall data={data.uzaktan} />
        <JobsAdsTypesSmall data={data.partTime} />
        <JobsAdsTypesSmall data={data.yeniMezun} />
        <JobsAdsTypesSmall data={data.yonetici} />

        <JobsAdsCardMedium data={data.bugun.cards[0]} />


      </div>
    </div>
  )
}

export default JobsAds
