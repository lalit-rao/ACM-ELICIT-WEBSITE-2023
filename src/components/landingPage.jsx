import Navbar from "./Navbar.jsx";
import CounterCards from "./CounterCards.jsx";
import Convener from "./landingPageConvener.jsx";
import LandingPageUE from "./landingPageUpcomingEvents.jsx";
import LandingPagePE from "./landingPagePastEvents.jsx";
import CarouselGallery from "./landingPageGallery.jsx";
import Footer from "./Footer.jsx";
import Title from "./title.jsx";
import "./landingPage.css";
import Hero from "./Hero.jsx";

const LandingPage = () => {
    return (
        <div className="relative">
            <section className="Hero">
                <Hero/>
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
