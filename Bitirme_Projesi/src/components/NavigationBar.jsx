import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function Navigationbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <nav style={{ borderBottom: "1px solid hsl(0, 0%, 85%)" }}>
      <div className='container-fluid px-0 d-lg-none'>
        <div className='d-flex justify-content-between align-items-center px-3 nav-bar-height' >
          <div className='d-flex align-items-center' style={{ width: "40px", height: "32px" }}>

            <i onClick={() => setShow(true)} className="bi bi-list lines-menu-icon me-3" style={{ fontSize: "24px" }}></i>
            <Link to="/"><img style={{ width: "111px", height: "26px" }} src="https://aday-spage.mncdn.com/Knet_img_KnetLogoHeader.76801b2.svg?v=89042" alt="" /></Link>
          </div>
          <div className='login-sign-in-button'>
            <Link to="login" style={{ color: "rgb(131, 22, 181)", fontSize: "14px", textDecoration: "none" }}>Giriş Yap / Üye Ol</Link>
          </div>


          <Modal
            show={show}
            fullscreen="lg-down"
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"

          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <Link to="/" style={{ display: "block", width: "111px", width: "16px"}} href="/"><img style={{}} src="https://aday-spage.mncdn.com/Knet_img_KnetLogoHeader.76801b2.svg?v=89042" alt="Kariyer.net" /></Link>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
              </p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div className='container px-0'>
        <div className='container px-0 d-none d-lg-flex justify-content-between align-items-center' style={{ maxWidth: "1140px", height: "68px" }}>

          <div className='d-flex align-items-center h-100'>
            <Link to="/"><img style={{ width: "173px", height: "26px" }} src="https://aday-spage.mncdn.com/Knet_img_KnetLogoHeader.76801b2.svg?v=89042" alt="" /></Link>
            <a href="" style={{ display: "inline-flex", width: "64px", height: "100%", alignItems: "center", textDecoration: "none", fontSize: "16px", fontWeight: "500", color: "rgb(0, 0, 0)", padding: "12px", textWrap: "nowrap" }}>İş Ara</a>
            <div className='kariyer-planlaması' href="">
              Kariyer Planlaması
              <div className='menu-kariyer-planlaması'>
                <div className='d-flex'>
                  <div style={{ margin: "28px 12px 16px 32px" }}>
                    <p style={{ fontSize: "14px" }} >ÜNİVERSİTEYE HAZIRLIK</p>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Üniversite Rehberi</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Üniversiteler</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Üniversite Taban Puanları</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Tercih Motoru</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Meslekler Rehberi</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">İşverenlerin Tercihi</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">YKS Puan Hesaplama</a>
                  </div>
                  <div style={{ margin: "28px 12px 16px 24px" }}>
                    <p >İLK İŞİM VE PROFESYONEL HAYAT</p>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Üniversite Rehberi</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Üniversiteler</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Üniversite Taban Puanları</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Tercih Motoru</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">Meslekler Rehberi</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">İşverenlerin Tercihi</a>
                    <a style={{ fontSize: "16px", fontWeight: "400", display: "block", textDecoration: "none", margin: "0 8px 20px 0", color: "black" }} href="https://www.kariyer.net/universite-rehberi">YKS Puan Hesaplama</a>
                  </div>
                  <div className='d-flex flex-column justify-content-start align-items-center' style={{ margin: "28px 12px 16px 24px" }}>
                    <a style={{ display: "block", width: "300px", height: "135px" }} href="http://localhost:5173/"><img style={{ display: "block" }} src="https://aday-spage.mncdn.com/Knet_img_content.91beec9.svg?v=89042" alt="" /></a>
                    <p style={{ textWrap: "wrap", width: "300px" }}>10.000’den fazla pozisyon maaşına ait detayları hemen keşfet!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='kariyer-rehberi' href="">
              Kariyer Rehberi

              </div>

          </div>
          <div className='d-flex align-items-center h-100'>
            <button onClick={() => navigate("ilanpaketi")} to="login" type='button' className='btn cyan-nav-button'>İlan Paketi</button>

            <div className='dropdown-giris-yap'>
              <button onClick={() => navigate("login")}  type='button' className='btn purple-nav-button'>Giriş Yap / Üye Ol <span className='down-carrot' style={{ marginLeft: "8px" }}><i className="bi bi-caret-down-fill"></i></span><span className='up-carrot' style={{ marginLeft: "8px" }}><i className="bi bi-caret-up-fill"></i></span></button>

            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navigationbar
