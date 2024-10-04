import React, { useState } from 'react';
import moment from 'moment';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import _gsap from 'gsap/gsap-core';
import EventPopup from './rtePopup.jsx'; // Changed name from rtePopup to EventPopup for consistency
import { Decode, Futsal, KeyboardWarriors, SecretSociety } from '../../assets/images/index.js';

// Importing images

const RteEventBoxes = ({ events, selectedDate, setSelectedDate, setActiveBox, activeBox, isEventHighlighted }) => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Event data
  const eventData = [
    {
      name: 'Keyboard Warriors',
      poster: KeyboardWarriors,
      description: "The ultimate typing battle is here! And dont worry about the language being English or Spanish. You know the drill.And if you don’t, come test your skills! Get your fingers ready to fly! The fastest one wins",
      Location: 'Infront of Nescafe',
      PrizePool: 'INR 3,000/-',
      date: moment('2024-09-26'),
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSegB5aszJVKqQewh8jhab4OOjlNP_AQBw4soqDC3KSNoig86A/viewform',
      photos: ['path/to/photo1.jpg', 'path/to/photo2.jpg', 'path/to/photo3.jpg'],
    },
    {
      name: 'Decode',
      poster: Decode,
      description: "Because let's be real, no one can explain the Matrix—you've got to experience it. a 24-hour cryptic hunt packed with brain-twisting challenges, cryptography, and decryption puzzles. Whether you're a pro or just love cracking codes, this event is for you. Bring your A-game and show us what you've got!",
      Location: 'Elicit Website',
      PrizePool: 'INR 5,000/-',
      date: moment('2024-10-01'),
      link: 'https://unstop.com/competitions/decode-40-elicit24-manipal-university-mu-jaipur-1146822?lb=67bqNzw',
      photos: ['path/to/photo1.jpg', 'path/to/photo2.jpg', 'path/to/photo3.jpg'],
    },
    {
      name: 'Futsal',
      poster: Futsal,
      description: "Ready to bend it like Beckham or embody your inner Ronaldo? The field is calling! Time to swap your textbooks for the arena as we dive in with full energy. Here, footwork speaks louder than words—unless you're a goalkeeper. Whether you’re a seasoned player or a casual contender, this tournament is all about high-octane action and waving flags even higher! So gather your crew, sharpen your tactics, and get ready for a showdown of intellect, agility, and skill. Remember, on this field, there's no room for mediocrity—you either win or you learn.",
      Location: 'ACM Chowk(Infront of Nescafe)',
      PrizePool: 'INR 7,000/-',
      date: moment('2024-10-02'),
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdhwoExmdLWcJA6cG6fX-AvESgxboO8B6ZhIiytNnhv7v0vGw/viewform',
      photos: ['path/to/photo1.jpg', 'path/to/photo2.jpg', 'path/to/photo3.jpg'],
    },
    {
      name: 'Secret Society',
      poster: SecretSociety,
      description: 'The Da Vinci Code wasn’t far from the truth. But for the record, at ACM, we’re not just uncovering secrets—we’re inviting YOU to live them! Get ready for the latest edition of our Treasure Hunt, Secret Society—an electrifying experience that will test your wits, challenge your mind, and plunge you into the shadowy world of cryptic clues and hidden cults."You don’t have to be the fastest, strongest, or the weirdest—just sharp enough to outwit the elite societies and rise above the rest." Register now and prove you belong to the elite—not the generic!',
      Location: 'MUJ Campus',
      PrizePool: 'INR 5,000/-',
      date: moment('2024-10-05'),
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdvCUD_wM3ugzfHvbDqu-vV_FmhvM530OFw7dkwI10zH81UQQ/viewform',
      photos: ['path/to/photo1.jpg', 'path/to/photo2.jpg', 'path/to/photo3.jpg'],
    },
  ];

  // Event click and double click functions
  const handleClick = (event, index) => {
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
      ease: 'sine.out',
    });
    gsap.to('.event-grp2', {
      y: -15,
      scale: 0.97,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'sine.out',
    });
  });

  return (
    <div className="event-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {events.map((event, index) => (
        <div
          key={index}
          className={`event-wrapper relative overflow-hidden rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer ${
            1 === index || 3 === index ? 'event-grp1' : 'event-grp2'
          } ${isEventHighlighted(event.date) ? 'highlighted' : ''}`}
          onClick={() => handleClick(event, index)}
          onDoubleClick={() => handleDoubleClick(index)}
        >
          <div className="event-holder">
            <img
              src={eventData[index].poster}
              alt={eventData[index].name}
              className="event-img w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-white font-bold text-lg ${
              activeBox === index || isEventHighlighted(event.date) ? 'hidden' : ''
            }`}
          >
            Click to View
          </div>
        </div>
      ))}
      {currentEvent && <EventPopup isOpen={popupOpen} onClose={closePopup} event={currentEvent} />}

      <style jsx>{`
        .event-container {
          display: grid;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .event-wrapper {
          background: #1e1e1e;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease-in-out;
        }

        .event-wrapper:hover {
          transform: translateY(-5px);
        }

        .event-holder {
          overflow: hidden;
          position: relative;
        }

        .event-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .event-img:hover {
          transform: scale(1.05);
        }

        .cover {
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.25rem;
          color: white;
        }

        .highlighted {
          border: 3px solid #d1a3ff;
        }

        /* Responsive layout for different screen sizes */
        @media (min-width: 640px) {
          .event-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .event-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .event-container {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default RteEventBoxes;
