import './landingPageGallery.css';
import {hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8} from '../assets/images/index.js';

const LandingPageGallery = () => {
    const images = [
        hero1,
        hero2,
        hero3,
        hero4,
        hero5,
        hero6,
        hero7,
        hero8
    ];

    return (
        <>
            <div className="box">
                {images.map((image, index) => (
                    <span key={index}
                          style={{transform: `rotateY(${index * 45}deg) translateZ(var(--translate-z, 300px))`}}>
                    <img src={image} alt=""/>
                </span>
                ))}
            </div>
        </>
    );

};

export default LandingPageGallery;