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
        
        let x = 0;
        let y = 0;
        let width = cm.rect.width;
        let height = cm.rect.height;
        const cornerRadius = 10;

        let card = deckService.findCard(cm.id);
        let side = cm.isFaceDown ? card.back : card.face;

        return (
            <Group
                ref={g => this._group = g}
                key={cm.key}
                x={x}
                y={y}
                width={width}
                height={height}


                draggable={true}

                onMousedown={this.handleMousedown}
                onTouchstart={this.handleTouchstart}

                onDragmove={this.handleDragmove}

                onTap={() => CardsActions.selectCard(this.props.cardMoniker)}
                onDblClick={() => CardsActions.flipCard(this.props.cardMoniker)}
                onDblTap={() => CardsActions.flipCard(this.props.cardMoniker)}
            >
                <GripFrame isSelected={this.props.isSelected} cardMoniker={cm}>
                    <Group clipFunc={ctx => {
                        ctx.beginPath()
                        ctx.moveTo(x + cornerRadius, y)
                        ctx.lineTo(x + width - cornerRadius, y)
                        ctx.quadraticCurveTo(x + width, y, x + width, y + cornerRadius)
                        ctx.lineTo(x + width, y + height - cornerRadius)
                        ctx.quadraticCurveTo(x + width, y + height, x + width - cornerRadius, y + height)
                        ctx.lineTo(x + cornerRadius, y + height)
                        ctx.quadraticCurveTo(x, y + height, x, y + height - cornerRadius)
                        ctx.lineTo(x, y + cornerRadius)
                        ctx.quadraticCurveTo(x, y, x + cornerRadius, y)
                        ctx.closePath()
                    }}>
                        <Image
                            x={0}
                            y={0}
                            width={width}
                            height={height}
                            image={side.image}
                            crop={side.crop}
                        />
                    </Group>
                </GripFrame>
            </Group>

        );
    }

}