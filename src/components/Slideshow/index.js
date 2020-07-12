import React from "react";
import styles from "./index.module.scss";

class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSlide: 0 }

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    componentDidMount() {
        document.getElementsByClassName("event")[0].classList.add(styles.selected);
    }

    nextSlide() {
        let sS = this.state.selectedSlide;
        let events = Array.from(document.getElementsByClassName("event"));
        events.forEach((e) => e.classList.remove(styles.selected));
        this.setState({ selectedSlide: sS === 5 ? 0 : sS + 1 }, () => {
            events[this.state.selectedSlide].classList.add(styles.selected);
        });
    }

    prevSlide() {
        let sS = this.state.selectedSlide;
        let events = Array.from(document.getElementsByClassName("event"));
        events.forEach((e) => e.classList.remove(styles.selected));
        this.setState({ selectedSlide: sS === 0 ? 5 : sS - 1 }, () => {
            events[this.state.selectedSlide].classList.add(styles.selected);
        });
    }

    render() {
        let slideBG = ['sis18.jpg', 'hackomania.jpg', 'bbcs19.jpg', 'stign.jpg', 'sis19.jpg', 'bbcs20.jpg']
        return (<div className={styles.slideShow}>
            <i className="material-icons" onClick={this.prevSlide}>keyboard_arrow_left</i>
            <i className="material-icons" onClick={this.nextSlide}>keyboard_arrow_right</i>
            <div style={{ backgroundImage: `url(/assets/events/${slideBG[this.state.selectedSlide]})`}}>
                {this.props.children}
            </div>
        </div>)
    }
}

export default Slideshow;