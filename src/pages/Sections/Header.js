import React, { Component } from 'react'
import './Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import SwiperCore, { A11y, Autoplay, Controller, Navigation, Pagination, Scrollbar } from 'swiper';


const Header = ({ HeadingLight, HeadingMain, Para_one, Button_text, BrandsSlider_img }) => {

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]);


    return (
        <main>
            <header className="section header pt-md-0 pt-5 text-contrast app-landing-header">
                <div className="shape-wrapper">
                    <div className="shape shape-background shape-main gradient gradient-purple-navy"></div>
                    <div className="shape shape-background shape-top gradient gradient-navy-purple"></div>
                </div>
                <div className="container overflow-hidden">
                    <div className="row gap-y align-items-center">
                        <div className="col-md-6 col-lg-6">
                            <p className="lead d-flex align-items-center my-0"><i className="fas fa-award font-md mr-3"></i>{HeadingLight}</p>
                            <h1 className="bold text-contrast display-lg-4 font-lg my-5">DigiAts <span className="d-block light font-md"><q className='mt-5'>{HeadingMain}</q></span></h1>
                            <p className="lead">{Para_one}.</p>
                            <div className="nav mt-5 align-items-center"><a href="#" className="btn btn-rounded btn-lg btn-info shadow mr-3 px-4 text-capitalize">{Button_text}</a></div>
                        </div>
                        <div className="col-md-6 col-lg-5 ml-lg-auto">
                            <div data-aos="fade-left">
                                <div className="mobile-device iphone-x">
                                    <div className="screen"><img src="img/screens/app/2.png" className="img-responsive" alt="" /></div>
                                    <div className="notch"></div>
                                </div>
                                <div className="absolute screen-highlight center-x w-100"><img src="img/screens/app/2-highlight.png" alt="" className="mx-auto shadow-lg rounded img-responsive" data-aos-delay="1000" data-aos="zoom-in" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className='slider-brands-container bg-white pt-5  px-3'>
                <Swiper
                    autoplay
                    spaceBetween={1}
                    slidesPerView={5}
                >
                    {BrandsSlider_img.map((item, index) =>
                        <SwiperSlide>

                            <img src={item.slider} className='m-5' />

                        </SwiperSlide>

                    )}
                </Swiper>
            </div>
        </main>

    )
}

export default Header

