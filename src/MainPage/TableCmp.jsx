import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';

import TableCardCmp from './TableCardCmp';


export default class TableCmp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight,
        };

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener("orientationchange", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener("orientationchange", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight,
        });
    }

    render() {
        let cards = this.props.tableCards.map((tc, i) => {
            return (
                <TableCardCmp key={i} tableCard={tc} />
            );
        });

        return (
            <Stage
                width={this.state.canvasWidth}
                height={this.state.canvasHeight}>
                <Layer>
                    {cards}
                </Layer>
            </Stage>
        );
    }

}