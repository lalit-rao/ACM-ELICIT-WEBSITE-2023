import LPHero from "./landingPageHero.jsx";
import Navbar from "./Navbar.jsx";
import CounterCards from "./CounterCards.jsx";
// import MainHero from './landingPageMainHero.jsx';
import Convener from "./landingPageConvener.jsx";
import LandingPageUE from "./landingPageUpcomingEvents.jsx";
import LandingPagePE from "./landingPagePastEvents.jsx";
import CarouselGallery from "./landingPageGallery.jsx";
import Footer from "./footer.jsx";
import Title from "./title.jsx";
import "./landingPage.css";

const LandingPage = () => {
    return (
        <div className="relative">
            <section className="Hero">
                <LPHero/>
            </section>
            <section className="Navbar">
                <Navbar/>
            </section>
            <section className="CounterCards">
                <CounterCards/>
            </section>
            <section className="Convener">
                <Convener/>
            </section>
            <section className="UpcomingEvents">
                <Title firstWord={"Upcoming"} secondWord={"Events"}/>
                <LandingPageUE/>
            </section>
            <section className="PastEvents">
                <Title firstWord={"Past"} secondWord={"Events"}/>
                <LandingPagePE/>
            </section>
            <Title firstWord={""} secondWord={"Gallery"}/>
            <section className="CarouselLandingGallery">
                <CarouselGallery/>
            </section>
            <section className="Footer">
                <Footer/>
            </section>
        </div>
    );
};

export default LandingPage;