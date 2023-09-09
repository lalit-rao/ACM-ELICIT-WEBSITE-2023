import "./ScrollingPosters.css";
import { RTEEventsList } from "./RTEData.js";

const EventsArray = [RTEEventsList.RTEEvent1, RTEEventsList.RTEEvent2, RTEEventsList.RTEEvent3, RTEEventsList.RTEEvent4, RTEEventsList.RTEEvent1, RTEEventsList.RTEEvent2, RTEEventsList.RTEEvent3, RTEEventsList.RTEEvent4];

export const ScrollingPosters = () => {
  return (
    <>
      {EventsArray.map((Event, index) => {
        {
          return <img src={Event.RTEPoster} key={`posterImg-${index}`} onClick={() => window.open(Event.Link)} className="ScrollingPoster Posters" />;
        }
      })}
    </>
  );
};

export const ScrollingOffSetPosters = () => {
  return (
    <>
      {EventsArray.slice(1, 7).map((Event, index) => {
        {
          return <img src={Event.RTEPoster} key={`posterImg-${index}`} onClick={() => window.open(Event.Link)} className="ScrollingPoster Posters" />;
        }
      })}
    </>
  );
};
