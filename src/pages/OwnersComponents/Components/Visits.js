import React, { Component } from 'react'

class Visits extends Component {
    render() {
        return (
                <div className="card h-100">
                    <div className="card-header flex-row justify-content-between align-items-center pb-0 pb-1">
                        <p className='mb-0'>Visits</p>
                        <p className='badge badge-primary py-2 px-2 mb-0' >3/2</p>
                    </div>
                    <div className="card-body py-lg-4 flex-column">
                    
                        <div>
                            <label htmlFor="ping">Missed</label>
                            <div class="progress text-center">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}>
                                    <span>60% Complete</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="ping">Missed</label>
                            <div class="progress text-center">
                                <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                    <span>60% Complete</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="ping">Missed</label>
                            <div class="progress text-center">
                                <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}>
                                    <span>60% Complete</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="ping">Missed</label>
                            <div class="progress text-center">
                                <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                    <span>60% Complete</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        )
    }
}

export default Visits
