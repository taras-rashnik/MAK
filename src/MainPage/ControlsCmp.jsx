import React, { Component } from 'react';

export default class ControlsCmp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="controls">
                <div>Controls</div>
                <button onClick={() => this.props.onShowDecks(true)}>Show decks</button>
            </div>
        );
    }

}