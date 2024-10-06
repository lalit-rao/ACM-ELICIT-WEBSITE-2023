import { useState, useEffect } from 'react';
import Calender from './calendar';
import EventBoxes from './rteEventBoxes';
import dayjs from 'dayjs';

const RteEventPage = () => {
// selecting dates
  const [selectedDate, setSelectedDate] = useState('2024-09-26');
  const [activeBox, setActiveBox] = useState(null);
  const events = [
    { id: 0, date: dayjs('2024-09-26') },
    { id: 1, date: dayjs('2024-10-01') },
    { id: 2, date: dayjs('2024-10-02') },
    { id: 3, date: dayjs('2024-10-05') },
  ];
// Selecting Dates and event hightlight
  useEffect(() => {
    const calendarDays = document.querySelectorAll('.calendar-day.clickable');
    calendarDays.forEach((day) => {
      day.addEventListener('click', (e) => {
        const clickedDate = dayjs(e.target.dataset.date);
        setSelectedDate(clickedDate);
      });
    });
  }, []);
  const isEventHighlighted = (eventDate) => dayjs(selectedDate).isSame(eventDate, 'day');

  return (
    <div className="max-w-[90%] mx-auto min-h-screen flex flex-col items-center justify-center container">
      <h1 className="text-5xl max-w-[90%] mx-auto font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
        ROAD TO ELICIT EVENTS
      </h1>
      <div className="calender-container">
        <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      </div>

      <EventBoxes
        events={events}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setActiveBox={setActiveBox}
        activeBox={activeBox}
        isEventHighlighted={isEventHighlighted}
      />
    </div>
  );
};

export default RteEventPage;
