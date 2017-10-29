import React, { Component } from 'react';

import DeckCmp from './DeckCmp';

export default class DeckListCmp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let liStyles = {
            listStyleType: 'none',
            margin: '5px',
        };

        let decks = this.props.decks.map(d => {
            return (
                <li key={d.id} style={liStyles}>
                    <DeckCmp deck={d} onSelected={() => this.props.onDeckSelected(d)}/>
                </li>
            );
        });

        return (
            <ul>
                {decks}
            </ul>
        );
    }

}