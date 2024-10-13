import { useEffect } from 'react';
import './index.scss';
import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

function Hero() {
    useEffect(() => {
        const links = [
            { rel: 'preload', as: 'image', href: './hero-lg.webp', type: 'image/webp' }
        ];

        links.forEach(linkProps => {
            const link = document.createElement('link');
            Object.entries(linkProps).forEach(([key, value]) => {
                link[key] = value;
            });
            document.head.appendChild(link);
        });

        return () => {
            links.forEach(linkProps => {
                const link = document.querySelector(`link[href="${linkProps.href}"]`);
                if (link) document.head.removeChild(link);
            });
        }
    }, [])
    
    return ( 
        <section className="hero">
            <div className="hero__inner">
                <Swiper
                        modules={[Pagination, A11y]}
                        slidesPerView={1}                    
                        loop
                        pagination={{ clickable: true }}
                    >
                    <SwiperSlide>
                        <picture>
                            <source media="(max-width: 420px)" srcSet="./hero-mobile.webp" type="image/webp" />
                            <source media="(max-width: 420px)" srcSet="./hero-mobile.png" type="image/png" />
                            <source media="(max-width: 1350px)" srcSet="./hero-lg.webp" type="image/webp"/>
                            <source media="(max-width: 1350px)" srcSet="./hero-lg.png" type="image/png"/>
                            <source media="(min-width: 1351px)" srcSet="./hero.webp" type="image/webp"/>
                            <source media="(min-width: 1351px)" srcSet="./hero.png" type="image/png"/>
                            <img className='hero__banner' src="./hero-mobile.png" width={853} height={1280} alt="" />
                        </picture>
                        <div className="hero__shape">
                            <svg className='hero__shape-img' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="884.01" height="648.99" viewBox="0 0 884.01 648.99">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                                    <stop offset={0} stopColor="#ff9600" />
                                    <stop offset={1} stopColor="#ff6799" />
                                    </linearGradient>
                                </defs>
                                <g id="Gradient_spot" data-name="Gradient spot" transform="translate(-358.967 -154.01)">
                                    <path id="Gradient_spot-2" data-name="Gradient spot" d="M446.037,276.15C647.209,1.4,950.488,239.791,909.156,503.366,883.519,666.848,712.744,803,470.459,803S1.06,665.973,31.763,503.366C65.027,327.189,302.828,471.736,446.037,276.15Z" transform="translate(330)" fill="#ff6799" />
                                    <path id="Gradient_spot-3" data-name="Gradient spot" d="M446.037,276.15C647.209,1.4,950.488,239.791,909.156,503.366,883.519,666.848,712.744,803,470.459,803S1.06,665.973,31.763,503.366C65.027,327.189,302.828,471.736,446.037,276.15Z" transform="translate(330)" fill="url(#linear-gradient)" />
                                </g>
                            </svg>
                        </div>
                        <div className="hero__content">
                            <div className="hero__content-title">
                                We create the feature
                            </div>
                            <div className="hero__content-desc">
                                We Craft Awesome Web And 
                                Graphic Design Solutions
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <picture>
                            <source media="(max-width: 420px)" srcSet="./hero-2-mobile.webp" type="image/webp" />
                            <source media="(max-width: 420px)" srcSet="./hero-2-mobile.png" type="image/png" />
                            <source media="(max-width: 1350px)" srcSet="./hero-2-lg.webp" type="image/webp"/>
                            <source media="(max-width: 1350px)" srcSet="./hero-2-lg.png" type="image/png"/>
                            <source media="(min-width: 1351px)" srcSet="./hero-2.webp" type="image/webp"/>
                            <source media="(min-width: 1351px)" srcSet="./hero-2.png" type="image/png"/>
                            <img className='hero__banner' src="./hero-2-mobile.png" width={853} height={1280} alt="" loading='lazy' />
                        </picture>
                        <div className="hero__shape">
                            <svg className='hero__shape-img' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="884.01" height="648.99" viewBox="0 0 884.01 648.99">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                                    <stop offset={0} stopColor="#ff9600" />
                                    <stop offset={1} stopColor="#ff6799" />
                                    </linearGradient>
                                </defs>
                                <g id="Gradient_spot" data-name="Gradient spot" transform="translate(-358.967 -154.01)">
                                    <path id="Gradient_spot-2" data-name="Gradient spot" d="M446.037,276.15C647.209,1.4,950.488,239.791,909.156,503.366,883.519,666.848,712.744,803,470.459,803S1.06,665.973,31.763,503.366C65.027,327.189,302.828,471.736,446.037,276.15Z" transform="translate(330)" fill="#ff6799" />
                                    <path id="Gradient_spot-3" data-name="Gradient spot" d="M446.037,276.15C647.209,1.4,950.488,239.791,909.156,503.366,883.519,666.848,712.744,803,470.459,803S1.06,665.973,31.763,503.366C65.027,327.189,302.828,471.736,446.037,276.15Z" transform="translate(330)" fill="url(#linear-gradient)" />
                                </g>
                            </svg>
                        </div>
                        <div className="hero__content">
                            <div className="hero__content-title">
                                We create the feature
                            </div>
                            <div className="hero__content-desc">
                                We Craft Awesome Web And 
                                Graphic Design Solutions
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="scroll-down">
                <img src="./arrow-down.svg" alt="scroll down" width={28} height={52} />
            </div>
        </section>
     );
}

export default Hero;