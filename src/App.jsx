import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/landingPage.jsx";
import "./App.css";
import UpcomingEventsMainPage from "./components/upcomingEventsMainPage.jsx";
import GalleryPage from "./components/gallery.jsx";


const App = () => {
    return (
        <>
            <div className="RootDiv">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="gallery" element={<GalleryPage/>}/>
                    <Route path="upcoming-events" element={<UpcomingEventsMainPage/>}/>
                    {/*<Route path="Team" element={<Teams/>}/>*/}
                </Routes>
            </div>
        </>
    );
};

export default App;
