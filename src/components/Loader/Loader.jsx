import "./Loader.css"

const Loader = () => {
    return (
        <div className="h-screen flex justify-center align-middle items-center">
            <div className="loader">
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
            </div>
        </div>
    );
};

export default Loader;
