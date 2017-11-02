import React, { Component } from 'react';

import SpriteCmp from './SpriteCmp';


export default class CardCmp extends Component {

    constructor(props) {
        super(props);

        this.handleDragStart = this.handleDragStart.bind(this);
    }

    handleDragStart(event) {
        var data = {
            cardId: this.props.cardId,
            deckId: this.props.deckId,
            x: event.clientX,
            y: event.clientY,
        };

        event.dataTransfer.setData('text', JSON.stringify(data));
    }

    render() {
        let side = this.props.side;

        return (
            <div draggable="true" onDragStart={this.handleDragStart} style={{ width: 80, height: 120, padding: 0, margin: 0 }}>
                <SpriteCmp styles={side.styles} />
            </div>
        );
    }

}