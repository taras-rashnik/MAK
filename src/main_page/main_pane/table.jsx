import React, { Component } from "react";
import { Layer, Stage, Image } from 'react-konva';
import CardComponent from './card_component';
import deckService, { Deck, Card } from '../../decks/decks-service';

export default class Table extends Component {

    constructor(props) {
        super(props);

        let deck = deckService.allDecks[0];
        let cards = deck.cards
            .slice(0, 3)
            .map(c => {
                return {
                    card: c,
                    rect: { x: 100, y: 100, width: 150, height: 275 }
                };
            });

        this.state = { cards };
    }

    handleCardMove(card, coords) {
        // console.log(coords);

        var stateCopy = Object.assign({}, this.state);
        stateCopy.cards = stateCopy.cards.slice();
        // stateCopy.cards[i] = Object.assign({}, stateCopy.cards[i]);
        card.rect.x = coords.x;
        card.rect.y = coords.y;
        this.setState(stateCopy);
    }


    render() {
        const cards = this.state.cards.map(c => {
            return <CardComponent key={c.card.id} card={c.card} rect={c.rect} onMove={this.handleCardMove.bind(this, c)} />;
        });

        return (
            <Stage width={1200} height={800}>
                <Layer>
                    {cards}
                </Layer>
            </Stage>
        );
    }
}