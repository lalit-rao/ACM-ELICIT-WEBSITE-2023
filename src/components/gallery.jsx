import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
// import Gallery from "./components/Gallery";
// import Collage from "./components/Collage";
import Events from './events.jsx'
// import Trial from "./components/trial";
import Collage1 from "./Collage1.jsx";
import "./gallery.css";

const gallery = () => (
    <main className="relative">
        <section className="Hero">
            <Hero/>
        </section>
        <section className="Navbar">
            <Navbar/>
        </section>
        {/*<section className="Gallery">
            <Gallery />
        </section>*/}
        {/*<section className="Collage">
            <Collage />
        </section>*/}
        <section className="Events">
            <Events/>
        </section>
        {/*<section className="trial">
            <Trial />
        </section>*/}
        <section className="trial">
            <Collage1/>
        </section>
    </main>
);

export default gallery;