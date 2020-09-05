import React, { Component } from "react";
import '../styles/bingoCard.css'
import BingoSpace from './BingoSpace'
class BingoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            dark: false
        }
        this.handleTheme = this.handleTheme.bind(this)
    }
    componentDidMount() {
        this.getCard();
    }
    getCard() {
        fetch('/api/card/'+this.props.match.params.id)
        .then(res => res.json())
        .then(generatedCard => this.setState({ card: generatedCard.card }))
    }
    handleTheme() {
        document.body.classList.toggle("dark-theme");
        this.setState(state => ({
            dark: !state.dark
          }));
    }
    render() {
        const bingoCard = this.state.card.map((i, index) => 
        (index === 12 ? (<BingoSpace key={index} text={'Free Space'} />) : (<BingoSpace key={index} text={i} />)))
        return (
            <div className="main-content">
                <button onClick={this.handleTheme}>Toggle Dark Mode</button>
                <div className="title">
                    <span>Bingo</span>
                </div>
                <div className="bingo-card">
                    {bingoCard}
                </div>
            </div>
        );
      }
}

export default BingoCard;