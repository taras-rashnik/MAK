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
            <div style={{ width: 80, height: 120, padding: 0, margin: 0 }}>
                <SpriteCmp styles={styles} />
            </div>
        );
    }

}