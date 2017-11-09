import React, { Component } from 'react';
import { Group, Rect, Circle, Path } from 'react-konva';

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

          <Group name={'Delete button'}
            onClick={() => CardsActions.deleteCardFromTable(cm)}
            onTap={() => CardsActions.deleteCardFromTable(cm)}
            x={rect.width + 10} y={-30}
          >
            <Rect
              width={20} height={20}
              fill={'rgba(255,255,255,0.1)'} />
            <Path
              width={20} height={20}
              fill={'red'}
              data={'M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z'}
              scale={{ x: 0.6, y: 0.6 }}
            />
          </Group>

          <Group name={'Rotate button'} >
            <Circle
              x={rect.width / 2} y={-40}
              radius={10}
              fill={'rgba(255,255,255,0.1)'} />
            <Path
              x={rect.width / 2 - 12} y={-40 - 12}
              width={24} height={24}
              fill={'green'}
              data={'M24 4v7c0 0.547-0.453 1-1 1h-7c-0.406 0-0.766-0.25-0.922-0.625-0.156-0.359-0.078-0.797 0.219-1.078l2.156-2.156c-1.469-1.359-3.406-2.141-5.453-2.141-4.406 0-8 3.594-8 8s3.594 8 8 8c2.484 0 4.781-1.125 6.312-3.109 0.078-0.109 0.219-0.172 0.359-0.187 0.141 0 0.281 0.047 0.391 0.141l2.141 2.156c0.187 0.172 0.187 0.469 0.031 0.672-2.281 2.75-5.656 4.328-9.234 4.328-6.609 0-12-5.391-12-12s5.391-12 12-12c3.078 0 6.062 1.234 8.266 3.313l2.031-2.016c0.281-0.297 0.719-0.375 1.094-0.219 0.359 0.156 0.609 0.516 0.609 0.922z'}
              scale={{ x: 0.8, y: 0.8 }}
            />
          </Group>

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