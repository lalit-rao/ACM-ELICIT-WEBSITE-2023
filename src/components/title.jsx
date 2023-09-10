import PropTypes from "prop-types";
import "./title.css";

const Title = ({ firstWord, secondWord }) => {
    return (
        <div className="title-heading-box">
            <div className="title-heading">
                {firstWord} <span className="title-heading2">{secondWord}</span>
            </div>
        </div>
    );
};

Title.propTypes = {
    firstWord: PropTypes.string.isRequired,
    secondWord: PropTypes.string.isRequired,
};

export default Title;
