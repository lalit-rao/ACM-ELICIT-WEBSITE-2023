import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './events.css';
import {
    A1, A2, A3, A4, A5,
    C1, C2, C3, C4, C5,
    GA1, GA6, GA7, GA8, GA9,
    H1, H2, H3, H4, H5,
    TH1, TH2, TH3, TH4, TH5,
} from '../assets/images/index.js';

const categories = [
    {
        name: 'Compute',
        images: [C1, C2, C3, C4, C5],
    },
    {
        name: 'HACKS',
        images: [H1, H2, H3, H4, H5],
    },
    {
        name: 'TREASURE HUNT',
        images: [TH1, TH2, TH3, TH4, TH5],
    },
    {
        name: 'ARDUINO WORKSHOP',
        images: [A1, A2, A3, A4, A5],
    },
    {
        name: 'GAMERS ASYLUM',
        images: [GA1, GA6, GA7, GA8, GA9],
    },
];

const Events = () => {
    const renderSwiper = (category) => (
        <div className="swiper-container" key={category.name}>
            <p className="heading">{category.name}</p>
            <div className="border-box">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper"
                >
                    {category.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );

    return (
        <>
            {categories.map((category) => renderSwiper(category))}
        </>
    );
};

export default Events;
