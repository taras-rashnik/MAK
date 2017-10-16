import React, { Component } from "react";
import { Rect } from 'react-konva';

export default class Card extends Component {

  constructor(props) {
    super(props);
  }

  handleMousedown = (e) => {
    // console.log(e);
    this.dragstart = { x: e.evt.clientX, y: e.evt.clientY };
  }

  handleDragstart = (e) => {
    // console.log(e);
  }

  handleDragend(e, id) {
    // console.log(e);

    var stateCopy = Object.assign({}, this.state);
    stateCopy.cards = stateCopy.cards.slice();
    stateCopy.cards[id] = Object.assign({}, stateCopy.cards[id]);
    stateCopy.cards[id].x += e.evt.clientX - this.dragstart.x;
    stateCopy.cards[id].y += e.evt.clientY - this.dragstart.y;
    this.setState(stateCopy);
  }


  render() {
    return (
      <Rect
        key={this.props.card.id}
        x={this.props.card.x}
        y={this.props.card.y}
        width={this.props.card.w}
        height={this.props.card.h}
        fill={"red"}
        shadowBlur={5}
        draggable={true}
        onMousedown={this.handleMousedown}
        onDragstart={this.handleDragstart}
        onDragend={(e) => this.handleDragend(e, this.props.card.id)}
      />
    );
  }
}