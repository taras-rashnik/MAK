import React, { Component } from 'react';
import { Layer, Stage, Image, Rect } from 'react-konva';

export default class Test1 extends Component {
    render() {
        return (
            <Stage width={1920} height={1080}>
                <Layer>
                    <Rect
                        x={100} y={100}
                        width={150} height={150}
                        fill={'red'}
                        draggable={true}
                    />
                </Layer>
            </Stage>
        );
    }
}