// components/EventBoxes.jsx
import React, { useState } from 'react';
import moment from 'moment';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import _gsap from 'gsap/gsap-core';
import EventPopup from './rtePopup';
import {Decode, Futsal, KeyboardWarriors, SecretSociety} from "../../assets/images/index.js";
//importing images

const rteEventBoxes = ({ events, selectedDate, setSelectedDate, setActiveBox, activeBox, isEventHighlighted}) => {
const [currentEvent, setCurrentEvent] = useState(null);
const [popupOpen, setPopupOpen] = useState(false);
// Event data
const eventData = [
  {
    name: 'Keyboard Warriors',
    poster: KeyboardWarriors,
    description: "The ultimate typing battle is here! And dont worry about the language being English or Spanish. You know the drill.And if you don’t, come test your skills! Get your fingers ready to fly! The fastest one wins!",
    Location: "Infront of Nescafe",
    PrizePool: "INR 3,000/-",
    date: moment('2024-09-26'),
    photos: [
      'path/to/photo1.jpg',
      'path/to/photo2.jpg',
      'path/to/photo3.jpg',
    ],
  },
  {
    name: 'Decode',
    poster: Decode,
    description: "Because let's be real, no one can explain the Matrix—you've got to experience it. a 24-hour cryptic hunt packed with brain-twisting challenges, cryptography, and decryption puzzles. Whether you're a pro or just love cracking codes, this event is for you. Bring your A-game and show us what you've got!",
    Location: "Elicit Website",
    PrizePool: "INR 5,000/-",
    date: moment('2024-10-01'),
    photos: [
      'path/to/photo1.jpg',
      'path/to/photo2.jpg',
      'path/to/photo3.jpg',
    ],
  },
  {
    name: 'Footsal',
    poster: Futsal,
    description: "Ready to bend it like Beckham or embody your inner Ronaldo? The field is calling! Time to swap your textbooks for the arena as we dive in with full enrgy.Here,footwork speaks louder than words—unless you're a goalkeeper. Whether you’re a seasoned player or a casual contender, this tournament is all about high-octane action and waving flags even higher! So gather your crew, sharpen your tactics, and get ready for a showdow of intellect, agility,  and skill. Remember, on this field, there's no room for mediocrity—you either win or you learn. ",
    Location: "ACM Chowk(Infront of Nescafe) ",
    PrizePool: "INR 7,000/-",
    date: moment('2024-10-02'),
    photos: [
      'path/to/photo1.jpg',
      'path/to/photo2.jpg',
      'path/to/photo3.jpg',
    ],
  },
  {
    name: 'Secret Society',
    poster: SecretSociety,
    description: 'The Da Vinci Code wasn’t far from the truth. But for the record, at ACM, we’re not just uncovering secrets—we’re inviting YOU to live them! Get ready for the latest edition of our Treasure Hunt, Secret Society—an electrifying experience that will test your wits, challenge your mind, and plunge you into the shadowy world of cryptic clues and hidden cults."You dont have to be the fastest, strongest, or the weirdest—just sharp enough to outwit the elite societies and rise above the rest." Register now and prove you belong to the elite-not the generic! ',
    Location: "MUJ Campus",
    PrizePool: "INR 5,000/-",
    date: moment('2024-10-05'),
    photos: [
      'path/to/photo1.jpg',
      'path/to/photo2.jpg',
      'path/to/photo3.jpg',
    ],
  }
];
// Event click and double click functions
  const [clickCount, setClickCount] = useState(0);
  const handleClick = (event,index) => {
    setClickCount(clickCount + 1);
    setActiveBox(index);
    setSelectedDate(event.date.format('YYYY-MM-DD'));

  };

  const handleDoubleClick = (index) => {
    setClickCount(0);
    setCurrentEvent(eventData[index]);
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
    setCurrentEvent(null);
  };

// Floating animations
  useGSAP(() => {
          gsap.to('.event-grp1', {
          y: 15,
          scale: 0.97,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.out"
        });
        gsap.to('.event-grp2', {
          y: -15,
          scale: 0.97,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.out"
        });
    },
  );

  return (
    <div className="flex flex-wrap justify-center align-middle items-center event-container">
      {events.map((event, index) => (
        <div
          key={index}
          className={`event-wrapper flex justify-center align-middle items-center ${1 === index || 3 === index? 'event-grp1' : 'event-grp2'} ${isEventHighlighted(event.date) ? 'highlighted' : ''}`}
          onClick={() => handleClick(event,index)}
          onDoubleClick={() => handleDoubleClick(index)}
        >
          <div className="event-holder">
            <img src={eventData[index].poster} alt={eventData[index].name} className="event-img" />
          </div>
          <div className={`${activeBox === index || isEventHighlighted(event.date) ? 'remove' : 'cover'}`}></div>
        </div>
      ))}
      {currentEvent && <EventPopup isOpen={popupOpen} onClose={closePopup} event={currentEvent} />}
    </div>
  );
};

export default rteEventBoxes;
