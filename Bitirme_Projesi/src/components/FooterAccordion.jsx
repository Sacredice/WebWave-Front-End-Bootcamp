import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./footerAccordionOverride.css"

function FooterAccordion() {
  return (
    <div className='footer-accordion d-lg-none'>
      <Accordion className='footer-accordion'>
        <Accordion.Item className='footer-accordion' style={{ backgroundColor: "#8316B5" }} eventKey="0">
          <Accordion.Header className='footer-accordion px-0 mx-0' style={{ backgroundColor: "#8316B5", color: "#FFF" }} >SİTE KULLANIMI<i className="bi bi-chevron-down item-open" style={{ position: "absolute", right: "0", fontSize: "16px", paddingRight: "24px" }}></i><i className="bi bi-chevron-up item-close" style={{ position: "absolute", right: "0", fontSize: "16px", paddingRight: "24px" }}></i></Accordion.Header>
          <Accordion.Body className='footer-accordion' style={{ background: "#7512A2", color: "#FFF" }}>
            <div className='ms-2'>
              <a href="https://www.kariyer.net/genel-kosullar" style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }}>Genel Koşullar</a>
            </div>


          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header style={{ color: "#FFF" }}>VERİ POLİTİKAMIZ<i className="bi bi-chevron-down item-open" style={{ position: "absolute", right: "0", fontSize: "16px", paddingRight: "24px" }}></i><i className="bi bi-chevron-up item-close" style={{ position: "absolute", right: "0", fontSize: "16px", paddingRight: "24px" }}></i></Accordion.Header>
          <Accordion.Body className='footer-accordion' style={{ background: "#7512A2", color: "#FFF" }}>
            <div className='ms-2'>
              <a href="https://www.kariyer.net/veri-politikamiz/aday-uyelik-aydinlatma-metni" style={{ display: "block", textDecoration: "none", color: "#FFF", fontSize: "12px", marginBottom: "3px" }}>Aday Üyelik Aydınlatma Metni</a>
              <a href="https://www.kariyer.net/veri-politikamiz/calisan-aydinlatma-metni" style={{ display: "block", textDecoration: "none", color: "#FFF", fontSize: "12px", marginBottom: "3px" }}>Çalışan Aydınlatma Metni</a>
              <a href="https://www.kariyer.net/veri-politikamiz/isveren-musteri-temsilcisi-aydinlatma-metni" style={{ display: "block", textDecoration: "none", color: "#FFF", fontSize: "12px", marginBottom: "3px" }}>İşveren Müşteri Temsilcisi Aydınlatma Metni</a>
              <a href="https://www.kariyer.net/veri-politikamiz/tedarikci-is-ortagi-temsilcisi-aydinlatma-metni" style={{ display: "block", textDecoration: "none", color: "#FFF", fontSize: "12px", marginBottom: "3px" }}>Tedarikçi/İş Ortağı Temsilcisi Aydınlatma Metni</a>
              <a href="https://www.kariyer.net/veri-politikamiz/bilgi-guvenligi-politikasi" style={{ display: "block", textDecoration: "none", color: "#FFF", fontSize: "12px", marginBottom: "3px" }}>Bilgi Güvenliği Politikası</a>
              <a href="https://www.kariyer.net/veri-politikamiz/cerez-politikasi" style={{ display: "block", textDecoration: "none", color: "#FFF", fontSize: "12px" }}>Çerez Politikası</a>

            </div>


          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>YARDIM<i className="bi bi-chevron-down item-open" style={{ position: "absolute", right: "0", fontSize: "16px", paddingRight: "24px" }}></i><i className="bi bi-chevron-up item-close" style={{ position: "absolute", right: "0", fontSize: "16px", paddingRight: "24px" }}></i></Accordion.Header>
          <Accordion.Body className='footer-accordion' style={{ background: "#7512A2", color: "#FFF" }}>



          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header style={{ position: "relative" }}>HAKKIMIZDA<i className="bi bi-chevron-down item-open" style={{ position: "absolute", right: "0", fontSize: "16px", paddingRight: "24px" }}></i><i className="bi bi-chevron-up item-close" style={{ position: "absolute", right: "0", fontSize: "16px", paddingRight: "24px" }}></i></Accordion.Header>
          <Accordion.Body className='footer-accordion' style={{ background: "#7512A2", color: "#FFF" }}>



          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default FooterAccordion
