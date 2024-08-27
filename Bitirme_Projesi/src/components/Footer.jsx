import React from 'react'
import FooterAccordion from './FooterAccordion';

function Footer() {
  return (
    <div style={{ backgroundColor: "#8316B5" }}>
      <div className='container px-0' style={{ maxWidth: "1140px" }}>
        <div className='container px-0'>
          <div className='d-flex d-sm-none'>

            <div className="d-sm-none flex-grow-1">
              <div className='d-flex flex-column align-items-center'>
                <p className='mt-4 mb-3' style={{ display: "inline-block", color: "#FFF", }}>Bizi Takip Edin</p>
                <div className='mb-3' style={{ fontSize: "18px" }}>
                  <a href="" style={{ color: "#FFF", marginRight: "10px" }}><i className="bi bi-facebook" style={{ fontSize: "18px" }}></i></a>
                  <a href="" style={{ color: "#FFF", marginRight: "10px" }}><i className="bi bi-twitter-x" style={{ fontSize: "18px" }}></i></a>
                  <a href="" style={{ color: "#FFF", marginRight: "10px" }}><i className="bi bi-instagram" style={{ fontSize: "18px" }}></i></a>
                  <a href="" style={{ color: "#FFF", marginRight: "10px" }}><i className="bi bi-youtube" style={{ fontSize: "18px" }}></i></a>
                </div>
              </div>
            </div>
            <img className='d-block' style={{ width: "62.2px", height: "93px" }} src="https://aday-spage.mncdn.com/Knet_img_gptw-footer-new.25aa646.png?v=89042" alt="" />
          </div>


          <div className='d-none d-sm-flex d-lg-none justify-content-between'>

            <div className="d-none d-sm-block">
              <p className='mt-4 mb-3' style={{ display: "inline-block", color: "#FFF", }}>Bizi Takip Edin</p>
              <div className='mb-3' style={{ fontSize: "18px" }}>
                <a href="" style={{ color: "#FFF", marginRight: "10px" }}><i className="bi bi-facebook" style={{ fontSize: "18px" }}></i></a>
                <a href="" style={{ color: "#FFF", marginRight: "10px" }}><i className="bi bi-twitter-x" style={{ fontSize: "18px" }}></i></a>
                <a href="" style={{ color: "#FFF", marginRight: "10px" }}><i className="bi bi-instagram" style={{ fontSize: "18px" }}></i></a>
                <a href="" style={{ color: "#FFF", marginRight: "10px" }}><i className="bi bi-youtube" style={{ fontSize: "18px" }}></i></a>
              </div>
            </div>
            <img className='d-block' style={{ width: "62.2px", height: "93px" }} src="https://aday-spage.mncdn.com/Knet_img_gptw-footer-new.25aa646.png?v=89042" alt="" />
          </div>
          <FooterAccordion />

          {/* xs <576px */}
          <div className='d-flex flex-column d-sm-none'>
            <div className='d-flex flex-column align-items-center' style={{ color: "#FFF" }}>
              <a style={{ display: 'inline-block' }} href="">
                <img style={{ display: "block", width: "101px", height: "15px" }} src="https://aday-spage.mncdn.com/Knet_img_KnetLogoFooter.09751fb.png?v=89042" alt="" />
              </a>
              <p className='mb-2' style={{ fontSize: "11px", fontWeight: "400" }}>Copyright &copy; 1999-2024 Kariyer.net</p>
            </div>
            <div className='d-flex justify-content-center'>
              <a href=""><img style={{ display: "block", width: "110px", height: "32px" }} src="https://aday-spage.mncdn.com/Knet_img_app-store.0f13ed4.svg?v=89042" alt="" /></a>
              <a href=""><img style={{ display: "block", width: "110px", height: "32px" }} src="https://aday-spage.mncdn.com/Knet_img_google-play.f2ca834.png?v=89042" alt="" /></a>
            </div>
          </div>

          <div className='d-flex flex-column align-items-center d-sm-none mt-3'>
            <div className='d-flex justify-content-center align-items-center' style={{ width: "265px" }}>
              <p className='mb-0' style={{ color: "#FFF", fontSize: "11px", textWrap: "nowrap" }}>Kariyer.net bir&nbsp;<a style={{ display: "inline-block", margin: "0 3px" }} href="http://localhost:5173/"><img src="https://aday-spage.mncdn.com/Knet_img_ilab-logo.afbe989.svg?v=89042" alt="" /></a>&nbsp;grup şirketidir
              </p>
            </div>
            <div className='d-flex mt-2' style={{ padding: "0 16px", width: "100%" }}>
              <div className='d-flex flex-grow-1' style={{ width: "245.5px" }}>
                <ul className='d-flex justify-content-center flex-wrap px-0' style={{ listStyleType: "none" }}>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.arabam.com/">Arabam.com -&nbsp;
                  </a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.chemorbis.com/tr/">ChemOrbis -&nbsp;</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.cimri.com/">Cimri.com -</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.emlakjet.com/">Emlakjet -&nbsp;</a>
                  </li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.hangikredi.com/">Hangikredi.com -&nbsp;</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.neredekal.com/">Neredekal.com</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.sigortam.net/">Sigortam.net -&nbsp;</a>
                  </li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://tr.steelorbis.com/">SteelOrbis</a></li>
                </ul>
              </div>
            </div>
          </div>


          {/* sm-md */}
          <div className='d-none d-sm-flex d-lg-none mt-3'>
            <div className='flex-grow-1' style={{ color: "#FFF" }}>
              <a style={{ display: 'inline-block' }} href="">
                <img style={{ display: "block", width: "101px", height: "15px" }} src="https://aday-spage.mncdn.com/Knet_img_KnetLogoFooter.09751fb.png?v=89042" alt="" />
              </a>
              <p style={{ fontSize: "11px", fontWeight: "400" }}>Copyright &copy; 1999-2024 Kariyer.net</p>
            </div>
            <div className='flex-grow-1 d-flex justify-content-end'>
              <a href=""><img style={{ display: "block", width: "110px", height: "32px" }} src="https://aday-spage.mncdn.com/Knet_img_app-store.0f13ed4.svg?v=89042" alt="" /></a>
              <a href=""><img style={{ display: "block", width: "110px", height: "32px" }} src="https://aday-spage.mncdn.com/Knet_img_google-play.f2ca834.png?v=89042" alt="" /></a>
            </div>
          </div>

          <div className='d-none d-sm-block d-lg-none'>
            <div className='d-flex mt-3'>
              <div className='flex-grow-1' style={{ width: "245.5px" }}>
                <ul className='d-flex flex-wrap px-0' style={{ listStyleType: "none" }}>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.arabam.com/">Arabam.com -&nbsp;
                  </a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.chemorbis.com/tr/">ChemOrbis -&nbsp;</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.cimri.com/">Cimri.com -</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.emlakjet.com/">Emlakjet -&nbsp;</a>
                  </li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.hangikredi.com/">Hangikredi.com -&nbsp;</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.neredekal.com/">Neredekal.com</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.sigortam.net/">Sigortam.net -&nbsp;</a>
                  </li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://tr.steelorbis.com/">SteelOrbis</a></li>

                </ul>
              </div>
              <div className='flex-grow-1 d-flex justify-content-end align-items-center' style={{ width: "265px" }}>
                <p style={{ color: "#FFF", fontSize: "11px", textWrap: "nowrap" }}>Kariyer.net bir&nbsp;<a style={{ display: "inline-block", margin: "0 3px" }} href="http://localhost:5173/"><img src="https://aday-spage.mncdn.com/Knet_img_ilab-logo.afbe989.svg?v=89042" alt="" /></a>&nbsp;grup şirketidir
                </p>
              </div>
            </div>
          </div>

          {/* lg */}
          <div className='d-none d-lg-block'>
            <div className='d-flex'>
              <div className='flex-grow-1' style={{ marginTop: "48px " }}>

                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  <li style={{ color: "#FFF", fontSize: "12px", fontWeight: "700" }}>SİTE KULLANIMI</li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="">Genel Koşullar
                  </a></li>
                </ul>

              </div>
              <div className='flex-grow-1' style={{ marginTop: "48px " }}>

                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  <li style={{ color: "#FFF", fontSize: "12px", fontWeight: "700", marginBottom: "8px" }}>VERİ POLİTİKAMIZ</li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400", textWrap: "wrap" }} href="https://www.kariyer.net/veri-politikamiz/aday-uyelik-aydinlatma-metni">Aday Üyelik Aydınlatma Metni</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/veri-politikamiz/calisan-aydinlatma-metni">Çalışan Aydınlatma Metni</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="">İşveren Müşteri Temsilcisi</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="">Aydınlatma Metni</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="">Tedarikçi/İş Ortağı</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="">Temsilcisi Aydınlatma Metni</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="">Bilgi Güvenliği Politikası</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="">Metni</a></li>
                </ul>

              </div>
              <div className='flex-grow-1' style={{ marginTop: "48px " }}>

                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  <li style={{ color: "#FFF", fontSize: "12px", fontWeight: "700", marginBottom: "8px" }}>YARDIM</li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/yardim#bize-ulasin">Sorum Var</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/yardim#bize-ulasin">Önerim Var</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/yardim">Sık Sorulan Sorular</a></li>
                </ul>

              </div>
              <div className='flex-grow-1' style={{ marginTop: "48px " }}>

                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  <li style={{ color: "#FFF", fontSize: "12px", fontWeight: "700", marginBottom: "8px" }}>HAKKIMIZDA</li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/kurumsal/hakkimizda">Hakkımızda</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/isveren/reklam-verin?utm_source=kariyer.net&utm_medium=referral&utm_campaign=header">Reklam Verin</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/iletisim">İletişim</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/eleman-arama/is-ilani-ver/">İlan Satın Al</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/kariyer-rehberi/">Kariyer Rehberi</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.kariyer.net/ik-blog/">İK Blog</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://isinolsun.com/">İşin Olsun</a></li>
                </ul>

              </div>
              <div className='flex-grow-1' style={{ marginTop: "48px " }}>

                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  <li style={{ color: "#FFF", fontSize: "12px", fontWeight: "700", marginBottom: "8px" }}>SOSYAL MEDYA</li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.facebook.com/kariyernet"><i className="bi bi-facebook" style={{ fontSize: "16px" }}></i> Facebook</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://twitter.com/kariyernet"><i className="bi bi-twitter-x" style={{ fontSize: "16px" }}></i> Twitter</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.instagram.com/kariyernet/?hl=tr"><i className="bi bi-instagram" style={{ fontSize: "16px" }}></i> Instagram</a></li>
                  <li ><a style={{ display: "inline-block", color: "#FFF", textDecoration: "none", fontSize: "12px", fontWeight: "400" }} href="https://www.youtube.com/channel/UCQo1OPvV4Kt8pvF88a6QoKQ"><i className="bi bi-youtube" style={{ fontSize: "16px" }}></i> Youtube</a></li>
                </ul>

              </div>
              <div className='d-flex justify-content-center' style={{ width: "101px" }}>
                <img style={{ display: "block", width: "82.5px", height: "123px" }} src="https://aday-spage.mncdn.com/Knet_img_gptw-footer-new.25aa646.png?v=89042" alt="" />
              </div>

            </div>
            <div className='d-flex justify-content-end' style={{ color: "#FFF" }}>
              <div className='d-flex align-items-center'>
                <p style={{ fontSize: "12px", fontWeight: "700", marginBottom: "0", marginRight: "16px" }}>Kariyer.net ile İş Cebinizde</p>
              </div>
              <a style={{ display: "inline-block", marginRight: "5px" }} href=""><img style={{ width: "124px", height: "37px" }} src="https://aday-spage.mncdn.com/Knet_img_app-store.0f13ed4.svg?v=89042" alt="" /></a>
              <a style={{ display: "inline-block" }} href=""><img style={{ width: "124px", height: "37px" }} src="https://aday-spage.mncdn.com/Knet_img_google-play.f2ca834.png?v=89042" alt="" /></a>
            </div>
            <hr style={{ border: "1px solid rgb(255, 255, 255)" }} />
            <div className='d-flex'>
              <div className='flex-grow-1' style={{ color: "#FFF" }}>
                <a style={{ display: 'inline-block' }} href="">
                  <img style={{ display: "block", width: "101px", height: "15px" }} src="https://aday-spage.mncdn.com/Knet_img_KnetLogoFooter.09751fb.png?v=89042" alt="" />
                </a>
                <p style={{ fontSize: "11px", fontWeight: "400", marginTop: "16px" }}>Copyright &copy; 1999-2024 Kariyer.net</p>
              </div>
              <div>
                <div className='flex-grow-1 d-flex flex-column align-items-end' >
                  <p style={{ color: "#FFF", fontSize: "11px", textWrap: "nowrap", marginTop: "8px" }}>Kariyer.net bir&nbsp;<a style={{ display: "inline-block", margin: "0 3px" }} href="http://localhost:5173/"><img src="https://aday-spage.mncdn.com/Knet_img_ilab-logo.afbe989.svg?v=89042" alt="" /></a>&nbsp;grup şirketidir
                  </p>
                  <ul className='d-flex flex-wrap px-0' style={{ listStyleType: "none" }}>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.arabam.com/">Arabam.com -&nbsp;
                  </a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.chemorbis.com/tr/">ChemOrbis -&nbsp;</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.cimri.com/">Cimri.com -</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.emlakjet.com/">Emlakjet -&nbsp;</a>
                  </li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.hangikredi.com/">Hangikredi.com -&nbsp;</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.neredekal.com/">Neredekal.com</a></li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://www.sigortam.net/">Sigortam.net -&nbsp;</a>
                  </li>
                  <li><a style={{ textDecoration: "none", color: "#FFF", fontSize: "12px" }} href="https://tr.steelorbis.com/">SteelOrbis</a></li>

                </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
