import React, { Component } from 'react'
import Screen from '../../assets/mbile_fron_img.png'

class Section_PathSuccess extends Component {
    render() {
        return (
            <section className='Section_PathSuccess py-5 ' id='section-path'>
                <div className='container-fluid  '>
                    <div className='row'>



                        <div class="col-md-6 section-right text-center text-md-left">
                            <div class="section-heading ">
                                <i class="fas fa-trophy fa-2x text-danger mb-3"></i>
                                <h2 class="bold font-md my-2">We are your path to Success</h2></div>

                            <ul class="list-unstyled my-3">
                                <li class="media flex-column flex-md-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail mx-auto mr-md-3 stroke-primary">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    <div class="media-body mt-3 mt-md-0">
                                        <h5 class="bold mt-0 mb-1">Mail Management</h5><p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae repellendus voluptate.</p></div>
                                </li>
                                <li class="media flex-column flex-md-row mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mx-auto mr-md-3 stroke-primary">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    <div class="media-body mt-3 mt-md-0"><h5 class="bold mt-0 mb-1">Customers Tracking</h5><p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae repellendus voluptate.</p></div>
                                </li>
                                <li class="media flex-column flex-md-row mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart mx-auto mr-md-3 stroke-primary">
                                        <line x1="12" y1="20" x2="12" y2="10"></line>
                                        <line x1="18" y1="20" x2="18" y2="4"></line>
                                        <line x1="6" y1="20" x2="6" y2="16"></line>
                                    </svg>
                                    <div class="media-body mt-3 mt-md-0"><h5 class="bold mt-0 mb-1">Advanced Reporting</h5><p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae repellendus voluptate.</p></div>
                                </li>
                            </ul>
                        </div>

                        <div className=' col-md-6 section-left' >
                            <div className='rounded-circle  animate__animated animate__fadeIn animate__slower animate__delay-1s'></div>
                            <div className='phone-container'>
                                <div className='iphone-left-img animate__animated animate__slideInRight' >
                                    <img src={Screen} width='210px' height='454px' />
                                </div>
                                <div className='col-6'>

                                    <div className="iphone-plus">
                                        <i>Speaker</i>
                                        <b>Camera</b>
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

export default Section_PathSuccess
