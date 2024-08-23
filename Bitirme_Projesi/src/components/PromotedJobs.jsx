import Carousel from 'react-bootstrap/Carousel';
import PromotedJobSmallCard from './PromotedJobSmallCard';
import PromotedJobMediumCard from './PromotedJobMediumCard';

function PromotedJobs() {

  return (
    <div className='px-3 promoted-jobs-container'>
      <div className='container p-0' style={{ maxWidth: "1140px" }}>
        <div className='container px-0'>

          {/* MD Mediumdan 768px den küçük */}
          <div className='container d-md-none px-0 pb-3'>
            <p style={{ fontSize: "16px", marginBottom: "16px", fontWeight: "300" }}>ÖNE ÇIKAN İLANLAR</p>
            <Carousel indicators touch interval={null}>
              <Carousel.Item>
                <div>
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul(Tümü)"} />
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img2.webp"} job={"Satış Uzmanı / İzmir"} company={"Viennalife"} location={"İzmir"} />
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img3.webp"} job={"Me Journey Program"} company={"Mitsubishi"} location={"İstanbul(Asya)"} />
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img4.webp"} job={"Sr. Financial Reporting Specialist"} company={"Kariyer.net"} location={"İstanbul(Asya)"} />
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img5.gif"} job={"Güneşli Şube Ticari Bankacılık Portföy Yöneticisi"} company={"Burgan Bank"} location={"İstanbul(Avr.)"} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img6.webp"} job={"E-Ticaret Kategori Uzmanı"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} />
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img7.webp"} job={"Task Force Spezialist"} company={"Ün-pa"} location={"İstanbul(Tümü) + 79 il daha"} />
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img8.webp"} job={"Ön Muhasebe Elemanı"} company={"Gedik Piliç"} location={"İzmir"} />
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img9.webp"} job={"Birikim Güvence Danışmanı - İstanbul"} company={"Agesa"} location={"İstanbul(Tümü)"} />
                  <PromotedJobSmallCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img10.webp"} job={"Satış Pazarlama Temsilcisi"} company={"İpa Grup"} location={"Ankara"} />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className='container d-none d-md-block px-0 py-4'>
          <p className='d-xl-none' style={{ fontSize: "20px", marginBottom: "16px", fontWeight: "300" }}>ÖNE ÇIKAN İLANLAR</p>
          <p className='d-none d-xl-block' style={{ fontSize: "22px", marginBottom: "16px", fontWeight: "300" }}>ÖNE ÇIKAN İLANLAR</p>
          {/* MD Medium 768px <= ile < 992px arası */}
          <Carousel className='d-lg-none' controls={false} indicators={null} touch interval={null} >
            <Carousel.Item>
              <div className='d-flex justify-content-between' style={{ width: "720px", height: "242px" }}>
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Tümü)"} width={"230px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img2.webp"} job={"Satış Uzmanı / İzmir"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İzmir"} width={"230px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img3.webp"} job={"Me Journey Program"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"230px"} />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='d-flex justify-content-between d-lg-none' style={{ width: "720px", height: "242px" }}>
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img4.webp"} job={"Sr. Financial Reporting Specialist"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"230px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img5.gif"} job={"Güneşli Şube Ticari Bankacılık Portföy Yöneticisi"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Avr.)"} width={"230px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img6.webp"} job={"E-Ticaret Kategori Uzmanı"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"230px"} />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='d-flex justify-content-between d-lg-none' style={{ width: "720px", height: "242px" }}>
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img7.webp"} job={"Task Force Spezialist"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"230px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img8.webp"} job={"Ön Muhasebe Elemanı"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İzmir"} width={"230px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img9.webp"} job={"Birikim Güvence Danışmanı - İstanbul"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Tümü)"} width={"230px"} />
              </div>
            </Carousel.Item>
          </Carousel>

          {/* LG Large 992px ile 1200px Arası  */}
          <Carousel className='d-none d-lg-block d-xl-none' indicators={null} touch interval={null} >
            <Carousel.Item>
              <div className='d-flex justify-content-between' style={{ width: "950px", height: "242px" }}>
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Tümü)"} width={"172px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img2.webp"} job={"Satış Uzmanı / İzmir"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İzmir"} width={"172px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img3.webp"} job={"Me Journey Program"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"172px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img4.webp"} job={"Sr. Financial Reporting Specialist"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"172px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img5.gif"} job={"Güneşli Şube Ticari Bankacılık Portföy Yöneticisi"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Avr.)"} width={"172px"} />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='d-flex justify-content-between' style={{ width: "950px", height: "242px" }}>
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img6.webp"} job={"E-Ticaret Kategori Uzmanı"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"172px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img7.webp"} job={"Task Force Spezialist"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"172px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img8.webp"} job={"Ön Muhasebe Elemanı"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İzmir"} width={"172px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img9.webp"} job={"Birikim Güvence Danışmanı - İstanbul"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Tümü)"} width={"172px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img10.webp"} job={"Satış Pazarlama Temsilcisi"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"Ankara"} width={"172px"} />
              </div>
            </Carousel.Item>
          </Carousel>

          {/* XL XLarge - 1200px veya daha büyük */}
          <Carousel className='d-none d-xl-block' indicators={null} touch interval={null} >
            <Carousel.Item>
              <div className='d-flex justify-content-between' style={{ minWidth: "1140px", height: "242px", width: "100%" }}>
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Tümü)"} width={"206px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img2.webp"} job={"Satış Uzmanı / İzmir"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İzmir"} width={"206px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img3.webp"} job={"Me Journey Program"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"206px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img4.webp"} job={"Sr. Financial Reporting Specialist"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"206px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img5.gif"} job={"Güneşli Şube Ticari Bankacılık Portföy Yöneticisi"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Avr.)"} width={"206px"} />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='d-flex justify-content-between' style={{ minWidth: "1140px", height: "242px", width: "100%" }}>
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img6.webp"} job={"E-Ticaret Kategori Uzmanı"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"206px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img7.webp"} job={"Task Force Spezialist"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Asya)"} width={"206px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img8.webp"} job={"Ön Muhasebe Elemanı"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İzmir"} width={"206px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img9.webp"} job={"Birikim Güvence Danışmanı - İstanbul"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"İstanbul(Tümü)"} width={"206px"} />
                <PromotedJobMediumCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img10.webp"} job={"Satış Pazarlama Temsilcisi"} company={"Aabir Yayın Dağıtım Danışmanlık"} location={"Ankara"} width={"206px"} />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

      </div>
    </div>
  )
}

export default PromotedJobs
