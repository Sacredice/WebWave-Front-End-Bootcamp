import React from 'react'
import JobsAdsCardsListSmall from './JobsAdsCardsListSmall'
import JobsAdsCardsListMedium from './JobsAdsCardsListMedium'
import JobsAdsCardsListLarge from './JobsAdsCardsListLarge'
import { data } from "../jobs-data/jobsData"


function JobsAds() {

  return (
    <div className='container job-ads px-0' style={{ padding: "12px 0" }}>
      <div className='container p-0' style={{ maxWidth: "1140px" }}>

        <JobsAdsCardsListSmall data={data?.bugun} />
        <JobsAdsCardsListSmall data={data?.uzaktan} />
        <JobsAdsCardsListSmall data={data?.partTime} />
        <JobsAdsCardsListSmall data={data?.yeniMezun} />
        <JobsAdsCardsListSmall data={data?.yonetici} />

      <div className='d-lg-none'>
        <JobsAdsCardsListMedium data={data?.bugun} />
        <JobsAdsCardsListMedium data={data?.uzaktan} />
        <JobsAdsCardsListMedium data={data?.partTime} />
        <JobsAdsCardsListMedium data={data?.yeniMezun} />
        <JobsAdsCardsListMedium data={data?.yonetici} />
      </div>

      <div className='d-none d-lg-block'>
        <JobsAdsCardsListLarge data={data} />
      </div>


      </div>
    </div>
  )
}

export default JobsAds
