import React from 'react'
import SearchSection from '../components/SearchSection'
import AdCarousel from '../components/AdCarousel'
import PromotedJobs from '../components/PromotedJobs'
import JobsAds from '../components/JobsAds'
import CareerPlan from '../components/CareerPlan'

function Home() {
  return (
    <div>
      <SearchSection />
      <AdCarousel />
      <PromotedJobs />
      <JobsAds />
      <CareerPlan />
      <AdCarousel />
    </div>
  )
}

export default Home
