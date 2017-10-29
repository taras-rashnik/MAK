import React, { Component } from 'react';

import SpriteCmp from './SpriteCmp';


export default class DeckCmp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let deck = this.props.deck;

        return (
            <div
                style={{ width: 100, height: 150, padding: 10, margin: 10 }}
                onClick={this.props.onSelected}
            >
                <SpriteCmp styles={deck.deckCard.face.styles} />
            </div>
        );
    }

}