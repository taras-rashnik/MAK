import React, { Component } from 'react';

import deckService from '../decks/decks-service';
import LayoutCmp from './LayoutCmp';
import ControlsCmp from './ControlsCmp';
import TableCmp from './TableCmp';
import DeckListCmp from './DeckListCmp';
import CardListCmp from './CardListCmp';
import TableCard from './TableCard';


export default class MainPageCmp extends Component {

    constructor(props) {
        super(props);

        let selectedDeck = deckService.allDecks[0];

        let rect = {x: 0, y: 0, width: 100, height: 150};
        let tableCards = [new TableCard(selectedDeck.cards[0], rect)];

        this.state = {
            decks: deckService.allDecks,
            selectedDeck: selectedDeck,
            isFaceDown: false,
            tableCards: tableCards,
            isDecksVisible: true,
        };

        this.handleShowDecks = this.handleShowDecks.bind(this);
        this.handleDeckSelected = this.handleDeckSelected.bind(this);
        this.handleToggleFaceBack = this.handleToggleFaceBack.bind(this);
    }

    handleShowDecks(show) {
        this.setState({ isDecksVisible: show });
    }

    handleDeckSelected(selectedDeck) {
        this.setState({ selectedDeck: selectedDeck });
    }

    handleToggleFaceBack() {
        let isFaceDown = !this.state.isFaceDown;
        this.setState({ isFaceDown: isFaceDown });
    }

    render() {
        let tableCmp = (<TableCmp tableCards={this.state.tableCards} />);

        let controlsCmp = (
            <ControlsCmp onShowDecks={this.handleShowDecks} />
        );

        let deckListCmp = (
            <DeckListCmp decks={this.state.decks} onDeckSelected={this.handleDeckSelected} />
        );

        let cardListCmp = (
            <CardListCmp
                deck={this.state.selectedDeck}
                isFaceDown={this.state.isFaceDown}
                onToggleFaceBack={this.handleToggleFaceBack} />
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