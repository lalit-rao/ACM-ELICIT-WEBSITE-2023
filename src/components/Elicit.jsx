import {useState} from "react";
import {ElicitEventData} from "./ElicitEventData.js";
import {ElicitEventCard} from "./ElicitEventCard.jsx";
import "./Elicit.css";

const DateName = {30: ["30", "th", "Sep"], 31: ["1", "st", "Oct"], 32: ["2", "nd", "Oct"]};

const ElicitContainer = () => {
    const [elicitDate, setElicitDate] = useState(30);

    const MoveBackwards = () => {
        if (elicitDate > 30) {
            setElicitDate(elicitDate - 1);
        }
    };

    const MoveForwards = () => {
        if (elicitDate < 32) {
            setElicitDate(elicitDate + 1);
        }
    };
    return (
        <>
            <div className="ElicitMainContainer">
                <div className="ElicitDateContainer">
                    <a onClick={MoveBackwards}
                       className={elicitDate == 30 ? "ElicitDateChangeButton ElicitDateChangeButonDisabled" : "ElicitDateChangeButton"}>
                        {"<"}
                    </a>
                    <h3 className="ElicitDateHeading">
                        {DateName[elicitDate][0]}
                        <sup>{DateName[elicitDate][1]}</sup> of {DateName[elicitDate][2]}, 2023
                    </h3>
                    <a onClick={MoveForwards}
                       className={elicitDate == 32 ? "ElicitDateChangeButton ElicitDateChangeButonDisabled" : "ElicitDateChangeButton"}>
                        {">"}
                    </a>
                </div>
                <div className="ElicitCardsContainer">
                    {ElicitEventData[elicitDate].map((Card, index) => (
                        <ElicitEventCard {...Card}
                                         offset={ElicitEventData[elicitDate].length - index > 5 ? 40 : (ElicitEventData[elicitDate].length - index) * 10}
                                         key={`elicitPoster-${index}`}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ElicitContainer;
