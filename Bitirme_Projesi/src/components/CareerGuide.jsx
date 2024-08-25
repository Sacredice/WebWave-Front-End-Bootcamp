import React from 'react'
import CareerGuideCards from './CareerGuideCards'
import CareerGuideCard from './CareerGuideCard'

const cardsList = [
  {
    imgSrc: "https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2024/08/techcareer.net_-300x200.png",
    cardText: "Techcareer.net senior teknoloji profesyonellerini arıyor!",
  },
  {
    imgSrc: "https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2023/09/is_icin_tasinmak-300x200.jpg",
    cardText: "İşin için yaşadığın yeri değiştirir misin?",
  },
  {
    imgSrc: "https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2024/08/techcareer-300x200.png",
    cardText: "Pendik Yazılım Odaklı Teknoloji Merkezi’nde Ücretsiz Eğitim Programı Başlıyor!",
  },
  {
    imgSrc: "https://www.kariyer.net/ik-blog/wp-content/uploads/2024/08/yan_haklarda_cesitlilik-300x200.jpg",
    cardText: "Çalışanlar, yan haklarda çeşitlilik bekliyor?",
  },
]

function CareerGuide() {
  return (
    <div>
      <hr className='d-md-none' />
      <div className='container px-0' style={{ maxWidth: "1140px" }}>
        <div className='container d-sm-none px-3'>
          <p style={{ fontSize: "16px", fontWeight: "300" }}>KARİYER REHBERİ</p>
          <div style={{ maxWidth: "540px", overflowX: "scroll" }}>
            <div className='d-flex justify-content-between' style={{ width: "850px" }}>
              {cardsList.map(card => (
                <CareerGuideCard key={card.cardText} card={card} />
              ))}
            </div>
          </div>
          <a href="https://www.kariyer.net/kariyer-rehberi/" style={{ color: "rgb(131, 22, 181)", fontSize: "14px", fontWeight: "500", textDecoration: "none", display: "block", marginTop: "8px" }}>Tümünü Gör</a>
        </div>

        <div className='container d-none d-sm-block d-md-none px-0'>
          <p style={{ fontSize: "20px", fontWeight: "300" }}>KARİYER REHBERİ</p>
          <div style={{ width: "540px", overflowX: "scroll" }}>

            <div className='d-flex justify-content-between' style={{ width: "800px" }}>
              {cardsList.map(card => (
                <CareerGuideCard key={card.cardText} card={card} />
              ))}
            </div>

          </div>
          <a href="https://www.kariyer.net/kariyer-rehberi/" style={{ color: "rgb(131, 22, 181)", fontSize: "14px", fontWeight: "500", textDecoration: "none", display: "block", marginTop: "8px" }}>Tümünü Gör</a>
        </div>

        <div className='container d-none d-md-block d-lg-none px-0 mt-4 mb-3'>
          <div className='d-flex justify-content-between'>
            <p style={{ fontSize: "20px", fontWeight: "300" }}>KARİYER REHBERİ</p>
            <a href="" style={{ color: "rgb(131, 22, 181)", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>Tümünü Gör</a>
          </div>
          <div style={{ width: "720px", overflowX: "scroll" }}>
            <div className='d-flex justify-content-between' style={{ width: "1020px" }}>
              {cardsList.map(card => (
                <CareerGuideCard key={card.cardText} card={card} />
              ))}
            </div>
          </div>
        </div>

        <div className='container d-none d-lg-block d-xl-none px-0 mt-4 mb-3'>
          <div className='d-flex justify-content-between'>
            <p style={{ fontSize: "20px", fontWeight: "300" }}>KARİYER REHBERİ</p>
            <a href="https://www.kariyer.net/kariyer-rehberi/" style={{ color: "rgb(51, 51, 51)", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>Tümünü Gör</a>
          </div>
          <div style={{ width: "960px" }}>
            <div className='d-flex justify-content-between'>
              {cardsList.map(card => (
                <CareerGuideCard key={card.cardText} card={card} />
              ))}
            </div>
          </div>
        </div>

        <div className='container d-none d-xl-block px-0 mt-4 mb-3'>
          <div className='d-flex justify-content-between'>
            <p style={{ fontSize: "22px", fontWeight: "300" }}>KARİYER REHBERİ</p>
            <a href="https://www.kariyer.net/kariyer-rehberi/" style={{ color: "rgb(131, 22, 181)", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>Tümünü Gör</a>
          </div>
          <div>
            <div className='d-flex justify-content-between' style={{ width: "1140px"}}>
              {cardsList.map(card => (
                <CareerGuideCard key={card.cardText} card={card} />
              ))}
            </div>
          </div>
        </div>

      </div>
      <hr className='d-md-none' />
    </div>
  )
}

export default CareerGuide
