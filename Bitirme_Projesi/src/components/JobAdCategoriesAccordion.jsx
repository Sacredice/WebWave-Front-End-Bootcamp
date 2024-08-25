import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import JobAdCategoryItem from './JobAdCategoryItem';
import "./accordionOverride.css"
import { sectorCategoryList } from "../jobs-data/jobAdCategoryData"

function JobAdCategoriesAccordion() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className='container px-0' style={{ maxWidth: "1140px" }}>
        <div className='container px-0' style={{ padding: "20px 0 8px 0"}}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={{ borderRadius: "0"}}>
              <Accordion.Header style={{ position: "relative" }}>Sektöre Göre İş İlanları<a style={{ position: "absolute", right: "52px", marginRight: "10px"}} href="https://www.kariyer.net/sektorlere-gore-ilanlar" target='_blank'>Tümünü Gör</a></Accordion.Header>
              <Accordion.Body className='px-0 pt-1'>

                <div className='d-none d-md-flex flex-wrap ps-4 pe-3 pt-3' style={{ borderTop: "1px solid rgb(228, 228, 228)"}}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link}/>
                  ))}
                </div>

                <div className='d-md-none' style={{ paddingLeft: "20px"}}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link}/>
                  ))}
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header style={{ position: "relative" }}>İllere Göre İş İlanları<a style={{ position: "absolute", right: "52px", marginRight: "10px"}} href="https://www.kariyer.net/illere-gore-ilanlar" target='_blank'>Tümünü Gör</a></Accordion.Header>
              <Accordion.Body className='px-0 pt-1'>

                <div className='d-flex flex-wrap ps-4 pe-3 pt-3' style={{ borderTop: "1px solid rgb(228, 228, 228)"}}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link}/>
                  ))}
                </div>

                <div className='d-md-none' style={{ paddingLeft: "20px"}}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link}/>
                  ))}
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header style={{ position: "relative" }}>Departmanlara Göre İş İlanları<a style={{ position: "absolute", right: "52px", marginRight: "10px"}} href="https://www.kariyer.net/departmanlara-gore-ilanlar" target='_blank'>Tümünü Gör</a></Accordion.Header>
              <Accordion.Body className='px-0 pt-1'>

                <div className='d-flex flex-wrap ps-4 pe-3 pt-3' style={{ borderTop: "1px solid rgb(228, 228, 228)"}}>
                 {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link}/>
                  ))}
                </div>

                <div className='d-md-none' style={{ paddingLeft: "20px"}}>
                 {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link}/>
                  ))}
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header style={{ position: "relative" }}>Pozisyonlara Göre İş İlanları<a style={{ position: "absolute", right: "52px", marginRight: "10px"}} href="" target='_blank'>Tümünü Gör</a></Accordion.Header>
              <Accordion.Body className='px-0 pt-1'>

                <div className='d-flex flex-wrap ps-4 pe-3 pt-3' style={{ borderTop: "1px solid rgb(228, 228, 228)"}}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link}/>
                  ))}
                </div>

                <div className='d-md-none' style={{ paddingLeft: "20px"}}>
                 {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link}/>
                  ))}
                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default JobAdCategoriesAccordion
