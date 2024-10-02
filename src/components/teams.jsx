/*
import Title from "./title.jsx";
import "./teams.css";
import ElicitLogo from "../assets/images/Elicit.png";
import {  img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,} from "../assets/images/index";

const TeamsSection = () => {
    return (
        <>
            <Title firstWord={"Our"} secondWord={"Team"} />
            <div className="sub-heading-box">
                <div className="sub-heading">Events</div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img1} />
                    </div>
                    <div className="content">
                        <div className="name">Kriti Taneja</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img2} />
                    </div>
                    <div className="content">
                        <div className="name">Hemant Joshi</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img3} />
                    </div>
                    <div className="content">
                        <div className="name">Pushkal Garg</div>
                    </div>
                </div>
            </div>

            <div className="sub-heading-box">
                <div className="sub-heading">Marketing</div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img4} />
                    </div>
                    <div className="content">
                        <div className="name">Purvanshi Goyal</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img5} />
                    </div>
                    <div className="content">
                        <div className="name">Advika Shah</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img6} />
                    </div>
                    <div className="content">
                        <div className="name">Mayuri Shanta</div>
                    </div>
                </div>
            </div>

            <div className="sub-heading-box">
                <div className="sub-heading">Curations</div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img7} />
                    </div>
                    <div className="content">
                        <div className="name">Kushagra Jain</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img8} />
                    </div>
                    <div className="content">
                        <div className="name">Ritvik Aggarwal</div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img20} />
                    </div>
                    <div className="content">
                        <div className="name">Vedika Parwal</div>
                    </div>
                </div>
            </div>

            <div className="sub-heading-box">
                <div className="sub-heading">Creative Director</div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img21} />
                    </div>
                    <div className="content">
                        <div className="name">Joy Brar</div>
                    </div>
                </div>
            </div>


            <div className="sub-heading-box">
                <div className="sub-heading">Finance</div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img9} />
                    </div>
                    <div className="content">
                        <div className="name">Dhruv Arora</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img10} />
                    </div>
                    <div className="content">
                        <div className="name">Poorv Mangla</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img11} />
                    </div>
                    <div className="content">
                        <div className="name">Vitika Vora</div>
                    </div>
                </div>
            </div>

            <div className="sub-heading-box">
                <div className="sub-heading">Hospitality</div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img12} />
                    </div>
                    <div className="content">
                        <div className="name">Hitansh Mehndiratta</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img13} />
                    </div>
                    <div className="content">
                        <div className="name">Lavanya Alagh</div>
                    </div>
                </div>
            </div>

            <div className="sub-heading-box">
                <div className="sub-heading">Social Media & Content</div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img14} />
                    </div>
                    <div className="content">
                        <div className="name">Prajeeta Pal</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img15} />
                    </div>
                    <div className="content">
                        <div className="name">Saamarth Mishra</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img16} />
                    </div>
                    <div className="content">
                        <div className="name">Vidhanshi Sharma</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img17} />
                    </div>
                    <div className="content">
                        <div className="name">Tanya Sharma</div>
                    </div>
                </div>
            </div>

            <div className="sub-heading-box">
                <div className="sub-heading">Logistics</div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img18} />
                    </div>
                    <div className="content">
                        <div className="name">Tanmay Kaushik</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img19} />
                    </div>
                    <div className="content">
                        <div className="name">Abhishek Kashyap</div>
                    </div>
                </div>
            </div>

            <div className="sub-heading-box">
                <div className="sub-heading">Media</div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img22} />
                    </div>
                    <div className="content">
                        <div className="name">Maanav Shah</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img23} />
                    </div>
                    <div className="content">
                        <div className="name">Mayan Kartha</div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="image" src={img24} />
                    </div>
                    <div className="content">
                        <div className="name">Sanidhya Khandelwal</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamsSection;
*/











import './landingPageConvener.css';
import { useRef, useEffect } from 'react';
import { Instagram, Linkedin } from '../assets/images/index.js';
import Title from "./title.jsx";

const LandingPageConvener = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-flipped');
                } else {
                    entry.target.classList.remove('is-flipped');
                }
            });
        });

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className="containerof0">
            {/* Convener Section */}
            <div className="title-convener-1">
                <Title firstWord={""} secondWord={"Convener"} />
            </div>
            <div className="containerof-1">
                <div className="card0" ref={el => cardRefs.current[0] = el}>
                    <div className="card-inner0">
                        <div className="front0 Person-10">
                            <h2>Soham Dixit</h2>
                            <p>Convener</p>
                        </div>
                        <div className="back0">
                            <h1>
                                Soham <span>Dixit</span>
                            </h1>
                            <p>Dominant, Humbly</p>
                            <div className="row0">
                                <a target="_blank" href="https://instagram.com/sohamdixit__?igshid=MzRlODBiNWFlZA==" rel="noreferrer">
                                    <img src={Instagram} alt="instagram" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/soham-dixit-0879461b0" rel="noreferrer">
                                    <img src={Linkedin} alt="linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Co-Conveners Section */}
            <div className="title-convener-2">
                <Title firstWord={""} secondWord={"Co-Conveners"} />
            </div>
            <div className="containerof-20">
                {["Nikunj Agarwal", "Vishesh Aggarwal", "Harshit Shah"].map((name, index) => (
                    <div className="card0" ref={el => cardRefs.current[index + 1] = el} key={name}>
                        <div className="card-inner0">
                            <div className={`front0 Person-${(index + 2) * 10}`}>
                                <h2>{name.split(" ")[0]}</h2>
                                <p>Co-Convener</p>
                            </div>
                            <div className="back0">
                                <h1>
                                    {name.split(" ")[0]} <span>{name.split(" ")[1]}</span>
                                </h1>
                                <p>{[
                                    "There can be no false steps now. The higher up the mountain the more treacherous the path.",
                                    "If you let your learning lead to knowledge, you become a fool.",
                                    "\"That which is dreamed can never be lost, can never be undreamed.\" ~ Neil Gaiman."
                                ][index]}</p>
                                <div className="row0">
                                    <a target="_blank" href={["https://instagram.com/nikunjagrwl?igshid=MzRlODBiNWFlZA==", "https://instagram.com/visheshaggarwal_?igshid=MzRlODBiNWFlZA==", "https://instagram.com/icegreen04?igshid=MzRlODBiNWFlZA=="][index]}>
                                        <img src={Instagram} alt="instagram" />
                                    </a>
                                    <a target="_blank" href={["https://www.linkedin.com/in/nikunjagrwl", "https://www.linkedin.com/in/01visheshaggarwal", "https://www.linkedin.com/in/harshitshah-blue"][index]}>
                                        <img src={Linkedin} alt="linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPageConvener;
