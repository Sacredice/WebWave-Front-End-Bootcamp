import React from 'react'
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

function CareerGuideCards() {
  return (
    <div>
      <div className='container d-sm-none'>
        <p>KARİYER REHBERİ</p>

        <div className='d-flex justify-content-between'>

          {cardsList.map(card => (
            <CareerGuideCard key={card.cardText} card={card} />
          ))}
        </div>
      </div>
      <div className='container d-none d-sm-block'>
        <p>KARİYER REHBERİ</p>

        <div className='d-flex justify-content-between'>

          {cardsList.map(card => (
            <CareerGuideCard key={card.cardText} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CareerGuideCards
