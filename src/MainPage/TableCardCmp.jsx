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
        
        let clipX = 0;
        let clipY = 0;
        let left = cm.rect.x;
        let top = cm.rect.y;
        let width = cm.rect.width;
        let height = cm.rect.height;
        const cornerRadius = 10;

        let card = deckService.findCard(cm.id);
        let side = cm.isFaceDown ? card.back : card.face;

        return (
            <Group
                ref={g => this._group = g}
                key={cm.key}
                x={left}
                y={top}
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
                        ctx.moveTo(clipX + cornerRadius, clipY)
                        ctx.lineTo(clipX + width - cornerRadius, clipY)
                        ctx.quadraticCurveTo(clipX + width, clipY, clipX + width, clipY + cornerRadius)
                        ctx.lineTo(clipX + width, clipY + height - cornerRadius)
                        ctx.quadraticCurveTo(clipX + width, clipY + height, clipX + width - cornerRadius, clipY + height)
                        ctx.lineTo(clipX + cornerRadius, clipY + height)
                        ctx.quadraticCurveTo(clipX, clipY + height, clipX, clipY + height - cornerRadius)
                        ctx.lineTo(clipX, clipY + cornerRadius)
                        ctx.quadraticCurveTo(clipX, clipY, clipX + cornerRadius, clipY)
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