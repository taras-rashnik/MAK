import React, { Component } from "react";
import { Rect, Group, Text, Image } from 'react-konva';

export default class CardComponent extends Component {

  constructor(props) {
    super(props);
  }

  handleMouseup = (e) => {
    this.refs.group.to({
      scaleX: 1,
      scaleY: 1,
      duration: 0.1
    });
  }

  handleMousedown = (e) => {
    // console.log(e);
    this.startCoords = {
      x: this.props.rect.x,
      y: this.props.rect.y
    };

    this.startPoint = {
      x: e.evt.clientX,
      y: e.evt.clientY
    };

    this.refs.group.to({
      scaleX: 0.9,
      scaleY: 0.9,
      duration: 0.1
    });
  }

  handleTouchstart = (e) => {
    this.refs.group.to({
      scaleX: 0.9,
      scaleY: 0.9,
      duration: 0.1
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
    // console.log(this.props.card);
    // console.log(this.props.rect);

    return (
      <Group
        ref="group"
        key={this.props.card.id}
        x={this.props.rect.x}
        y={this.props.rect.y}
        width={this.props.rect.width}
        height={this.props.rect.height}
        draggable={true}

        onMousedown={this.handleMousedown}
        onTouchstart={this.handleTouchstart}

        onMouseup={this.handleMouseup}
        onTouchend={this.handleMouseup}

        onDragstart={this.handleDragstart}
        onDragmove={this.handleDragmove}
        onDragend={this.handleDragend}
      >
        <Image
          x={0}
          y={0}
          width={this.props.rect.width}
          height={this.props.rect.height}
          image={this.props.card.face.image}
          crop={this.props.card.face.crop}
        />
        <Text
          x={0}
          y={25}
          width={this.props.rect.width}
          text={this.props.card.id}
          fontSize='30'
          fontFamily='Calibri'
          fill='green'
          align='center'
        />
      </Group>
    );
  }
}