import './landingPageConvener.css'
import { Instagram, Linkedin } from '../assets/images/index.js'
import Title from "./title.jsx";

const LandingPageConvener = () => {
    return (
        <div className="containerof0">
            <div className="title-convener-1">
                <Title firstWord={""} secondWord={"Convener"} />
            </div>
            <div className="containerof-1">
                <div className="card0">
                    <div className="card-inner0">
                        <div className="front0 Person-10">
                            <h2>Soham Dixit</h2>
                            <p>Convener</p>
                        </div>
                        <div className="back0">
                            <h1>
                                Soham <span>Dixit</span>
                            </h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa aliquam aspernatur nulla quod, enim rerum.</p>
                            <div className="row0">
                                <a target="_blank" href="https://instagram.com/sohamdixit__?igshid=MzRlODBiNWFlZA==">
                                    <img src={Instagram} alt="instagram" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/soham-dixit-0879461b0">
                                    <img src={Linkedin} alt="linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title-convener-2">
                <Title firstWord={""} secondWord={"Co-Conveners"} />

            </div>
            <div className="containerof-20">
                <div className="card0">
                    <div className="card-inner0">
                        <div className="front0 Person-20">
                            <h2>Nikunj Agarwal</h2>
                            <p>Co-Convener</p>
                        </div>
                        <div className="back0">
                            <h1>
                                Nikunj <span>Agarwal</span>
                            </h1>
                            <p>There can be no false steps now. The higher up the mountain the more treacherous the path.</p>
                            <div className="row0">
                                <a target="_blank" href="https://instagram.com/nikunjagrwl?igshid=MzRlODBiNWFlZA==">
                                    <img src={Instagram} alt="instagram" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/nikunjagrwl">
                                    <img src={Linkedin} alt="linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card0">
                    <div className="card-inner0">
                        <div className="front0 Person-30">
                            <h2>Vishesh Aggarwal</h2>
                            <p>Co-Convener</p>
                        </div>
                        <div className="back0">
                            <h1>
                                Vishesh <span>Aggarwal</span>
                            </h1>
                            <p>If you let your learning lead to knowledge, you become a fool.</p>
                            <div className="row0">
                                <a target="_blank" href="https://instagram.com/visheshaggarwal_?igshid=MzRlODBiNWFlZA==">
                                    <img src={Instagram} alt="instagram" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/01visheshaggarwal">
                                    <img src={Linkedin} alt="linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card0">
                    <div className="card-inner0">
                        <div className="front0 Person-40">
                            <h2>Harshit Shah</h2>
                            <p>Co-Convener</p>
                        </div>
                        <div className="back0">
                            <h1>
                                Harshit <span>Shah</span>
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod tempore. Odio totam nulla ratione.</p>
                            <div className="row0">
                                <a target="_blank" href="https://instagram.com/icegreen04?igshid=MzRlODBiNWFlZA==">
                                    <img src={Instagram} alt="instagram" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/harshitshah-blue">
                                    <img src={Linkedin} alt="linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageConvener;