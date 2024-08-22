import React from 'react'
import SearchSection from '../components/SearchSection'
import AdCarousel from '../components/AdCarousel'
import PromotedJobs from '../components/PromotedJobs'
import JobsAds from '../components/JobsAds'

function Home() {
  return (
    <div>
      <SearchSection />
      <AdCarousel />
      <PromotedJobs />
      <JobsAds />
      <AdCarousel />
    </div>
  )
}

export default Home
