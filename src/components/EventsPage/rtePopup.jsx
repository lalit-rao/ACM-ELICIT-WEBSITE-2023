/*
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EventPopup = ({ isOpen, onClose, event }) => {
  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    } else if (!isOpen && popupRef.current) {
      gsap.to(popupRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: onClose,
      });
    }
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  return (
    <div className="popup-overlay" ref={overlayRef}>
      <div className="popup-container" ref={popupRef}>
        <div className="popup-header">
          <h2>{event.name}</h2>
          <button
            onClick={() =>
              gsap.to(popupRef.current, {
                opacity: 0,
                scale: 0.5,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: onClose,
              })
            }
            className="popup-close-btn"
          >
            &times;
          </button>
        </div>
        <div className="popup-content">
          {/!* Event Poster *!/}
          {event.poster && (
            <div className="event-poster">
              <img src={event.poster} alt={`${event.name} poster`} />
            </div>
          )}

          {/!* Event Description *!/}
          <div className="event-description">
            <p>{event.description}</p>
          </div>

          {/!* Event Location and Prize *!/}
          <div className="event-details">
            <p>
              <strong>Location:</strong> {event.Location}
            </p>
            <p>
              <strong>Prize Pool:</strong> {event.PrizePool}
            </p>
            <p>
              <strong>Event Date:</strong> {event.date.format('YYYY-MM-DD')}
            </p>
          </div>

          {/!* Register Button *!/}
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            <button className="register-btn">Register</button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .popup-container {
          background: #1e1e1e;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
          max-width: 500px;
          width: 90%;
          max-height: 90%;
          overflow-y: auto;
          transform-origin: center;
          padding: 20px;
          position: relative;
        }

        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
        }

        .popup-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #d1a3ff;
        }

        .popup-close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #d1a3ff;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .popup-close-btn:hover {
          color: #9b59b6;
        }

        .event-poster img {
          width: 100%;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
          margin-bottom: 20px;
        }

        .event-description {
          font-size: 1rem;
          color: #ccc;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .event-details {
          font-size: 1rem;
          color: #b19cd9;
          margin-bottom: 20px;
        }

        .event-details p {
          margin: 5px 0;
        }

        .register-btn {
          display: block;
          width: 100%;
          padding: 12px;
          background: #6a0dad;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
          box-shadow: 0 8px 15px rgba(106, 13, 173, 0.4);
        }

        .register-btn:hover {
          background: #4b0082;
        }

        /!* Add scrollbar styling *!/
        .popup-container::-webkit-scrollbar {
          width: 8px;
        }

        .popup-container::-webkit-scrollbar-thumb {
          background: #6a0dad;
          border-radius: 10px;
        }

        .popup-container::-webkit-scrollbar-thumb:hover {
          background: #4b0082;
        }
      `}</style>
    </div>
  );
};

export default EventPopup;
*/










import React, { useEffect, useRef } from 'react';
import { MapPin, Gift, Calendar } from 'lucide-react'; // Using Lucide icons
import gsap from 'gsap';

const EventPopup = ({ isOpen, onClose, event }) => {
  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    } else if (!isOpen && popupRef.current) {
      gsap.to(popupRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: onClose,
      });
    }
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (overlayRef.current && e.target === overlayRef.current) {
      gsap.to(popupRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: onClose,
      });
    }
  };

  if (!isOpen || !event) return null;

  return (
    <div className="popup-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="popup-container" ref={popupRef}>
        <div className="popup-header">
          <h2>{event.name}</h2>
          <button
            onClick={() =>
              gsap.to(popupRef.current, {
                opacity: 0,
                scale: 0.5,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: onClose,
              })
            }
            className="popup-close-btn"
          >
            &times;
          </button>
        </div>
        <div className="popup-content">
          {/* Event Poster */}
          {event.poster && (
            <div className="event-poster">
              <img src={event.poster} alt={`${event.name} poster`} />
            </div>
          )}

          {/* Event Description */}
          <div className="event-description">
            <p>{event.description}</p>
          </div>

          {/* Event Location, Prize, and Date */}
          <div className="event-details">
            <div className="event-detail-item">
              <MapPin size={20} color="#d1a3ff" />
              <p>Location: {event.Location}</p>
            </div>
            <div className="event-detail-item">
              <Gift size={20} color="#d1a3ff" />
              <p>Prize Pool: {event.PrizePool}</p>
            </div>
            <div className="event-detail-item">
              <Calendar size={20} color="#d1a3ff" />
              <p>Event Date: {event.date.format('YYYY-MM-DD')}</p>
            </div>
          </div>

          {/* Register Button */}
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            <button className="register-btn">Register</button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .popup-container {
          background: #1e1e1e;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
          max-width: 500px;
          width: 90%;
          max-height: 90%;
          overflow-y: auto;
          transform-origin: center;
          padding: 20px;
          position: relative;
        }

        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
        }

        .popup-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #d1a3ff;
        }

        .popup-close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #d1a3ff;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .popup-close-btn:hover {
          color: #9b59b6;
        }

        .event-poster img {
          width: 100%;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
          margin-bottom: 20px;
        }

        .event-description {
          font-size: 1rem;
          color: #ccc;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .event-details {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;
        }

        .event-detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          color: #b19cd9;
        }

        .register-btn {
          display: block;
          width: 100%;
          padding: 12px;
          background: #6a0dad;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
          box-shadow: 0 8px 15px rgba(106, 13, 173, 0.4);
        }

        .register-btn:hover {
          background: #4b0082;
        }

        /* Add scrollbar styling */
        .popup-container::-webkit-scrollbar {
          width: 8px;
        }

        .popup-container::-webkit-scrollbar-thumb {
          background: #6a0dad;
          border-radius: 10px;
        }

        .popup-container::-webkit-scrollbar-thumb:hover {
          background: #4b0082;
        }
      `}</style>
    </div>
  );
};

export default EventPopup;
