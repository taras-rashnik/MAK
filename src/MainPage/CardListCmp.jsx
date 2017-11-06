import React, { Component } from 'react';

import CardCmp from './CardCmp';
import deckService from '../decks/decks-service';


export default class CardListCmp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let divStyles = {
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            backgroundColor: 'lightgrey',
            overflowX: 'hidden',
            overflowY: 'hidden'
        };

        let ulStyles = {
            width: '100%',
            margin: 0,
            padding: 2,
            whiteSpace: 'nowrap',
            overflowX: 'auto',
            overflowY: 'hidden',
            backgroundColor: 'lightgrey'
        };

        let liStyles = {
            margin: 2,
            padding: 2,
            listStyleType: 'none',
            display: 'inline-block',
        };

        let cards = [];
        let deckMoniker = this.props.deckMoniker;

        if (deckMoniker) {
            let deck = deckService.findDeck(deckMoniker.id);
            cards = deck.cards.map(c => {
                let side = this.props.isFaceDown ? c.back : c.face;

                return (
                    <li key={c.id} style={liStyles} >
                        <CardCmp side={side} cardId={c.id} onAddCard={this.props.onAddCard}/>
                    </li>
                );
            });
        }

        return (
            <div style={divStyles} >
                <ul style={ulStyles}>{cards}</ul>
            </div>
        );
    }

}