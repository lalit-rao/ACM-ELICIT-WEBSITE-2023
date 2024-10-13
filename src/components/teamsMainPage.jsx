import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Teams from "./teams.jsx";
import CoreCard from "./CoreCard.jsx";

const TeamsMainPage = () => {
    return (
        <>
            <section className="Navbar">
                <Navbar/>
            </section>
            <section className="Teams">
                <Teams/>
            </section>
            <section className="Teams">
                <CoreCard/>
            </section>
            <section className="Footer">
                <Footer/>
            </section>
        </>
    );
};

export default TeamsMainPage;
