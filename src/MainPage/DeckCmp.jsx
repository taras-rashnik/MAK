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
                style={{ width: 80, height: 120, padding: 0, margin: 0 }}
                onClick={this.props.onSelected}
            >
                <SpriteCmp styles={deck.deckCard.face.styles} />
            </div>
        );
    }

}