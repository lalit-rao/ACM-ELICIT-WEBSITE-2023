import {Component} from 'react';
import './Collage1.css';
import {A5, C3, C5, GA3, GA7, H1, H4, hero1, hero2, hero4, hero5, MI1, TH1} from "../assets/images/index.js";


class Collage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            largeImageSrc: (MI1),
        };
    }

    handleImageClick = (newImageSrc) => {
        this.setState({largeImageSrc: newImageSrc});
    };

    render() {
        return (
            <section className="animated-grid">
                <div className="card card-1"
                     onClick={() => this.handleImageClick(GA7)}>
                    <img
                        src={GA7}
                        alt="image"/>
                </div>
                <div className="card card-2"
                     onClick={() => this.handleImageClick(GA3)}>
                    <img
                        src={GA3}
                        alt=""/>
                </div>
                <div className="card card-3" onClick={() => this.handleImageClick(TH1)}>
                    <img
                        src={TH1}
                        alt=""/>
                </div>
                <div className="card card-4" onClick={() => this.handleImageClick(A5)}>
                    <img src={A5}
                         alt=""/>
                </div>
                <div className="card card-5" onClick={() => this.handleImageClick(C3)}>
                    <img
                        src={C3}
                        alt=""/>
                </div>
                <div className="card card-6" onClick={() => this.handleImageClick(H4)}>
                    <img
                        src={H4}
                        alt=""/>
                </div>
                <div className="card card-7" onClick={() => this.handleImageClick(H1)}>
                    <img src={H1}
                         alt=""/>
                </div>
                <div className="card card-8" onClick={() => this.handleImageClick(C5)}>
                    <img
                        src={C5}
                        alt=""/>
                </div>
                <div className="card card-9" onClick={() => this.handleImageClick(hero1)}>
                    <img
                        src={hero1}
                        alt=""/>
                </div>
                <div className="card card-10" onClick={() => this.handleImageClick(hero4)}>
                    <img src={hero4}
                         alt=""/>
                </div>
                <div className="card card-11" onClick={() => this.handleImageClick(hero5)}>
                    <img
                        src={hero5}
                        alt=""/>
                </div>
                <div className="card card-12" onClick={() => this.handleImageClick(hero2)}>
                    <img src={hero2}
                         alt=""/>
                </div>
                <div className="card card-main" onClick={() => this.handleImageClick(MI1)}>
                    <img src={this.state.largeImageSrc} alt="Main Image"/>
                </div>
            </section>
        );
    }
}

export default Collage1;
