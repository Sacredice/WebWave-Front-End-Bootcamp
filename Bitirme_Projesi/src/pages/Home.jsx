import React from 'react'
import SearchSection from '../components/SearchSection'
import AdCarousel from '../components/AdCarousel'
import PromotedJobs from '../components/PromotedJobs'

function Home() {
  return (
    <div>
        <SearchSection />
        <AdCarousel />
        <PromotedJobs />
        <AdCarousel />
    </div>
  )
}

export default Home
