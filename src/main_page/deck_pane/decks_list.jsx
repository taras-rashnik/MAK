import React, { Component } from "react";
import deckService, { Deck, Card } from '../../decks/decks-service';


export default class DecksList extends Component {
    render() {
        let decks = deckService.allDecks.map(d => {
            let styles = {
                backgroundRepeat: 'no-repeat',
                'width': '100px',
                'height': '150px',
                backgroundImage: `url(${d.imageUrl})`,
                'backgroundPosition': `${0}% ${0}%`,
                'backgroundSize': `${d.cardsInRow * 100}% ${d.cardsInColumn * 100}%`,
            };

            return (
                <li key2={d.id} alt={d.name}> 
                    <div style={styles}>test</div>
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