import { ScrollingPosters, ScrollingOffSetPosters } from "./ScrollingPosters.jsx";
import poster1 from "../assets/images/RTE23Posters/Elicit.png";
import poster2 from "../assets/images/RTE23Posters/ComingSoon.jpeg";

import './landingPageUpcomingEvents.css'
const landingPageUpcomingEvents = () => {
    return (
        <div className="MainContainer">
            <div className="element1 GridGap"></div>
            <div className="element2 GridGap PosterBorder">
                <ScrollingPosters />
            </div>
            <div className="element3 GridGap">
                <div className="HorizontalLine" style={{ background: "#1f0f3d" }}></div>
                <div className="HorizontalLine" style={{ background: "#291452" }}></div>
                <div className="HorizontalLine" style={{ background: "#3D1F7A" }}></div>
                <div className="HorizontalLine" style={{ background: "#5229A3" }}></div>
                <div className="HorizontalLine" style={{ background: "#6633CC" }}></div>
                <div className="HorizontalLine" style={{ background: "#855CD6" }}></div>
                <div className="HorizontalLine" style={{ background: "#A385E0" }}></div>
                <div className="HorizontalLine" style={{ background: "#C2ADEB" }}></div>
                <div className="HorizontalLine" style={{ background: "#E0D6F5" }}></div>
            </div>
            <div className="element4 GridGap"></div>
            <div className="element5 GridGap PosterBorder">
                <a href="/Upcoming-Events">
                    <img src={poster2} className="Posters" />
                </a>
            </div>
            <div className="element6 GridGap HorizontalLineElement">
                <div className="VerticalLine" style={{ background: "#E0D6F5" }}></div>
                <div className="VerticalLine" style={{ background: "#C2ADEB" }}></div>
                <div className="VerticalLine" style={{ background: "#A385E0" }}></div>
                <div className="VerticalLine" style={{ background: "#855CD6" }}></div>
                <div className="VerticalLine" style={{ background: "#6633CC" }}></div>
                <div className="VerticalLine" style={{ background: "#5229A3" }}></div>
                <div className="VerticalLine" style={{ background: "#3D1F7A" }}></div>
                <div className="VerticalLine" style={{ background: "#291452" }}></div>
                <div className="VerticalLine" style={{ background: "#1f0f3d" }}></div>
            </div>
            <div className="element7 GridGap PosterBorder">
                <a href="/Upcoming-Events">
                    <img src={poster1} className="Posters" />
                </a>
            </div>
            <div className="element8 GridGap PosterBorder">
                <a href="/Upcoming-Events">
                    <img src={poster1} className="Posters" />
                </a>
            </div>
            <div className="element9 GridGap PosterBorder">
                <ScrollingOffSetPosters />
            </div>
            <div className="element10 GridGap"></div>
            <div className="element11 GridGap PosterBorder">
                <a href="/Upcoming-Events">
                    <img src={poster1} className="Posters" />
                </a>
            </div>
            <div className="element12"></div>
            <div className="element13 GridGap"></div>
            <div className="element14"></div>
            <div className="element15 GridGap"></div>
            <div className="element16 GridGap PosterBorder">
                <a href="/Upcoming-Events">
                    <img src={poster2} className="Posters" />
                </a>
            </div>
            <div className="element17 GridGap"></div>
            <div className="element18"></div>
            <div className="element19"></div>
            <div className="element20"></div>
            <div className="element21 GridGap"></div>
            <div className="element22 GridGap"></div>
            <div className="element23"></div>
            <div className="element24"></div>
        </div>
    );
};

export default landingPageUpcomingEvents;
