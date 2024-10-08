import React from 'react'
import SearchSection from '../components/SearchSection'
import AdCarousel from '../components/AdCarousel'
import PromotedJobs from '../components/PromotedJobs'
import JobsAds from '../components/JobsAds'
import CareerPlan from '../components/CareerPlan'
import CareerGuide from '../components/CareerGuide'
import JobAdCategoriesAccordion from '../components/JobAdCategoriesAccordion'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
      <SearchSection />
      <AdCarousel />
      <PromotedJobs />
      <JobsAds />
      <CareerPlan />
      <CareerGuide />
      <JobAdCategoriesAccordion />
      <Footer />
    </div>
  )
}

export default Home
