import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchSection() {
  return (
    <div>
      <div className='d-lg-none px-3 text-center'>
        <h1 className='text-center'>Kariyer Fırsatlarını Keşfet</h1>
        <p style={{ fontSize: "1.4rem"}}><strong>77.148</strong> iş ilanı <strong>on binlerce</strong> şirket</p>
        <div class="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>

      <div className='container d-none d-lg-block'>
        <h1>Kariyer Fırsatlarını Keşfet</h1>
        <p className='mt-2' style={{ fontSize: "1.4rem"}}><strong>77.148</strong> iş ilanı <strong>on binlerce</strong> şirket</p>

        <div className='d-block d-xl-none'>
          <div className='d-flex' style={{ height: "52px"}}>
            <input className="form-control" style={{ maxWidth: "240px"}} list="datalistOptions" placeholder="Type to search..."></input>
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
              </datalist>
            <input className="form-control px-3 mx-4" style={{ maxWidth: "240px"}} list="datalistOptions" placeholder="Type to search..."></input>
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
              </datalist>
          <button type='button' className='btn btn-primary'  style={{ width: "145px"}}><i class="bi bi-search"></i><span className='ms-2'>İŞ BUL</span></button>
          </div>
        </div>

        <div className='d-none d-xl-block'>
            <div className='d-flex' style={{ height: "52px"}}>
            <input className="form-control px-3" style={{ maxWidth: "290px"}} list="datalistOptions" placeholder="Type to search..."></input>
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
              </datalist>
            <input className="form-control px-3 mx-4" style={{ maxWidth: "290px"}} list="datalistOptions" placeholder="Type to search..."></input>
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
              </datalist>
          <button type='button' className='btn btn-primary' style={{ width: "145px"}}><i class="bi bi-search"></i><span className='ms-2'>İŞ BUL</span></button>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default SearchSection
