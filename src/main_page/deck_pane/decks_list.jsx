import React, { Component } from "react";
import deckService, { Deck, Card } from '../../decks/decks-service';


export default class DecksList extends Component {
    render() {
        let decks = deckService.allDecks.map(d => {

            return (
                <li key={d.id} alt={d.name}> 
                    <div style={d.deckCard.face.styles}>test</div>
                </li>
            );
        });

        return (
            <div>
                <h2>Decks List</h2>
                <ul>
                    {decks}
                </ul>
            </div>
        );
    }
}