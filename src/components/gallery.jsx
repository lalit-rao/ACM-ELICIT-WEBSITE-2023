import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Events from './events.jsx'
import Collage1 from "./Collage1.jsx";
import "./gallery.css";
import Footer from "./footer.jsx";

const gallery = () => (
    <main className="relative">
        <section className="Hero">
            <Hero/>
        </section>
        <section className="Navbar">
            <Navbar/>
        </section>
        <section className="Events">
            <Events/>
        </section>
        <section className="Collage">
            <Collage1 />
        </section>
        <section className="Footer">
            <Footer />
        </section>
    </main>
);

export default gallery;