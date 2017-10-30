import React, { Component } from 'react';

import SpriteCmp from './SpriteCmp';


export default class CardCmp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let side = this.props.side;

        return (
            <div style={{ width: 80, height: 120, padding: 0, margin: 0 }}>
                <SpriteCmp styles={side.styles} />
            </div>
        );
    }

}