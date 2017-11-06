import React, { Component } from 'react';
import { Group, Rect, Circle } from 'react-konva';

import CardsActions from '../Flux/CardsActions';


export default class GripFrame extends Component {
  render() {
    if (this.props.isSelected) {
      let cm = this.props.cardMoniker;
      let rect = cm.rect;

      const gripWidth = 10;
      const gripHeight = 10;
      const gripFillColor = 'yellow';
      const gripStrokeColor = 'black';
      const gripStrokeWidth = 1;

      return (
        <Group>
          {this.props.children}

          <Rect name={'Delete button'}
            x={rect.width + 10} y={-30}
            width={20} height={20}
            fill={'red'} stroke={'black'} strokeWidth={4} 
            onClick={() => CardsActions.deleteCardFromTable(cm)}
            onTap={() => CardsActions.deleteCardFromTable(cm)}/>

          <Circle name={'Rotate button'}
            x={rect.width/2} y={-40}
            radius={10}
            fill={'green'} stroke={'black'} strokeWidth={2} />

          <Rect name={'top grip'}
            x={rect.width / 2 - gripWidth / 2} y={-gripHeight / 2}
            width={gripWidth} height={gripHeight}
            fill={gripFillColor} stroke={gripStrokeColor} strokeWidth={gripStrokeWidth} />

          <Rect name={'bottom grip'}
            x={rect.width / 2 - gripWidth / 2} y={rect.height - gripHeight / 2}
            width={gripWidth} height={gripHeight}
            fill={gripFillColor} stroke={gripStrokeColor} strokeWidth={gripStrokeWidth} />

          <Rect name={'left grip'}
            x={-gripWidth / 2} y={rect.height / 2 - gripHeight / 2}
            width={gripWidth} height={gripHeight}
            fill={gripFillColor} stroke={gripStrokeColor} strokeWidth={gripStrokeWidth} />

          <Rect name={'right grip'}
            x={rect.width - gripWidth / 2} y={rect.height / 2 - gripHeight / 2}
            width={gripWidth} height={gripHeight}
            fill={gripFillColor} stroke={gripStrokeColor} strokeWidth={gripStrokeWidth} />

          <Rect name={'leftTop grip'}
            x={rect.width - gripWidth / 2} y={-gripHeight / 2}
            width={gripWidth} height={gripHeight}
            fill={gripFillColor} stroke={gripStrokeColor} strokeWidth={gripStrokeWidth} />

          <Rect name={'rightTop grip'}
            x={-gripWidth / 2} y={-gripHeight / 2}
            width={gripWidth} height={gripHeight}
            fill={gripFillColor} stroke={gripStrokeColor} strokeWidth={gripStrokeWidth} />

          <Rect name={'leftBottom grip'}
            x={rect.width - gripWidth / 2} y={rect.height - gripHeight / 2}
            width={gripWidth} height={gripHeight}
            fill={gripFillColor} stroke={gripStrokeColor} strokeWidth={gripStrokeWidth} />

          <Rect name={'rightBottom grip'}
            x={-gripWidth / 2} y={rect.height - gripHeight / 2}
            width={gripWidth} height={gripHeight}
            fill={gripFillColor} stroke={gripStrokeColor} strokeWidth={gripStrokeWidth} />
        </Group>
      );
    } else {
      return this.props.children;
    }
  }
}