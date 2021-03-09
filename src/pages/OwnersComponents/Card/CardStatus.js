import React, { Component } from 'react'
import Plurk from '../../../assets/006-plurk.svg'

class CardStatus extends Component {
    render() {
        return (
            <div className="card w-100">
                <div className="card-header bg-white border-0 pl-0  f-row">
                    <div className='flex-grow-1'>
                        <div className='font-weight-normal text-sky'>weekly</div>
                        <div className='font-weight-bolder font-size-h4 '>2345,444</div>
                    </div>
                    <div className='icon-50 icon-round gutter-right' >
                        <img src={Plurk} width={25} height={25} />
                    </div>
                </div>
                <div className="card-footer bg-white border-0 "></div>
                <div className='f-row a-center text-success'>
                <i class="fas fa-arrow-alt-down fa-2x  mr-2" ></i>
                <p>1.10%</p> 
             </div>
            </div>
        )
    }
}

export default CardStatus
