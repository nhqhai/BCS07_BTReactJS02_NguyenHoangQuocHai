import React, { Component } from 'react'
export default class Body extends Component {

state ={
  typeGlasses: "v1",
};

handleChangeType = (value) => {
  this.setState ({typeGlasses: value});
};


  render() {
    let {typeGlasses} = this.state;
    return (
      <div>
        <div className='container text-center'>
          {/* Ảnh Model không kính */}
          <div className='d-flex justify-content-center mt-5'>
            <div className='row'>
              <div className='col-10'>
                <img style={{width: '100%' }} src='/glassesImage/model.jpg' alt='' className=''/>
                <p className=' fs-3 mt-2'>Ảnh mẫu không kính</p>
              </div>
            </div>

          {/* Ảnh Model có kính */}
          <div className='row'>
          <div className='col-10'>
            <div className='img-container'>
              <div className='position-relative'>
                <img  className='img-fluid' src='/glassesImage/model.jpg' alt='' />
                <img className='position-absolute' style={{ width: '57%', top: '25%', right: '21%' }} src={`/glassesImage/${this.state.typeGlasses}.png`} alt='' />
              </div>
            </div>
                <p className=' fs-3 mt-2'>Ảnh mẫu với kính</p>
              </div>
            </div>
          </div>

          {/* Ảnh Kính */}
          <div  className='row gap-3 justify-content-center'>
          <p className='fs-1 pt-4' style={{color: 'red'}}>Chọn kính để thử với ảnh mẫu (=^ .^=) </p>
          <img style={{cursor: 'pointer'}} src='/glassesImage/v1.png' alt='' className='col-3' onClick={() => this.handleChangeType('v1')} />
          <img style={{cursor: 'pointer'}} src='/glassesImage/v2.png' alt='' className='col-3' onClick={() => this.handleChangeType('v2')} />
          <img style={{cursor: 'pointer'}} src='/glassesImage/v3.png' alt='' className='col-3' onClick={() => this.handleChangeType('v3')} />
          <img style={{cursor: 'pointer'}} src='/glassesImage/v4.png' alt='' className='col-3' onClick={() => this.handleChangeType('v4')} />
          <img style={{cursor: 'pointer'}} src='/glassesImage/v5.png' alt='' className='col-3' onClick={() => this.handleChangeType('v5')} />
          <img style={{cursor: 'pointer'}} src='/glassesImage/v6.png' alt='' className='col-3' onClick={() => this.handleChangeType('v6')} />
          <img style={{cursor: 'pointer'}} src='/glassesImage/v7.png' alt='' className='col-3' onClick={() => this.handleChangeType('v7')} />
          <img style={{cursor: 'pointer'}} src='/glassesImage/v8.png' alt='' className='col-3' onClick={() => this.handleChangeType('v8')} />
          <img style={{cursor: 'pointer'}} src='/glassesImage/v9.png' alt='' className='col-3' onClick={() => this.handleChangeType('v9')} />
          </div>
        </div>
      </div>
    );
  }
}