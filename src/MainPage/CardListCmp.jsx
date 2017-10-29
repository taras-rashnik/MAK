import React, { Component } from 'react';

import CardCmp from './CardCmp';


export default class CardListCmp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let ulStyles = {
            whiteSpace: 'nowrap',
            width: '100%',
            overflowX: 'auto',
        };

        let liStyles = {
            listStyleType: 'none',
            display: 'inline-block',
            margin: '5px',
        };

        let deck = this.props.deck;
        let cards = [];
        if (deck) {
            cards = deck.cards.map(c => {
                return (
                    <li key={c.id} style={liStyles}>
                        <CardCmp card={c} />
                    </li>
                );
            });
        }

        return (
            <ul style={ulStyles}>{cards}</ul>
        );
    }

}