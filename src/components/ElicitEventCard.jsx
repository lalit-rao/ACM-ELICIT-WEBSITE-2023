export const ElicitEventCard = ({ img, title, detail, link, offset }) => {
    return (
        <div className="ElicitEventCard" style={{ "--bottom-offset": offset + "px" }}>
            <div className="ElicitEventPosterContainer">
                <img src={img} className="ElicitEventPoster" />
            </div>
            <div className="ElicitContentContainer">
                <h2 className="ElicitEventTitle">{title}</h2>
                <p className="ElicitEventDetail">{detail}</p>
                <a href={link} className="ElicitRegisterButton">
                    Register
                </a>
            </div>
        </div>
    );
};
