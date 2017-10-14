import React, {Component} from "react";
import {Layer, Rect, Stage, Group} from 'react-konva';

export default class Table extends Component {
    render(){
        return (
            <Stage width={700} height={700}>
            <Layer>
            <Rect
        x={150}
        y={150}
        width={450}
        height={250}
        fill={"red"}
        shadowBlur={5}
        onClick={this.handleClick}
      />
            </Layer>
          </Stage>
        );
    }
}