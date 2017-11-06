import React, { Component } from 'react';

import SpriteCmp from './SpriteCmp';


export default class CardCmp extends Component {

    constructor(props) {
        super(props);

        this.handleDragStart = this.handleDragStart.bind(this);
    }

    handleDragStart(event) {
        var dim = event.target.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;

        // console.log(`x: ${x}; y: ${y}`);

        var data = {
            cardId: this.props.cardId,
            x: x,
            y: y,
        };

        event.dataTransfer.setData('text', JSON.stringify(data));
    }

    render() {
        let side = this.props.side;

        return (
            <div    draggable="true" 
                    onDragStart={this.handleDragStart} 
                    onDoubleClick={() => this.props.onAddCard(this.props.cardId)}
                    style={{ width: 80, height: 120, padding: 0, margin: 0 }}>
                <SpriteCmp styles={side.styles} />
            </div>
        );
    }

}