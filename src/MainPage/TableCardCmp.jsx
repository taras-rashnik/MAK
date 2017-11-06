import React, { Component } from 'react';
import { Group, Image, Text } from 'react-konva';

import deckService from '../decks/decks-service';
import CardsActions from '../Flux/CardsActions';
import GripFrame from './GripFrame';


export default class TableCardCmp extends Component {

    constructor(props) {
        super(props);
    }

    handleMousedown = (e) => {
        this.startCoords = {
            x: this.props.cardMoniker.rect.x,
            y: this.props.cardMoniker.rect.y
        };

        let touchPos = this._group.getStage().getPointerPosition();
        this.startPoint = {
            // x: e.evt.clientX,
            // y: e.evt.clientY,
            x: touchPos.x,
            y: touchPos.y,
        };

        CardsActions.selectCard(this.props.cardMoniker);
    }

    handleTouchstart = (e) => {
        this.startCoords = {
            x: this.props.cardMoniker.rect.x,
            y: this.props.cardMoniker.rect.y
        };

        let touchPos = this._group.getStage().getPointerPosition();
        this.startPoint = {
            x: touchPos.x,
            y: touchPos.y,
        };

        CardsActions.selectCard(this.props.cardMoniker);
    }

    handleDragmove = (e) => {
        let touchPos = this._group.getStage().getPointerPosition();        
        let coords = {
            x: this.startCoords.x + touchPos.x - this.startPoint.x,
            y: this.startCoords.y + touchPos.y - this.startPoint.y,
        };

        CardsActions.moveCard(this.props.cardMoniker, coords);
        // this.props.onMove(coords);
    }

    render() {
        let cm = this.props.cardMoniker;
        let card = deckService.findCard(cm.id);

        return (
            <Group
                ref={g => this._group = g}
                key={cm.key}
                x={cm.rect.x}
                y={cm.rect.y}
                width={cm.rect.width}
                height={cm.rect.height}
                draggable={true}

                onMousedown={this.handleMousedown}
                onTouchstart={this.handleTouchstart}

                onDragmove={this.handleDragmove}

                onTap={() => CardsActions.selectCard(this.props.cardMoniker)}
            >
                <GripFrame isSelected={this.props.isSelected} cardMoniker={cm}>
                    <Image
                        x={0}
                        y={0}
                        width={cm.rect.width}
                        height={cm.rect.height}
                        image={card.face.image}
                        crop={card.face.crop}
                    />
                </GripFrame>
            </Group>

        );
    }

}