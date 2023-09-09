// import '../components/Hero.css';
import '../components/landingPageHero.css'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// import { case2, case3, case4, case5 } from '../assets/images/index.js';
// import {  hero1, hero2, hero3, hero4, hero5 } from '../assets/images/index.js';
import {HeroVid} from '../assets/images/index.js';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


// import required modules
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';

export default function Hero() {
    return (
        <>
            <Swiper
                // spaceBetween={30}
                centeredSlides={true}
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[EffectFade, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide id="landingPageHero">
                    <video loop preload autoPlay muted src={HeroVid}>
                    </video>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
