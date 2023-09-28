import Navbar from "./Navbar.jsx";
import Sponsors from "./sponsors.jsx";
import Footer from "./footer.jsx";

const SponsorsMainPage = () => {
    return (
        <>
            <section className="Navbar">
                <Navbar/>
            </section>
            <section className="Sponsors">
                <Sponsors/>
            </section>
            <section className="Footer">
                <Footer/>
            </section>
        </>

    );
};

export default SponsorsMainPage;