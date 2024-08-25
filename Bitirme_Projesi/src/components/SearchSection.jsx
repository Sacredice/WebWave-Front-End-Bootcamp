import React from 'react'


function SearchSection() {
  return (
    <div className='d-block searchselection-container p-0' style={{ height: "100%", overflowX: "clip" }}>
      <div className='container p-0' style={{ maxWidth: "1140px" }}>
        <div className='container-fluid d-flex flex-column justify-content-center px-0' style={{ height: "100%", paddingTop: "32px" }}>
          <div className='d-lg-none px-3 pb-2 text-center' style={{ width: "100%", marginTop: "10px" }}>
            <h1 className='text-center' style={{ fontSize: "2rem" }}>Kariyer Fırsatlarını Keşfet</h1>
            <h2 style={{ fontSize: ".875rem", fontWeight: "300" }}><strong style={{ fontSize: ".875rem", fontWeight: "500" }}>77.148</strong> iş ilanı <strong style={{ fontSize: ".875rem", fontWeight: "500" }}>on binlerce</strong> şirket</h2>
            {/* TODO: tıklandığında görüntülenen modal eksik!!! */}
            <span className="d-flex text-start align-items-center form-control" style={{ height: "50px", marginTop: "16px", marginBottom: "32px" }}>
              <i className="bi bi-search" style={{ color: "#6A1293", marginLeft: "4px", marginRight: "10px" }}></i>
              <input type="text" style={{ border: "none" }} placeholder="Pozisyon veya şirket ara" aria-label="Pozisyon veya şirket ara" />
            </span>
            <div className='d-flex flex-nowrap d-md-none popular-search-item-container' style={{ maxWidth: "620px" }}>
              <a className='mb-3' href="">Finans Uzmanı</a>
              <a href="">Dijital Pazarlama Uzmanı</a>
              <a href="">Yazılım Geliştirme Uzmanı</a>
              <a href="">Proje Yöneticisi</a>
              <a href="">İK Uzmanı</a>
            </div>
            <div className='d-none d-md-block flex-nowrap popular-search-item-container' style={{ maxWidth: "620px" }}>
              <a className='mb-3' href="">Finans Uzmanı</a>
              <a href="">Dijital Pazarlama Uzmanı</a>
              <a href="">Yazılım Geliştirme Uzmanı</a>
              <a href="">Proje Yöneticisi</a>
              <a href="">İK Uzmanı</a>
            </div>
          </div>

          <div className='container d-none d-lg-flex  align-items-center px-0' style={{ position: "relative", height: "100%", backgroundColor: "#F5F5F5" }}>
            <img className='d-none d-lg-block d-xl-none' style={{ position: "absolute", bottom: "0", left: "620px", height: "286px" }} src="/searchbox-img.webp" alt="Kariyer Logo" />
            <img className='d-none d-xl-block' style={{ position: "absolute", bottom: "0", left: "758px" }} src="/searchbox-img.webp" alt="Kariyer Logo" />
            <div style={{ marginTop: "30px" }}>
              <h1 style={{ fontSize: "2rem" }}>Kariyer Fırsatlarını Keşfet</h1>
              <h2 className='mt-2' style={{ fontSize: "1.4rem", fontWeight: "300" }}><strong style={{ fontSize: "1.4rem", fontWeight: "500" }}>77.148</strong> iş ilanı <strong style={{ fontSize: "1.4rem", fontWeight: "500" }}>on binlerce</strong> şirket</h2>

              <div className='d-block d-xl-none' >
                <div className='d-flex' style={{ height: "52px" }}>
                  <input className="form-control" style={{ maxWidth: "240px", borderRadius: "5px" }} list="datalistOptions" placeholder="Type to search..."></input>
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                  <input className="form-control px-3 mx-4" style={{ maxWidth: "240px", borderRadius: "5px" }} list="datalistOptions" placeholder="Type to search..."></input>
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                  <button type='button' className='btn button-color' style={{ width: "145px" }}><i className="bi bi-search"></i><span className='ms-2'>İŞ BUL</span></button>
                </div>


              </div>

              <div className='d-none d-xl-block'>
                <div className='d-flex' style={{ height: "52px" }}>
                  <input className="form-control px-3" style={{ maxWidth: "290px", borderRadius: "5px" }} list="datalistOptions" placeholder="Type to search..."></input>
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                  <input className="form-control px-3 mx-4" style={{ maxWidth: "290px", borderRadius: "5px" }} list="datalistOptions" placeholder="Type to search..."></input>
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                  <button type='button' className='btn button-color' style={{ width: "145px" }}><i className="bi bi-search"></i><span className='ms-2'>İŞ BUL</span></button>
                </div>
              </div>
              <h2 style={{ fontSize: "1rem", color: "#8795B5", marginBottom: "1rem", marginTop: "32px" }}>POPÜLAR ARAMALAR</h2>
              <div className='d-flex flex-wrap d-xl-none popular-search-item-container' style={{ maxWidth: "620px" }}>
                <a className='mb-3' href="">Finans Uzmanı</a>
                <a href="">Dijital Pazarlama Uzmanı</a>
                <a href="">Yazılım Geliştirme Uzmanı</a>
                <a href="">Proje Yöneticisi</a>
                <a href="">İK Uzmanı</a>
              </div>

              <div className='d-none d-xl-block popular-search-item-container' style={{ height: "52px" }}>
                <a href="">Finans Uzmanı</a>
                <a href="">Dijital Pazarlama Uzmanı</a>
                <a href="">Yazılım Geliştirme Uzmanı</a>
                <a href="">Proje Yöneticisi</a>
                <a href="">İK Uzmanı</a>
              </div>

              <div className='d-none d-xl-block popular-search-item-container' style={{ height: "52px" }}>
                <a href="">İstanbul(Avrupa)</a>
                <a href="">İstanbul(Asya)</a>
                <a href="">Ankara</a>
                <a href="">İzmir</a>
                <a href="">Bursa</a>
                <a href="">İstanbul</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default SearchSection
