import { useState, useEffect } from 'react';
import RteEventPage from './RteEventPage';
import EnhancedInteractiveTimeline from './ElicitEventPage'
const EventPage = () => {
    const [isElicitPage, setIsElicitPage] = useState(false);

    const togglePage = () => {
      setIsElicitPage(!isElicitPage);
    };
  return (
    <div className='event-page'>
        <div className="toggle-container" onClick={togglePage}>
            <div className={`toggle ${isElicitPage ? 'active' : ''}`}>
                <div className="slider">
                    <span className={`slider-text ${isElicitPage ? 'active' : ''}`}>
                        {isElicitPage ? 'Elicit' : 'RTE'}
                    </span>
                </div>
                <div>RTE</div>
                <div>Elicit</div>
            </div>
        </div>
        {/* <button className='toggle-btn' onClick={togglePage}>
            {isElicitPage ? 'Switch to RTE Event Page' : 'Switch to Elicit Event Page'}
        </button> */}
        {isElicitPage? <EnhancedInteractiveTimeline/>: <RteEventPage/>}


    </div>
  )
}

export default EventPage;
