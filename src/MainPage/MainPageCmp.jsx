import React, { Component } from 'react';

import deckService from '../decks/decks-service';
import LayoutCmp from './LayoutCmp';
import ControlsCmp from './ControlsCmp';
import TableCmp from './TableCmp';
import DeckListCmp from './DeckListCmp';
import CardListCmp from './CardListCmp';


export default class MainPageCmp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            decks: deckService.allDecks,
            selectedDeck: null,
            isFaceDown: false,
            tableCards: [],
            isDecksVisible: true,
        };

        this.handleShowDecks = this.handleShowDecks.bind(this);
        this.handleDeckSelected = this.handleDeckSelected.bind(this);
    }

    handleShowDecks(show) {
        this.setState({ isDecksVisible: show });
    }

    handleDeckSelected(selectedDeck) {
        this.setState({ selectedDeck: selectedDeck });
    }

    render() {
        let tableCmp = (<TableCmp />);

        let controlsCmp = (
            <ControlsCmp onShowDecks={this.handleShowDecks} />
        );

        let deckListCmp = (
            <DeckListCmp decks={this.state.decks} onDeckSelected={this.handleDeckSelected} />
        );

        let cardListCmp = (
            <CardListCmp deck={this.state.selectedDeck} />
        );

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