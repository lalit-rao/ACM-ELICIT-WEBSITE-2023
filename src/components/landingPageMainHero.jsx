import LPHero from "./landingPageHero.jsx";
import Navbar from "./Navbar.jsx";
import CounterCards from "./CounterCards.jsx";

const LandingPageMainHero = () => {
    return (
        <div className="relative-side">
            <section className="Hero">
                <LPHero/>
            </section>
            <section className="Navbar">
                <Navbar/>
            </section>
            <section className="CounterCards">
                <CounterCards/>
            </section>
        </div>
    );
};

export default LandingPageMainHero;