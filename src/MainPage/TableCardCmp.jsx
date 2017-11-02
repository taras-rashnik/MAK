import React, { Component } from 'react';
import {Group, Image, Text } from 'react-konva';

import deckService from '../decks/decks-service';


export default class TableCardCmp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let tc = this.props.tableCard;
        let card = deckService.findCard(tc.cardId, tc.deckId);

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
                <Text
                    x={0}
                    y={25}
                    width={tc.rect.width}
                    text={tc.cardId}
                    fontSize='30'
                    fontFamily='Calibri'
                    fill='green'
                    align='center'
                />
            </Group>

        );
    }

}