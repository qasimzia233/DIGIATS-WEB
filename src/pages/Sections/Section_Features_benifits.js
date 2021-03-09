import React, { Component } from 'react'
import Screen from '../../assets/mbile_fron_img.png'

class Section_Features_benifits extends Component {
    render() {
        return (
            <section className='section-benifits  py-1 ' id='section-benifits'>
                <div className='container-fluid  '>
                    <div className='row'>

                        <div className=' col-md-6  col-12 section-left' >
                        <div className='rounded-circle  animate__animated animate__fadeIn animate__slower animate__delay-1s '></div>
                            <div className='phone-container'>
                                <div className='iphone-left-img' >
                                    <img src={Screen} width='230px' height='500px'  className='animate__animated animate__slideInLeft'/>
                                </div>
                                <div className='col-6'>

                                    <div className="iphone-plus">
                                        <i>Speaker</i>
                                        <b>Camera</b>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='col-md-6  col-12 mt-5 mt-md-0  section-right'   >
                            <div className="section-heading"><i className="far fa-check-circle fa-2x text-danger mb-3"></i>
                                <h2 className="bold font-md">We have a ton of benefits</h2>
                                <p >DashCore will maximize your time and money</p>
                            </div>
                            <div className="row gap-y">
                               
                                <div className="col-md-6 text-md-left text-center">
                                    <div className="media flex-column flex-lg-row align-items-center align-items-md-start"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-code mx-auto ml-md-0 mr-md-3 stroke-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                        <div className="media-body mt-3 mt-md-0">
                                            <h5 className="bold mt-0 mb-1">Development</h5>
                                            <p className="m-0 d-md-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-md-left text-center">
                                    <div className="media py-3 flex-column flex-lg-row align-items-center align-items-md-start"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star mx-auto ml-md-0 mr-md-3 stroke-primary"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        <div className="media-body mt-3 mt-md-0">
                                            <h5 className="bold mt-0 mb-1">Web Design</h5>
                                            <p className="m-0 d-md-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-md-left text-center">
                                    <div className="media py-3 flex-column flex-lg-row align-items-center align-items-md-start"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-wind mx-auto ml-md-0 mr-md-3 stroke-primary"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
                                        <div className="media-body mt-3 mt-md-0">
                                            <h5 className="bold mt-0 mb-1">Do Magic</h5>
                                            <p className="m-0 d-md-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-md-left text-center">
                                    <div className="media py-3 flex-column flex-lg-row align-items-center align-items-md-start"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock mx-auto ml-md-0 mr-md-3 stroke-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        <div className="media-body mt-3 mt-md-0">
                                            <h5 className="bold mt-0 mb-1">Save Time</h5>
                                            <p className="m-0 d-md-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        )
    }
}

export default Section_Features_benifits
