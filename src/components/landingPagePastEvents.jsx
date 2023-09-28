import "@fontsource/readex-pro";
import decrypt from "../assets/images/PastEvents/decrypt.jpg";
import defi from "../assets/images/PastEvents/Defi.jpg";
import gamers from "../assets/images/PastEvents/Gamers.jpg";
import eminent from "../assets/images/PastEvents/eminent.jpg";
import futsal from "../assets/images/PastEvents/futsal.jpg";
import hacks from "../assets/images/PastEvents/hacks.jpg";
import hunt from "../assets/images/PastEvents/hunt.jpg";
import "./landingPagePastEvents.css";

const landingPagePastEvents = () => {
    return (
        <div className="body-div">
            <div className="mob1">
                <div className="three-ti-one-ev">
                    <div className="ti1"></div>
                    <div className="two-ti-one-ev">
                        <div className="two-ti">
                            <div className="ti2"></div>
                            <div className="ti3"></div>
                        </div>
                        <div className="ev5">
                            <img src={eminent} className="image"/>
                            <div className="text" id="eve5">
                                Speaker Program
                            </div>
                            <div className="mat">The ACM India Eminent speaker program(ESP) provides local ACM chapters
                                with direct access to top technology leaders. During Elicit'22 MUJ ACM had the privilege
                                of inviting Rahul Johari, a renowned professor at Guru Gobind Indraprastha University,
                                Head of the Software Development Cell as well as head of SWINGER, he shared his profound
                                insights and expertise on the field of Blockchains with our students and gave them a
                                headstart in this emerging field.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="four-ti-two-ev">
                    <div className="two-ti-ev1">
                        <div className="two-ti1">
                            <div className="ti4"></div>
                            <div className="ti5"></div>
                        </div>
                        <div className="ev6">
                            <img src={defi} className="image"/>
                            <div className="text" id="eve6">
                                DeFi Hacks
                            </div>
                            <div className="mat">DeFi-Hacks represented a fusion of blockchain and web technologies in a
                                hackathon curated for the students. This event encouraged participants to test their
                                practical knowledge and demonstrate their Web 3.0 prototypes through real-world
                                challenges, offering a whopping cash prize.
                            </div>
                        </div>
                    </div>
                    <div className="two-ti-ev2">
                        <div className="ev7">
                            <img src={hunt} className="image"/>
                            <div className="text" id="eve7">
                                Treasure Hunt
                            </div>
                            <div className="mat">The Harry Potter-inspired treasure hunt offered an adventurous
                                experience for the participants, involving the pursuit of hidden clues throughout the
                                campus. This event encouraged the participants to showcase their problem-solving and
                                brainstorming abilities. The competition commenced with all the teams exploring the
                                hostel area to uncover and solve clues, leaving the most consistently successful team as
                                the ultimate winner.
                            </div>
                        </div>
                        <div className="two-ti2">
                            <div className="ti6"></div>
                            <div className="ti7"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mob2">
                <div className="ev-ti">
                    <div className="ev1">
                        <img src={decrypt} className="image"/>
                        <div className="text" id="eve1">
                            Decrypt 2.0
                        </div>
                        <div className="mat">Decrypt was a big online cryptic hunt that lasted a whole day in which
                            participants had to implement their unique computer techniques to uncover hidden clues
                            scattered throughout the internet. It was all about cybersecurity, like being a digital
                            detective racing to find these secret hints and win the prize money.
                        </div>
                    </div>
                    <div className="ti8"></div>
                </div>
                <div className="three-ev-two-ti">
                    <div className="ev-ev">
                        <div className="ev2">
                            <img src={gamers} className="image"/>
                            <div className="text" id="eve2">
                                Gamers Assylum
                            </div>
                            <div className="mat">The Gamers Asylum event spanned 13 hours and featured three exciting
                                games: FIFA22, Call of Duty, and F1. Throughout the event, gamers faced off in exciting
                                matches, showing off their gaming skills and clever tactics to outplay their
                                opponents,all in pursuit of a highly sought-after reward.
                            </div>
                        </div>
                        <div className="ev3">
                            <img src={hacks} className="image"/>
                            <div className="text" id="eve3">
                                Hacks 7.0
                            </div>
                            <div className="mat">Hacks 7.0 engaged the participants in a demanding 36-hour challenge,
                                racing against time to build and improve their project. The event provided a launching
                                base for many budding tech enthusiasts to go forward with their skills in design,
                                development and pitching.
                            </div>
                        </div>
                    </div>
                    <div className="two-ti-ev">
                        <div className="ti9"></div>
                        <div className="ev4">
                            <img src={futsal} className="image"/>
                            <div className="text" id="eve4">
                                Futsal
                            </div>
                            <div className="mat">As we eagerly counted down to the kickoff of World Cup 2022, MUJ ACM
                                took the initiative to host a thrilling game of Futsal during Elicit'22! This event was
                                a brilliant display of our Technocultural spirit, emphasizing the invaluable journey of
                                nurturing our cherished members' well-rounded growth. It was a thrill from start to
                                finish!
                            </div>
                        </div>
                        <div className="ti10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default landingPagePastEvents;
