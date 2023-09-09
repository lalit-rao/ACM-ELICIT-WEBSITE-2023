import './landingPageConvener.css'
import { Instagram, Linkedin } from '../assets/images/index.js'

const LandingPageConvener = () => {
    return (
        <div className="containerof">
            <div className="containerof-1">
                <div className="card">
                    <div className="card-inner">
                        <div className="front Person-1">
                            <h2>Soham Dixit</h2>
                            <p>Convener</p>
                        </div>
                        <div className="back">
                            <h1>Soham <span>Dixit</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
                            <div className="row">
                                <a target="_blank" href="https://instagram.com/sohamdixit__?igshid=MzRlODBiNWFlZA=="><img src={Instagram} alt="instagram" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/soham-dixit-0879461b0"><img src={Linkedin} alt="linkedin" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerof-2">
                <div className="card">
                    <div className="card-inner">
                        <div className="front Person-2">
                            <h2>Nikunj Agarwal</h2>
                            <p>Co-Convener</p>
                        </div>
                        <div className="back">
                            <h1>Nikunj <span>Agarwal</span></h1>
                            <p>There can be no false steps now. The higher up the mountain the more treacherous the path.</p>
                            <div className="row">
                                <a target="_blank" href="https://instagram.com/nikunjagrwl?igshid=MzRlODBiNWFlZA=="><img src={Instagram} alt="instagram" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/nikunjagrwl"><img src={Linkedin} alt="linkedin" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front Person-3">
                            <h2>Vishesh Aggarwal</h2>
                            <p>Co-Convener</p>
                        </div>
                        <div className="back">
                            <h1>Vishesh <span>Aggarwal</span></h1>
                            <p>If you let your learning lead to knowledge, you become a fool.</p>
                            <div className="row">
                                <a target="_blank" href="https://instagram.com/visheshaggarwal_?igshid=MzRlODBiNWFlZA=="><img src={Instagram} alt="instagram" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/01visheshaggarwal"><img src={Linkedin} alt="linkedin" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front Person-4">
                            <h2>Harshit Shah</h2>
                            <p>Co-Convener</p>
                        </div>
                        <div className="back">
                            <h1>Harshit <span>Shah</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
                            <div className="row">
                                <a target="_blank" href="https://instagram.com/icegreen04?igshid=MzRlODBiNWFlZA=="><img src={Instagram} alt="instagram" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/harshitshah-blue"><img src={Linkedin} alt="linkedin" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageConvener;