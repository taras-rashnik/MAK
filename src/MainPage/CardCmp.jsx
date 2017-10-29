import React, { Component } from 'react';

import SpriteCmp from './SpriteCmp';


export default class CardCmp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let card = this.props.card;
        let styles = card.face.styles;

        return (
            <div
                style={{ width: 100, height: 150, padding: 10, margin: 10 }}
            >
                <SpriteCmp styles={styles} />
            </div>
        );
    }

}