import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider_One from '../../assets/s-1.png'
import Slider_Two from '../../assets/s-2.png'
import Slider_Three from '../../assets/s-3.png'
import Slider_Four from '../../assets/s-4.png'
import Slider_Five from '../../assets/s-5.png'


// Import Swiper styles
import 'swiper/swiper.min.css';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

class Section_ScreenShots extends Component {
  render() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return (

      <div className='section-screen-shots container-fluid  text-center my-md-5 my-3' id='section-screenshots' >
        <h2 class="bold display-4">App Screenshots</h2>
        <p class="text-secondary">A picture is worth a thousand words</p>
        <div className='swiper-container  col-10 mx-auto'>
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={1}
            slidesPerView={4}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className='img-container'
          >
            <SwiperSlide ><img src={Slider_One} width='200' height='340' /></SwiperSlide>

            <SwiperSlide><img src={Slider_Two} width='200' height='340' /></SwiperSlide>
            <SwiperSlide><img src={Slider_Three} width='200' height='340' /></SwiperSlide>
            <SwiperSlide><img src={Slider_Three} width='200' height='340' /></SwiperSlide>
            <SwiperSlide><img src={Slider_Three} width='200' height='340' /></SwiperSlide>
            <SwiperSlide><img src={Slider_Four} width='200' height='340' /></SwiperSlide>
            <SwiperSlide><img src={Slider_Five} width='200' height='340' /></SwiperSlide>
          </Swiper>

        </div>
      </div>
    )
  }
}

export default Section_ScreenShots
