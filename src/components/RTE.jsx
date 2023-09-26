import { useState } from "react";
import { RTEEventsList } from "./RTEData.js";
import poster1 from "../assets/images/RTE23Posters/MurderMystery.webp";
import poster2 from "../assets/images/RTE23Posters/Elevate.webp";
import poster3 from "../assets/images/RTE23Posters/Elicit.webp";
import poster4 from "../assets/images/RTE23Posters/Futsal.webp";
import poster5 from "../assets/images/RTE23Posters/Decode.webp";
import "./StackedCards.css";
import "./RTE.css";

var LoadedCarouselScript = false;

const RTEContainer = () => {
  const [RTEselectedDate, setRTESelectedDate] = useState(RTEEventsList.RTEEvent5);

  function CarouselScript() {
    const scriptTag = document.createElement("script");
    scriptTag.src = "/src/upcoming-events-page/StackedCards.js";
    document.body.appendChild(scriptTag);
  }

  const RTEDateLink = (Id, eventId) => {
    var newActive = document.getElementById(Id);
    var isItem = newActive.closest(".carousel__item");

    if (!isItem || newActive.classList.contains("carousel__item_active")) {
      return;
    }

    update(newActive, eventId);
    setRTESelectedDate(RTEEventsList[eventId.slice(1)]);
  };

  if (LoadedCarouselScript == false) {
    CarouselScript();
    LoadedCarouselScript = true;
  }

  return (
    <>
      <div className="RTEMainContainer">
        <div className="RTECalender">
          <h2 className="RTEMonthName">September 2023</h2>
          <hr className="MonthSeparator"></hr>
          <div className="RTEDatesContainer">
            <h5 className="DaysName">Sun</h5>
            <h5 className="DaysName">Mon</h5>
            <h5 className="DaysName">Tue</h5>
            <h5 className="DaysName">Wed</h5>
            <h5 className="DaysName">Thu</h5>
            <h5 className="DaysName">Fri</h5>
            <h5 className="DaysName">Sat</h5>
            <a href="" className="EmptyDateBlock"></a>
            <a href="" className="EmptyDateBlock"></a>
            <a href="" className="EmptyDateBlock"></a>
            <a href="" className="EmptyDateBlock"></a>
            <a href="" className="EmptyDateBlock"></a>
            <a href="" className="DisabledDate">
              1
            </a>
            <a href="" className="DisabledDate">
              2
            </a>
            <a href="" className="DisabledDate">
              3
            </a>
            <a href="" className="DisabledDate">
              4
            </a>
            <a href="" className="DisabledDate">
              5
            </a>
            <a href="" className="DisabledDate">
              6
            </a>
            <a href="" className="DisabledDate">
              7
            </a>
            <a href="" className="DisabledDate">
              8
            </a>
            <a onClick={() => RTEDateLink("RTEPoster1", "#RTEEvent1")} className="ActiveDate" id="RTEEvent1">
              9
            </a>
            <a onClick={() => RTEDateLink("RTEPoster1", "#RTEEvent1")} className="ActiveDate" id="RTEEvent1">
              10
            </a>
            <a href="" className="DisabledDate">
              11
            </a>
            <a href="" className="DisabledDate">
              12
            </a>
            <a href="" className="DisabledDate">
              13
            </a>
            <a href="" className="DisabledDate">
              14
            </a>
            <a href="" className="DisabledDate">
              15
            </a>
            <a href="" className="DisabledDate">
              16
            </a>
            <a onClick={() => RTEDateLink("RTEPoster2", "#RTEEvent2")} className="ActiveDate" id="RTEEvent2">
              17
            </a>
            <a href="" className="DisabledDate">
              18
            </a>
            <a onClick={() => RTEDateLink("RTEPoster3", "#RTEEvent3")} className="ActiveDate" id="RTEEvent3">
              19
            </a>
            <a href="" className="DisabledDate">
              20
            </a>
            <a href="" className="DisabledDate">
              21
            </a>
            <a href="" className="DisabledDate">
              22
            </a>
            <a onClick={() => RTEDateLink("RTEPoster4", "#RTEEvent4")} className="ActiveDate" id="RTEEvent4">
              23
            </a>
            <a onClick={() => RTEDateLink("RTEPoster4", "#RTEEvent4")} className="ActiveDate" id="RTEEvent4">
              24
            </a>
            <a href="" className="DisabledDate">
              25
            </a>
            <a href="" className="DisabledDate">
              26
            </a>
            <a href="" className="DisabledDate">
              27
            </a>
            <a href="" className="DisabledDate">
              28
            </a>
            <a href="" className="DisabledDate">
              29
            </a>
            <a href="" className="DisabledDate">
              30
            </a>
          </div>
        </div>
        <div className="RTEContentContainer">
          <div className="RTEPostersContainer carousel">
            <ul className="carousel__list">
              <li className="carousel__item TEEvent1" id="RTEPoster1" data-pos="-2">
                <img src={poster1} className="RTEPosters" />
              </li>
              <li className="carousel__item TEEvent2" id="RTEPoster2" data-pos="-1">
                <img src={poster2} className="RTEPosters" />
              </li>
              <li className="carousel__item TEEvent5" id="RTEPoster5" data-pos="0">
                <img src={poster3} className="RTEPosters" />
              </li>
              <li className="carousel__item TEEvent4" id="RTEPoster4" data-pos="1">
                <img src={poster4} className="RTEPosters" />
              </li>
              <li className="carousel__item TEEvent3" id="RTEPoster3" data-pos="2">
                <img src={poster5} className="RTEPosters" />
              </li>
            </ul>
          </div>
          <h3 className="RTEEventTitle" style={{ display: RTEselectedDate.Title == "DisplayNone" ? "none" : "initial" }}>
            {RTEselectedDate.Title}
          </h3>
          <p className="RTEEventDetail" style={{ display: RTEselectedDate.Title == "DisplayNone" ? "none" : "initial" }}>
            {RTEselectedDate.Detail}
          </p>
          <button type="button" className="RTERegisterButton" style={{ display: RTEselectedDate.Title == "DisplayNone" ? "none" : "initial" }} onClick={() => window.open(RTEselectedDate.Link)}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RTEContainer;