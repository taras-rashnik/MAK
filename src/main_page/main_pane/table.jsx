import React, { Component } from "react";
import { Layer, Stage } from 'react-konva';
import CardComponent from './card_component';
import deckService from '../../decks/decks-service';
import './table.css';

export default class Table extends Component {

    constructor(props) {
        super(props);

        let deck = deckService.allDecks[0];
        let cards = deck.cards
            .slice(0, 3)
            .map((c, i) => {
                return {
                    card: c,
                    rect: { x: 100 + 200 * i, y: 100, width: 100, height: 150 }
                };
            });

        this.state = {
            cards,
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight,
        };

        this.handleShowDecks = this.handleShowDecks.bind(this);
    }

    handleCardMove(c, coords) {
        // console.log(coords);

        var stateCopy = Object.assign({}, this.state);
        stateCopy.cards = stateCopy.cards.slice();
        // stateCopy.cards[i] = Object.assign({}, stateCopy.cards[i]);
        c.rect = { ...c.rect, x: coords.x, y: coords.y };
        this.setState(stateCopy);
    }

    handleShowDecks() {
        this.props.onShowDecks(true);
    }

    render() {
        const cards = this.state.cards.map(c => {
            return (
                <CardComponent
                    key={c.card.id}
                    card={c.card}
                    rect={c.rect}
                    onMove={this.handleCardMove.bind(this, c)} />
            );
        });

        return (
            <div className="container">
                <div className="canvas">
                    <Stage 
                            width={this.state.canvasWidth}
                            height={this.state.canvasHeight}>
                        <Layer>
                            {cards}
                        </Layer>
                    </Stage>
                </div>
                <div className="controls">
                    <button onClick={this.handleShowDecks}>Show decks</button>
                </div>
            </div>
        );
    }
}