import React, { Component } from "react";
import { Layer, Rect, Stage, Group } from 'react-konva';
import Card from './card';

export default class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [
                { id: 0, x: 100, y: 100, w: 50, h: 75 },
                { id: 1, x: 200, y: 100, w: 50, h: 75 },
                { id: 2, x: 300, y: 100, w: 50, h: 75 },
            ]
        };
    }

    handleCardMove(card, coords) {
        // console.log(coords);

        var stateCopy = Object.assign({}, this.state);
        stateCopy.cards = stateCopy.cards.slice();
        stateCopy.cards.forEach((_, i) => {
            stateCopy.cards[i] = Object.assign({}, stateCopy.cards[i]);
            stateCopy.cards[i].x = coords.x + stateCopy.cards[i].id * 150;
            stateCopy.cards[i].y = coords.y;
        });
        this.setState(stateCopy);
    }


    render() {
        const cards = this.state.cards.map(p => {
            return <Card key={p.id} card={p} onMove={this.handleCardMove.bind(this, p)} />;
        });

        return (
            <Stage width={800} height={600}>
                <Layer>
                    {cards}
                </Layer>
            </Stage>
        );
    }
}