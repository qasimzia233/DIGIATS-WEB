import React, { Component } from 'react'
import Plurk from '../../../assets/006-plurk.svg'

 class CardFeatures extends Component {
    render() {
        return (
            <div className="card">
            <div className="card-header bg-white border-0 f-row align-items-center">
              <div className='font-weight-bold  flex-grow-1 text-sky'>7 Hours Ago</div>
              <div className='icon-50 icon-round gutter-right' >
                <img src={Plurk} width={25} height={25} />
              </div>
            </div>
            <div className="card-body pl-0">
              <div className="card-title">
                <div className='font-weight-bolder font-size-h4'>PitStop - Multiple Email Generator</div>
              </div>
              <p className='card-text py-3 text-dark-50 font-weight-normal'>
                Pitstop creates quick email campaigns.
                We help to strengthen your brand
                for your every purpose strengthen your brand
                for your every purposestrengthen your brand
                for your every purpose.
              </p>
            </div>

          <div className="f-row justify-content-between" style={{maxWidth:'170px'}}>
            <div className='icon-50 icon-round gutter-right' >
                <img src={Plurk} width={25} height={25} />
              </div>
              <div className='icon-50 icon-round gutter-right' >
                <img src={Plurk} width={25} height={25} />
              </div>
              <div className='icon-50 icon-round gutter-right' >
                <img src={Plurk} width={25} height={25} />
              </div>
            </div>
          </div>

        )
    }
}

export default CardFeatures
