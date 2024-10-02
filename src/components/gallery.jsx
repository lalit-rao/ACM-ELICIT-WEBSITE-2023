import Navbar from "./Navbar.jsx";
import GalleryHero from "./GalleryHero.jsx";
import Events from './events.jsx'
import Collage1 from "./Collage1.jsx";
import "./gallery.css";
import Footer from "./Footer.jsx";

const gallery = () => (
    <main className="relative">
        <section className="Hero">
            <GalleryHero/>
        </section>
        <section className="Navbar">
            <Navbar/>
        </section>
        <section className="Events">
            <Events/>
        </section>
        <section className="Collage">
            <Collage1/>
        </section>
        <section className="Footer">
            <Footer/>
        </section>
    </main>
);

export default gallery;
