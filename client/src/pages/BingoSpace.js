import React, { Component } from "react";

class BingoSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(state => ({
            isSelected: !state.isSelected
          }));
    }
    render() {
        return (
        <div onClick={this.handleClick} className={this.state.isSelected ? 'bingo-card__item active' : 'bingo-card__item'} >{this.props.text}
        <span className="bingo-card__checkbox"></span></div>
        );
      }
}

export default BingoSpace;