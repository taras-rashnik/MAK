import React, { Component } from 'react';
import { Layer, Stage, Rect } from 'react-konva';

import TableCardCmp from './TableCardCmp';
import CardsActions from '../Flux/CardsActions';


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
        let cards = this.props.cardMonikers.map((cm, i) => {
            return (
                <TableCardCmp key={cm.key} cardMoniker={cm} isSelected={cm === this.props.selectedCard} />
            );
        });

        return (
            <Stage
                width={this.state.canvasWidth}
                height={this.state.canvasHeight}>
                <Layer>
                    <Rect name={'Fake transparent rect to get Table events'}
                        x={0} y={0}
                        width={this.state.canvasWidth} height={this.state.canvasHeight}
                        opacity={0}
                        onClick={CardsActions.unselectAllCards} />
                    {cards}
                </Layer>
            </Stage>
        );
    }

}