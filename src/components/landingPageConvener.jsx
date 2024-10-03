import './landingPageConvener.css'
import {Instagram, Linkedin} from '../assets/images/index.js'
import Title from "./title.jsx";

const LandingPageConvener = () => {
    return (
        <div className="containerof0">
            <div className="title-convener-1">
                <Title firstWord={"Head"} secondWord={"Convener"}/>
            </div>
            <div className="containerof-1">
                <div className="card0">
                    <div className="card-inner0">
                        <div className="front0 Person-10">
                            <h2>Kuljeet Singh Shekhawat</h2>
                            <p>Head Convener</p>
                        </div>
                        <div className="back0">
                            <h1>
                                Kuljeet <span>Singh Shekhawat</span>
                            </h1>
                            <p>A legacy is built not on past achievements, but on the vision for the future.</p>
                            <div className="row0">
                                <a href="https://www.instagram.com/kuljeet_singh_shekhawat/">
                                    <img src={Instagram} alt="instagram"/>
                                </a>
                                <a href="https://www.linkedin.com/in/kuljeet-singh-shekhawat-a3694824a/">
                                    <img src={Linkedin} alt="linkedin"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title-convener-2">
                <Title firstWord={""} secondWord={"Conveners"}/>

            </div>
            <div className="containerof-20">
                <div className="card0">
                    <div className="card-inner0">
                        <div className="front0 Person-20">
                            <h2>Neet Jain</h2>
                            <p>Convener</p>
                        </div>
                        <div className="back0">
                            <h1>
                                Neet <span>Jain</span>
                            </h1>
                            <p>Discipline is the bridge between goals and accomplishments.</p>
                            <div className="row0">
                                <a href="https://www.instagram.com/neetjainnn/">
                                    <img src={Instagram} alt="instagram"/>
                                </a>
                                <a href="https://www.linkedin.com/in/neet-jain-596a01257/">
                                    <img src={Linkedin} alt="linkedin"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card0">
                    <div className="card-inner0">
                        <div className="front0 Person-30">
                            <h2>Ayan Parashar</h2>
                            <p>Convener</p>
                        </div>
                        <div className="back0">
                            <h1>
                                Ayan <span>Parashar</span>
                            </h1>
                            <p>To handle yourself, use your head; to handle others, use your heart.</p>
                            <div className="row0">
                                <a
                                   href="https://www.instagram.com/ayan_parashar/">
                                    <img src={Instagram} alt="instagram"/>
                                </a>
                                <a href="https://www.linkedin.com/in/ayan-parashar-350716279/">
                                    <img src={Linkedin} alt="linkedin"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card0">
                    <div className="card-inner0">
                        <div className="front0 Person-40">
                            <h2>Priyanshu</h2>
                            <p>Convener</p>
                        </div>
                        <div className="back0">
                            <h1>
                                Priyanshu <span></span>
                            </h1>
                            <p>You may have to fight a battle more than once to win it.</p>
                            <div className="row0">
                                <a href="https://www.instagram.com/priii_yanshu_/">
                                    <img src={Instagram} alt="instagram"/>
                                </a>
                                <a href="https://www.linkedin.com/in/priyanshu-ros/">
                                    <img src={Linkedin} alt="linkedin"/>
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
