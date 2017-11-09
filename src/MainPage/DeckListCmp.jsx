import React, { Component } from 'react';

import DeckCmp from './DeckCmp';
import deckService from '../decks/decks-service';


export default class DeckListCmp extends Component {

    componentDidMount(){
        this.props.onDeckSelected(deckService.allDecks[0]);
    }

    render() {
        let divStyles = {
            height: '100%',
            margin: 0, 
            padding: 0, 
        };

        let ulStyles = {
            margin: 0, 
            padding: 2, 
        };

        let liStyles = {
            margin: 2,
            padding: 2,
            listStyleType: 'none',
        };

        let decks = deckService.allDecks.map(d => {
            return (
                <li key={d.id} style={liStyles}>
                    <DeckCmp deck={d} onSelected={() => this.props.onDeckSelected(d)} />
                </li>
            );
        });

        return (
            <div style={divStyles}>
                <ul style={ulStyles}>
                    {decks}
                </ul>
            </div>
        );
    }

}