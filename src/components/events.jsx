// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {
    A1,
    A2,
    A3,
    A4,
    A5,
    C1,
    C2,
    C3,
    C4,
    C5,
    GA1,
    GA6,
    GA7,
    GA8,
    GA9,
    H1,
    H2,
    H3,
    H4,
    H5,
    TH1,
    TH2,
    TH3,
    TH4,
    TH5
} from '../assets/images/index.js';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import './events.css';

// import required modules
import {Autoplay, EffectCoverflow} from 'swiper/modules';

const events = () => {
    return (
        <>
            <div id="swiper-container" className="swiper-container">
                <p className="heading">GAMERS ASYLUM</p>
                <div className="border-box">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        // slidesPerView={'auto'}
                        slidesPerView={3}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,
                        }}
                        autoplay={{
                            delay: 1500, disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        // pagination={true}
                        modules={[Autoplay, EffectCoverflow]}
                        // navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={GA1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={GA6}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={GA7}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={GA8}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={GA9}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="swiper-container">
                <p className="heading">Compute</p>
                <div className="border-box">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,
                        }}
                        autoplay={{
                            delay: 1500, disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        // pagination={true}
                        modules={[Autoplay, EffectCoverflow]}
                        // navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={C1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={C2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={C3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={C4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={C5}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="swiper-container">
                <p className="heading">HACKS</p>
                <div className="border-box">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,
                        }}
                        autoplay={{
                            delay: 1500, disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        // pagination={true}
                        modules={[Autoplay, EffectCoverflow]}
                        // navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={H1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={H2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={H3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={H4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={H5}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="swiper-container">
                <p className="heading">TREASURE HUNT</p>
                <div className="border-box">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,
                        }}
                        autoplay={{
                            delay: 1500, disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        // pagination={true}
                        modules={[Autoplay, EffectCoverflow]}
                        // navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={TH1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={TH2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={TH3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={TH4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={TH5}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="swiper-container">
                <p className="heading">ARDUINO WORKSHOP</p>
                <div className="border-box">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,
                        }}
                        autoplay={{
                            delay: 1500, disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        // pagination={true}
                        modules={[Autoplay, EffectCoverflow]}
                        // navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={A1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={A2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={A3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={A4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={A5}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/*<div className="swiper-container">
                <p className="heading">Gamers Asylum</p>
                <div className="border-box">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,
                        }}
                        autoplay={{
                            delay: 1500, disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        // pagination={true}
                        modules={[Autoplay, EffectCoverflow]}
                        // navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="swiper-container">
                <p className="heading">Gamers Asylum</p>
                <div className="border-box">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,
                        }}
                        autoplay={{
                            delay: 1500, disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        // pagination={true}
                        modules={[Autoplay, EffectCoverflow]}
                        // navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>*/}
        </>);
}

export default events;
