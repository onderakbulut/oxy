import './index.scss';
import { Pagination, A11y, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Testimonials() {
    return (  
        <section className="testimonials">
            <div className="testimonials__title">Testimonials</div>
            <div className="testimonials__inner">
                <Swiper
                        modules={[Pagination, A11y, Navigation]}
                        slidesPerView={1}
                         navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        loop
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                    >
                    <SwiperSlide>
                        <div className="testimonials__item">
                            <div className="testimonials__item-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className="testimonials__item-author">
                                <div className="testimonials__item-author-name">Michael Freeman</div>
                                <div className="testimonials__item-author-brand">Boston Cars</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonials__item">
                            <div className="testimonials__item-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className="testimonials__item-author">
                                <div className="testimonials__item-author-name">Michael Freeman</div>
                                <div className="testimonials__item-author-brand">Boston Cars</div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="testimonials__navigation-wrapper">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;