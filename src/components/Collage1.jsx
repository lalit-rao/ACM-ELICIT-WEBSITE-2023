import { Component } from 'react';
import './Collage1.css';
import {
    A5, C3, C5, GA3, GA7, H1, H4, hero1, hero2, hero4, hero5, MI1, TH1
} from "../assets/images/index.js";

class Collage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            largeImageSrc: MI1,
        };
    }

    handleImageClick = (newImageSrc) => {
        this.setState({ largeImageSrc: newImageSrc });
    };

    renderCard = (imageSrc, cardNumber) => (
        <div className={`card card-${cardNumber}`} onClick={() => this.handleImageClick(imageSrc)}>
            <img src={imageSrc} alt={`Image ${cardNumber}`} />
        </div>
    );

    render() {
        return (
            <section className="animated-grid">
                {this.renderCard(GA7, 1)}
                {this.renderCard(GA3, 2)}
                {this.renderCard(TH1, 3)}
                {this.renderCard(A5, 4)}
                {this.renderCard(C3, 5)}
                {this.renderCard(H4, 6)}
                {this.renderCard(H1, 7)}
                {this.renderCard(C5, 8)}
                {this.renderCard(hero1, 9)}
                {this.renderCard(hero4, 10)}
                {this.renderCard(hero5, 11)}
                {this.renderCard(hero2, 12)}
                <div className="card card-main" onClick={() => this.handleImageClick(MI1)}>
                    <img src={this.state.largeImageSrc} alt="Main Image" />
                </div>
            </section>
        );
    }
}

export default Collage1;
