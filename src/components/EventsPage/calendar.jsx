'use client';

import React, { useState } from 'react';
import dayjs from 'dayjs';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const startDate = dayjs('2024-09-22');
  const endDate = startDate.add(35, 'day');
  const daysInMonth = endDate.diff(startDate, 'day');

  const clickableDates = [
    '2024-09-26',
    '2024-10-01',
    '2024-10-02',
    '2024-10-05'
  ];

  const isClickable = (date) => {
    return clickableDates.includes(date.format('YYYY-MM-DD'));
  };

  const renderCalendarDays = () => {
    const days = [];
    let currentDate = startDate;

    for (let i = 0; i < daysInMonth; i++) {
      const day = currentDate.format('D');
      const date = currentDate.format('YYYY-MM-DD');
      const clickable = isClickable(currentDate);
      const isSelected = selectedDate === date;

      days.push(
        <div
          key={date}
          className={`calendar-day ${clickable ? 'clickable' : 'disabled'} ${isSelected ? 'selected' : ''}`}
          onClick={clickable ? () => handleDateClick(date) : undefined}
        >
          {day}
        </div>
      );
      currentDate = currentDate.add(1, 'day');
    }

    return days;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar">
        <div className="calendar-month">September - October 2024</div>
      <div className="calendar-header">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="calendar-body">
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;