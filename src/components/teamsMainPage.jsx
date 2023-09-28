import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import Teams from "./teams.jsx";

const TeamsMainPage = () => {
    return (
        <>
            <section className="Teams">
                <Teams/>
            </section>
            <section className="Navbar">
                <Navbar/>
            </section>
            <section className="Footer">
                <Footer/>
            </section>
        </>
    );
};

export default TeamsMainPage;