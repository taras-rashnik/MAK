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
            .map((c, i) => {
                return {
                    card: c,
                    rect: { x: 100+200*i, y: 100, width: 100, height: 150 }
                };
            });

        this.state = { cards };
    }

    handleCardMove(c, coords) {
        // console.log(coords);

        var stateCopy = Object.assign({}, this.state);
        stateCopy.cards = stateCopy.cards.slice();
        // stateCopy.cards[i] = Object.assign({}, stateCopy.cards[i]);
        c.rect = { ...c.rect, x: coords.x, y: coords.y };
        this.setState(stateCopy);
    }


    render() {
        const cards = this.state.cards.map(c => {
            return <CardComponent key={c.card.id} card={c.card} rect={c.rect} onMove={this.handleCardMove.bind(this, c)} />;
        });

        return (
            <Stage width={960} height={540}>
                <Layer>
                    {cards}
                </Layer>
            </Stage>
        );
    }
}