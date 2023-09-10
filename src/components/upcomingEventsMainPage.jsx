import UEP from './upcomingEventsPage.jsx'
import Navbar from "./Navbar.jsx";

import './upcomingEventsMainPage.css'

const UpcomingEventsMainPage = () => {
    return (
        <div className="relative">
            <section className="UEMP">
                <UEP/>
            </section>
            <section className="Navbar">
                <Navbar/>
            </section>
        </div>
    );
};

export default UpcomingEventsMainPage;