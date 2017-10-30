import React, { Component } from 'react';

import CardCmp from './CardCmp';


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
            <div style={divStyles}>
                <ul style={ulStyles}>{cards}</ul>
            </div>
        );
    }

}