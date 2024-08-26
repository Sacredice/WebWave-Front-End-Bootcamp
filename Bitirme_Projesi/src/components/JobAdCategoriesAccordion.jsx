import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import JobAdCategoryItem from './JobAdCategoryItem';
import "./accordionOverride.css"
import { sectorCategoryList } from "../jobs-data/jobAdCategoryData"

function JobAdCategoriesAccordion() {
  const [showRest, setShowRest] = useState(false);
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className='container px-0' style={{ maxWidth: "1140px" }}>
        <div className='container px-0 ' style={{ padding: "20px 0 8px 0" }}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={{ borderRadius: "0" }}>
              <Accordion.Header style={{ position: "relative" }}>Sektöre Göre İş İlanları<a style={{ position: "absolute", right: "52px", marginRight: "10px" }} href="https://www.kariyer.net/sektorlere-gore-ilanlar" target='_blank'>Tümünü Gör</a></Accordion.Header>
              <Accordion.Body className='px-0 pt-1'>

                <div className='d-none d-md-flex flex-wrap ps-4 pe-3 pt-3' style={{ borderTop: "1px solid rgb(228, 228, 228)" }}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link} />
                  ))}
                </div>

                <div className='d-md-none' style={{ paddingLeft: "20px" }}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link} />
                  ))}
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header style={{ position: "relative" }}>İllere Göre İş İlanları<a style={{ position: "absolute", right: "52px", marginRight: "10px" }} href="https://www.kariyer.net/illere-gore-ilanlar" target='_blank'>Tümünü Gör</a></Accordion.Header>
              <Accordion.Body className='px-0 pt-1'>

                <div className='d-flex flex-wrap ps-4 pe-3 pt-3' style={{ borderTop: "1px solid rgb(228, 228, 228)" }}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link} />
                  ))}
                </div>

                <div className='d-md-none' style={{ paddingLeft: "20px" }}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link} />
                  ))}
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header style={{ position: "relative" }}>Departmanlara Göre İş İlanları<a style={{ position: "absolute", right: "52px", marginRight: "10px" }} href="https://www.kariyer.net/departmanlara-gore-ilanlar" target='_blank'>Tümünü Gör</a></Accordion.Header>
              <Accordion.Body className='px-0 pt-1'>

                <div className='d-flex flex-wrap ps-4 pe-3 pt-3' style={{ borderTop: "1px solid rgb(228, 228, 228)" }}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link} />
                  ))}
                </div>

                <div className='d-md-none' style={{ paddingLeft: "20px" }}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link} />
                  ))}
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header style={{ position: "relative" }}>Pozisyonlara Göre İş İlanları</Accordion.Header>
              <Accordion.Body className='px-0 pt-1'>

                <div className='d-flex flex-wrap ps-4 pe-3 pt-3' style={{ borderTop: "1px solid rgb(228, 228, 228)" }}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link} />
                  ))}
                </div>

                <div className='d-md-none' style={{ paddingLeft: "20px" }}>
                  {sectorCategoryList.map((item, index) => (
                    <JobAdCategoryItem key={index} textContent={item.category} href={item.link} />
                  ))}
                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className='container px-0 pb-4'>
          <strong style={{ display: "block", marginBottom: "20px", color: "rgb(51, 51, 51)" }}>Kariyer.net İş ilanları</strong>
          <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Dijital İK'nın öncüsü Kariyer.net, 1999 yılından bugüne Türkiye’nin en büyük istihdam platformu. Açık iş pozisyonlarından iş piyasasına dair iç görülere, kişisel gelişim odaklı çalışmalardan pozisyon - yetenek uyumuna kadar tüm deneyimini; mavi yakalıdan yönetici adaylarına, işverenden stajyer öğrenciye kadar herkese ulaştırma görevini üstleniyor. Öğrenim göreceğin üniversite, seçeceğin bölüm hakkındaki tüm bilgiye ve mezun olduktan sonra hayalindeki iş fırsatlarına da yine Kariyer.net ile ulaşmak çok kolay! </p>
          <strong style={{ display: "block", marginBottom: "20px", color: "rgb(51, 51, 51)" }}>Kariyer.net ile İş Bulma</strong>

          {!showRest &&
            <div>
              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>...</p>
              <div className='d-flex justify-content-center' >
                <button onClick={() => setShowRest(!showRest)} className=' devam-gor-button' style={{ border: "1px solid rgb(131, 22, 181)", borderRadius: "4px" }}><span>Devamını Gör</span><span><i className="bi bi-chevron-down" style={{ fontSize: "12px", marginLeft: "2px" }}></i></span></button>
              </div>
            </div>
          }
          {showRest &&
            <div>
              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Kariyer.net; iş arama, iş bulma, doğru yeteneğe ulaşma sürecinde 1999 yılından bugüne hem adayların hem de işverenlerin yanında olan Türkiye’nin en büyük istihdam platformu. Kariyer.net, farklı filtreleme özellikleriyle doğrudan aradığın özelliklerdeki iş ilanlarını sana sunuyor. Benzer şekilde kurumlar için en doğru niteliklere sahip adaylara da Kariyer.net‘ten ulaşılabiliyor. İş arama sürecinin zorluklarını doğru analiz eden ve bu amaçla dijital çözümlerini yenileyen Kariyer.net, kullanıcılarına fayda odaklı bir deneyim sunuyor. </p>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Kariyer.net ana sayfasını ziyaret ettiğin andan itibaren, geleceğe yönelik önemli planları yapmak için konunun uzmanları tarafından doğru adreslere yönlendiriliyorsun. Çalışmak istediğin pozisyon için ana sayfadaki “iş ara” sekmesine tıkladığında karşına o an için açık olan, on binlerce pozisyonun bilgisi çıkıyor. Bu bilgiler içinden çalışmak istediğin şehir, sektör, pozisyon seviyesi, departman, çalışma şekli, eğitim seviyesi gibi özellikleri filtreleyebiliyorsun. Ayrıca çalışmak istediğin şirketin özellikleri, ilan dili, deneyim süresi gibi özel ayrıntılar için de filtre uygulayabiliyorsun.  </p>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Kariyer.net, iş arayanların doğru tercihler yapmasını ve alanında yetkin olan çalışan arayışındaki firmaların da başarı grafiklerini yükseltecek yeteneklere ulaşmasını amaçlıyor. Kariyer.net ilan sayfaları dışında çok farklı başlıklarda da kullanıcılarının yanında oluyor. İş arama platformları arasında uzun yıllara dayanan tecrübesiyle özel bir konuma sahip olan Kariyer.net, çok kapsamlı bir rehberlik hizmeti gerçekleştiriyor. </p>

              <strong style={{ display: "block", marginBottom: "20px", color: "rgb(51, 51, 51)" }}>Kariyer.net ile Sana Uygun İş Fırsatlarını Değerlendir</strong>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Kariyer fırsatları konusunda sana önemli kapıları açan Kariyer.net’te; uzman, yönetici, yeni mezun ve mavi yakalı başlıkları altında binlerce iş ilanına ulaşabilirsin. Bu <a style={{ textDecoration: "none", color: "rgb(131, 22, 181)" }} href="https://www.kariyer.net/is-ilanlari">iş ilanları</a> dışında ayrıca part-time iş ilanlarına ve stajyer iş ilanlarına da erişebilirsin. Ayrıca kariyerin adına alacağın tüm kararlarda sana yardımcı olacak bilgilere, Pozisyon Rehberi, Üniversite Rehberi ve Kariyer Rehberi vb. sayfalardan ulaşabilirsin. Kariyer Rehberi sayfasında; özgeçmiş hazırlama, iş arama, mülakat, iş hayatı gibi konularda önemli kariyer tavsiyeleri bulabilirsin. Pozisyon Rehberi’nde pozisyonlarla, Üniversite Rehberi’nde ise üniversite ve bölümlerle ilgili en çok merak edilen konularda önemli bilgilere hızla ulaşabilirsin. </p>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Kariyer.net iş başvurusu konusunda sana sunduğu kapsamlı seçeneklerde tüm ayrıntıları düşünüyor. Uygun iş fırsatları için sana öneriler sunarken, bu önerileri sahip olduğun nitelikler doğrultusunda değerlendirmeni de sağlıyor. Türkiye’nin tüm bölgelerinde, farklı birçok sektörden mesleğine uygun binlerce ilanı listeleyen Kariyer.net, ayrıca <a style={{ textDecoration: "none", color: "rgb(131, 22, 181)" }} href="https://www.kariyer.net/is-ilanlari/yurtdisi">yurtdışı iş ilanları</a> ile yeni ufuklar için sana imkan sunuyor.  </p>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>İş bulmak için güvenle deneyimine başvuracağın Kariyer.net’ten ayrıca eleman arama amacıyla da yararlanılabilir. Sektörün öncü şirketlerinin doğru adayı Kariyer.net’te aramaları nedeniyle farklı sektörden pek çok şirketin iş ilanlarına tek bir yerden ulaşabilirsin. Ayrıca Türkiye’nin en büyük özgeçmiş havuzundan kriterlere uygun adayları listelemek de çok kolay. </p>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>İş başvurusu yapan binlerce kişi arasından, doğrudan aranılan yetenekle işverenleri buluşturan filtreleme seçenekleri, Kariyer.net’i iş arama siteleri arasında bir adım öne çıkarıyor.</p>

              <strong style={{ display: "block", marginBottom: "20px", color: "rgb(51, 51, 51)" }}>Kariyer Yolunda İlk Günden İtibaren Yanında: Kariyer.net Üniversite Rehberi</strong>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Kariyer.net, kariyer rotasını en baştan belirleyen üniversite tercihinde de adayların yanında oluyor. Henüz kariyerin ile ilgili karar vermediysen ve bu süreçteki en önemli adım olan üniversite tercih dönemindeysen Kariyer.net Üniversite Rehberi tüm sorularına yanıt veriyor. Tercih günleri, güncel taban puanları, tercih motoru, işverenlerin tercihleri, <a style={{ textDecoration: "none", color: "rgb(131, 22, 181)" }} href="https://www.kariyer.net/universiteler">üniversiteler</a>, bölümler ve ilgili pozisyonlar hakkındaki tüm bilgilere bu sayfalardan erişebilirsin.  </p>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>İş bulma konusundaki arayışından önce, sahip olmak istediğin meslek, öğrenim görmek istediğin üniversite ve bu üniversitenin sahip olduğu imkanlar, <a style={{ textDecoration: "none", color: "rgb(131, 22, 181)" }} href="https://www.kariyer.net/bolumler">üniversite bölümleri</a>, mezuniyet sonrası seni bekleyenler konusunda Kariyer Rehberi’ni inceleyebilirsin. <a style={{ textDecoration: "none", color: "rgb(131, 22, 181)" }} href="https://www.kariyer.net/pozisyonlar">Meslekler</a>  konusundaki ayrıntılı ve güncel bilgilerle kariyerine yön verebilirsin.  </p>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Hayalindeki mesleğin ne olduğunu, hangi üniversitelerde bu mesleğe ilişkin bölümler bulunduğunu Üniversite Rehberi’nde yer alan pozisyonlar başlığı altında görebilirsin. Özel grafikler ve oranlarla, çalışmak istediğin pozisyona giden süreçteki tüm bilgileri ayrıntılı bir şekilde değerlendirebilirsin.</p>

              <strong style={{ display: "block", marginBottom: "20px", color: "rgb(51, 51, 51)" }}>Kariyer.net ile En Güncel İş İlanlarından Haberdar Ol</strong>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Kariyer Rehberi, Pozisyon Rehberi ve Üniversite Rehberi gibi sayfalardan özel bilgilere güncel bir şekilde ulaşabilmenin yanı sıra özgeçmişine uygun, en yeni iş fırsatlarını da Kariyer.net “iş bul” sekmesine tıkladığın andan itibaren görebilirsin. Aradığın pozisyona ilişkin tüm ayrıntıları görmek için iş ilanlarını inceleyebilir, hiçbir ilanı kaçırmamak için iş alarmı kurabilirsin. Böylece aradığın pozisyona ilişkin yeni ilanlardan da anında haberdar olabilirsin. </p>

              <p className='mb-3' style={{ color: "rgb(51, 51, 51)" }}>Türkiye’nin en büyük istihdam platformu Kariyer.net, insan kaynakları sektörüne dair tüm gelişmeleri yakından takip ediyor. İş arayanlarla işverenleri buluşturan platformumuz,  meslek yaşamına atacağın ilk adımdan, kariyerini geliştirmek isteyeceğin tüm süreçlere kadar sana rehberlik ediyor. Meslek ve üniversite seçiminde aklına takılan sorular, staj imkanları konusunda merak ettiklerin, ilk iş görüşmesi, özgeçmiş hazırlamada dikkat edeceğin noktalar ve daha fazlası için sana yol gösterici bir rehber oluyor</p>

            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default JobAdCategoriesAccordion
