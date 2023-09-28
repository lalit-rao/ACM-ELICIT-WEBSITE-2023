import {useState} from "react";
import RTEContainer from "./RTE.jsx";
import ElicitContainer from "./Elicit.jsx";
import "./upcomingEventsPage.css";

const UpcomingEventsPage = () => {
    const [pageState, setPageState] = useState("RTE");

    const setToggle = (value) => {
        if (value === "RTE") {
            document.querySelector(".UpcomingEventsSelectedtoggle").classList.remove("ElicitSelected");
            document.querySelector(".UpcomingEventsSelectedtoggle").classList.add("RTESelected");
            document.querySelector(".RTEContainer").classList.remove("RTEMoveLeft");
            document.querySelector(".ElicitContainer").classList.remove("ElicitMoveLeft");
            document.querySelector(".RTEContainer").classList.add("RTEMoveRight");
            document.querySelector(".ElicitContainer").classList.add("ElicitMoveRight");
            setTimeout(() => {
                document.querySelector(".ElicitContainer").classList.remove("ShowElicit");
                document.querySelector(".ElicitContainer").classList.add("HideElicit");
            }, "500");
        } else if (value === "Elicit") {
            document.querySelector(".UpcomingEventsSelectedtoggle").classList.remove("RTESelected");
            document.querySelector(".UpcomingEventsSelectedtoggle").classList.add("ElicitSelected");
            document.querySelector(".ElicitContainer").classList.remove("HideElicit");
            document.querySelector(".ElicitContainer").classList.add("ShowElicit");
            setTimeout(() => {
                document.querySelector(".RTEContainer").classList.remove("RTEMoveRight");
                document.querySelector(".ElicitContainer").classList.remove("ElicitMoveRight");
                document.querySelector(".RTEContainer").classList.add("RTEMoveLeft");
                document.querySelector(".ElicitContainer").classList.add("ElicitMoveLeft");
            }, "1");
        }
        setPageState(value);
    };

    return (
        <>
            <div className="UpcomingEventsMainContainer">
                <div className="UpcomingEventstoggleContainer">
                    <div className="UpcomingEventsSelectedtoggle"></div>
                    <button type="button" onClick={() => setToggle("RTE")} className="UpcomingEventstoggle">
                        Road to Elicit
                    </button>
                    <button type="button" onClick={() => setToggle("Elicit")} className="UpcomingEventstoggle">
                        Elicit
                    </button>
                </div>
                <div className="UpcomingEventsContainer">
                    <div className="RTEContainer">
                        <RTEContainer/>
                    </div>
                    <div className="ElicitContainer">
                        <ElicitContainer/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpcomingEventsPage;
