import React from 'react'
import JobsAdsTypesSmall from './JobsAdsTypesSmall'
import { data } from "../jobs-data/jobsData"


function JobsAds() {

  console.log(data);


  return (
    <div className='job-ads' style={{ padding: "12px" }}>

      <JobsAdsTypesSmall data={data.bugun} />
      <JobsAdsTypesSmall data={data.uzaktan} />
      <JobsAdsTypesSmall data={data.partTime} />
      <JobsAdsTypesSmall data={data.yeniMezun} />
      <JobsAdsTypesSmall data={data.yonetici} />


    </div>
  )
}

export default JobsAds
