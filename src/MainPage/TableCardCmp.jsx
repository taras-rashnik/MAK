import React, { Component } from 'react';
import { Group, Image, Text } from 'react-konva';

import deckService from '../decks/decks-service';
import CardsActions from '../Flux/CardsActions';


export default class TableCardCmp extends Component {

    constructor(props) {
        super(props);
    }

    handleMousedown = (e) => {
        // console.log(e);
        this.startCoords = {
            x: this.props.tableCard.rect.x,
            y: this.props.tableCard.rect.y
        };

        this.startPoint = {
            x: e.evt.clientX,
            y: e.evt.clientY
        };

        // this.refs.group.to({
        //     scaleX: 0.9,
        //     scaleY: 0.9,
        //     duration: 0.1
        // });
    }

    handleTouchstart = (e) => {
        // this.refs.group.to({
        //     scaleX: 0.9,
        //     scaleY: 0.9,
        //     duration: 0.1
        // });
    }

    handleDragstart = (e) => {
        // console.log(e);
    }

    handleDragmove = (e) => {
        let coords = {
            x: this.startCoords.x + e.evt.clientX - this.startPoint.x,
            y: this.startCoords.y + e.evt.clientY - this.startPoint.y,
        };

        CardsActions.moveCard(this.props.tableCard, coords);
        // this.props.onMove(coords);
    }

    handleDragend = (e) => {
        this.handleMouseup(e);
    }

    handleMouseup = (e) => {
        // this.refs.group.to({
        //     scaleX: 1,
        //     scaleY: 1,
        //     duration: 0.1
        // });
    }

    render() {
        let tc = this.props.tableCard;
        let card = deckService.findCard(tc.cardId);

        return (
            <Group
                ref="group"
                key={tc.cardId}
                x={tc.rect.x}
                y={tc.rect.y}
                width={tc.rect.width}
                height={tc.rect.height}
                draggable={true}

                onMousedown={this.handleMousedown}
                onTouchstart={this.handleTouchstart}

                onMouseup={this.handleMouseup}
                onTouchend={this.handleMouseup}

                onDragstart={this.handleDragstart}
                onDragmove={this.handleDragmove}
                onDragend={this.handleDragend}
            >
                <Image
                    x={0}
                    y={0}
                    width={tc.rect.width}
                    height={tc.rect.height}
                    image={card.face.image}
                    crop={card.face.crop}
                />
            </Group>

        );
    }

}