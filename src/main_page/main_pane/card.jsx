import React, { Component } from "react";
import { Rect, Group, Text } from 'react-konva';

export default class Card extends Component {

  constructor(props) {
    super(props);
  }

  handleMouseup = (e) => {
    this.refs.group.to({
      scaleX: 1,
      scaleY: 1,
      duration: 0.2
    });
  }

  handleMousedown = (e) => {
    console.log(e);
    this.startCoords = {
      x: this.props.card.x,
      y: this.props.card.y
    };

    this.startPoint = {
      x: e.evt.clientX,
      y: e.evt.clientY
    };

    this.refs.group.to({
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 0.2
    });    
  }

  handleDragstart = (e) => {
    // console.log(e);
  }

  handleDragmove = (e) => {
    this.props.onMove({
      x: this.startCoords.x + e.evt.clientX - this.startPoint.x,
      y: this.startCoords.y + e.evt.clientY - this.startPoint.y,
    });
  }

  handleDragend = (e) => {
    this.handleMouseup(e);
  }


  render() {
    return (
      <Group
        ref="group"
        key={this.props.card.id}
        x={this.props.card.x}
        y={this.props.card.y}
        width={this.props.card.w}
        height={this.props.card.h}
        draggable={true}
        onMousedown={this.handleMousedown}
        onMouseup={this.handleMouseup}
        onDragstart={this.handleDragstart}
        onDragmove={this.handleDragmove}
        onDragend={this.handleDragend}
      >
        <Rect
          x={0}
          y={0}
          width={this.props.card.w}
          height={this.props.card.h}
          fill={"rgba(255, 0, 0, 0.9)"}
          shadowBlur={5}
        />
        <Text
          x={0}
          y={25}
          width={this.props.card.w}
          text={this.props.card.id.toString()}
          fontSize='30'
          fontFamily='Calibri'
          fill='green'
          align='center'
        />
      </Group>
    );
  }
}