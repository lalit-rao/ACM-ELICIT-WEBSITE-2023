import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


import './upcomingEventsMainPage.css'
import EventPage from "./EventsPage/EventPage.jsx";

const UpcomingEventsMainPage = () => {
    return (
        <div className="relative">
            <section className="UEMP">
                <EventPage/>
            </section>
            <section className="Navbar">
                <Navbar/>
            </section>
            <section className="Footer">
                <Footer/>
            </section>
        </div>
    );
};

export default UpcomingEventsMainPage;
