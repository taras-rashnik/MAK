import React, { Component } from 'react';

import LayoutCmp from './LayoutCmp';
import ControlsCmp from './ControlsCmp';
import TableCmp from './TableCmp';
import DeckListCmp from './DeckListCmp';
import CardListCmp from './CardListCmp';


export default class MainPageCmp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            decks: [],
            selectedDeck: null,
            isFaceDown: false,
            tableCards: [],
            isDecksVisible: true,
        };

        this.handleShowDecks = this.handleShowDecks.bind(this);
    }

    handleShowDecks(show) {
        this.setState({ isDecksVisible: show });
    }

    render() {
        let tableCmp = (<TableCmp />);

        let controlsCmp = (
            <ControlsCmp onShowDecks={this.handleShowDecks}/>
        );

        let deckListCmp = (<DeckListCmp />);

        let cardListCmp = (<CardListCmp />);

        return (
            <LayoutCmp
                showDecks={this.state.isDecksVisible}
                onShowDecks={this.handleShowDecks}
                table={tableCmp}
                controls={controlsCmp}
                deckList={deckListCmp}
                cardList={cardListCmp}
            />
        );
    }

}