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
          <h2>Event Details</h2>
          <button onClick={() => gsap.to(popupRef.current, { opacity: 0, scale: 0.5, duration: 0.3, ease: 'power2.in', onComplete: onClose })} className="popup-close-btn">X</button>
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
          <div className="event-Location">
            <p>Location: {event.Location}</p>
          </div>
          <div className="event-prize">
            <p>Prize Pool: {event.PrizePool}</p>
          </div>
          {/* Event Date */}
          <p><strong>Event Date:</strong> {event.date.format('YYYY-MM-DD')}</p>

          {/* Photos from last year */}
          {/* {event.photos && event.photos.length > 0 && (
            <div className="event-photos">
              <div className="photos-gallery">
                {event.photos.map((photo, index) => (
                  <div className='past-photo'>
                    <img key={index} src={photo} alt={`Previous event ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )} */}
          <button className="registerBtn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;