import React, { Component } from 'react';

import SpriteCmp from './SpriteCmp';
import CardsActions from '../Flux/CardsActions';


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

        let style = { 
            width: 80, 
            height: 120, 
            padding: 0, 
            margin: 0,
            transition: 'all .2s ease-in-out',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'rgba(0,0,0,0)'
        };

        if(this.props.selected){
            style.transform = 'scale(1.2)';
            style.borderColor = 'blue';
        }

        return (
            <div    draggable="true" 
                    onDragStart={this.handleDragStart} 
                    onDoubleClick={() => this.props.onAddCard(this.props.cardId)}
                    onClick={() => CardsActions.selectCardInDeck(this.props.cardId)}
                    onTap={() => CardsActions.selectCardInDeck(this.props.cardId)}
                    style={style}>
                <SpriteCmp styles={side.styles} />
            </div>
        );
    }

}