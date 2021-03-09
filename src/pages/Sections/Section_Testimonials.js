import React, { Component } from 'react'
import Avatar from '../../assets/avatar-1.jpg'
import Apple from '../../assets/apple-icon.svg'
import GooglePlayIcon from '../../assets/google-play-icon.svg'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import SwiperCore, { A11y, Autoplay, Controller, Navigation, Pagination, Scrollbar } from 'swiper';


class Section_Testimonials extends Component {
    render() {
        SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]);

        return (
            <section className='section-testimonials linear-gradients  my-3 pt-5' id='section-testimonials'>
                <div className='container-fluid  '>
                    <div class="section-heading  text-center">
                        <i class="fas fa-quote-right fa-3x text-danger mb-3"></i>
                        <h2 class="bold display-4">Testimonials</h2></div>

                    <div className=' py-5'>
                        <Swiper
                            autoplay
                            pagination
                            navigation
                            pagination={{ clickable: true }}

                            spaceBetween={3}
                           
                           className='swiper-container p-5'
                        >

                            <SwiperSlide>
                                <div class="d-flex flex-column align-items-center"><img src={Avatar} alt="" class="rounded-circle shadow mb-4" /><p class="w-75 lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consequatur cum distinctio, dolorem earum error esse ex fugiat inventore maiores minima, non placeat praesentium quam quas ut, vero voluptatem.</p><hr class="w-50" /><footer><cite class="bold text-primary text-capitalize">— Jane Doe,</cite> <span class="small text-secondary mt-0">Awesome Company</span></footer>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="d-flex flex-column align-items-center"><img src={Avatar} alt="" class="rounded-circle shadow mb-4" /><p class="w-75 lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consequatur cum distinctio, dolorem earum error esse ex fugiat inventore maiores minima, non placeat praesentium quam quas ut, vero voluptatem.</p><hr class="w-50" /><footer><cite class="bold text-primary text-capitalize">— Jane Doe,</cite> <span class="small text-secondary mt-0">Awesome Company</span></footer>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="d-flex flex-column align-items-center"><img src={Avatar} alt="" class="rounded-circle shadow mb-4" /><p class="w-75 lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consequatur cum distinctio, dolorem earum error esse ex fugiat inventore maiores minima, non placeat praesentium quam quas ut, vero voluptatem.</p><hr class="w-50" /><footer><cite class="bold text-primary text-capitalize">— Jane Doe,</cite> <span class="small text-secondary mt-0">Awesome Company</span></footer>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="d-flex flex-column align-items-center"><img src={Avatar} alt="" class="rounded-circle shadow mb-4" /><p class="w-75 lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consequatur cum distinctio, dolorem earum error esse ex fugiat inventore maiores minima, non placeat praesentium quam quas ut, vero voluptatem.</p><hr class="w-50" /><footer><cite class="bold text-primary text-capitalize">— Jane Doe,</cite> <span class="small text-secondary mt-0">Awesome Company</span></footer>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="d-flex flex-column align-items-center"><img src={Avatar} alt="" class="rounded-circle shadow mb-4" /><p class="w-75 lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consequatur cum distinctio, dolorem earum error esse ex fugiat inventore maiores minima, non placeat praesentium quam quas ut, vero voluptatem.</p><hr class="w-50" /><footer><cite class="bold text-primary text-capitalize">— Jane Doe,</cite> <span class="small text-secondary mt-0">Awesome Company</span></footer>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="d-flex flex-column align-items-center"><img src={Avatar} alt="" class="rounded-circle shadow mb-4" /><p class="w-75 lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consequatur cum distinctio, dolorem earum error esse ex fugiat inventore maiores minima, non placeat praesentium quam quas ut, vero voluptatem.</p><hr class="w-50" /><footer><cite class="bold text-primary text-capitalize">— Jane Doe,</cite> <span class="small text-secondary mt-0">Awesome Company</span></footer>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="d-flex flex-column align-items-center"><img src={Avatar} alt="" class="rounded-circle shadow mb-4" /><p class="w-75 lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consequatur cum distinctio, dolorem earum error esse ex fugiat inventore maiores minima, non placeat praesentium quam quas ut, vero voluptatem.</p><hr class="w-50" /><footer><cite class="bold text-primary text-capitalize">— Jane Doe,</cite> <span class="small text-secondary mt-0">Awesome Company</span></footer>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>





                <div class="sect-card shadow-lg bg-light p-5  mx-5 my-5">
                    <div class="section-heading text-center">
                        <p class="text-primary regular">Start today</p>
                        <h2>Download the App</h2>
                        <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur debitis delectus, ducimus enim et eveniet facilis harum ipsa magni non odit pariatur placeat, praesentium quae quo sed, sunt ut.</p>
                    </div>
                    <nav class="nav  flex-md-row justify-content-center align-items-center mt-5">
                        <div className='d-flex flex-row mr-3 ml-3  align-items-center btn rounded-pill btn-dark'>
                            <img src={Apple} width='28' height='28' className="icon icon-md mx-2" alt="..." />
                            <p class="ml-2 m-0 ml-2  mr-5"><span class="small bold">Get it on the</span>
                                <span class="d-block bold text-contrast">App Store</span>
                            </p>
                        </div>
                        <div className='d-flex flex-row ml-md-3 mt-4 mt-md-0 ml-0 align-items-center btn rounded-pill btn-info'>
                            <img src={GooglePlayIcon} width='28' height='28' className="icon icon-md mx-2" alt="..." />
                            <p class="ml-2 m-0 ml-2  mr-5"><span class="small bold">Get it on the</span>
                                <span class="d-block bold text-contrast">App Store</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </section>
        )
    }
}

export default Section_Testimonials
