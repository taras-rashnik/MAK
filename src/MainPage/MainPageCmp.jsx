import React, { Component } from 'react';

import LayoutCmp from './LayoutCmp';
import ControlsCmp from './ControlsCmp';
import TableCmp from './TableCmp';
import DeckListCmp from './DeckListCmp';
import CardListCmp from './CardListCmp';
import CardMoniker from './CardMoniker';
import DeckMoniker from './DeckMoniker';
import CardsActions from '../Flux/CardsActions';


export default class MainPageCmp extends Component {

    constructor(props) {
        super(props);

        this.handleShowDecks = this.handleShowDecks.bind(this);
        this.handleDeckSelected = this.handleDeckSelected.bind(this);
        this.handleToggleFaceBack = this.handleToggleFaceBack.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleAddCard = this.handleAddCard.bind(this);
    }

    handleShowDecks(show) {
        CardsActions.showDecksPane(show);
    }

    handleDeckSelected(deck) {
        let deckMoniker = new DeckMoniker(deck.id, deck.name);
        CardsActions.selectDeck(deckMoniker);
    }

    handleToggleFaceBack() {
        CardsActions.toggleFaceBackInPane();
    }

    handleDragOver(event) {
        event.preventDefault();
    }

    handleDrop(event) {
        event.preventDefault();

        var dim = event.target.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;

        // console.log(`x: ${x}; y: ${y}`);

        var data;

        try {
            data = JSON.parse(event.dataTransfer.getData('text'));
        } catch (e) {
            // If the text data isn't parsable we'll just ignore it.
            return;
        }

        let rect = { x: x - data.x, y: y - data.y, width: 100, height: 150 };
        let newCardMoniker = new CardMoniker(data.cardId, rect);
        CardsActions.addCardOnTable(newCardMoniker);
    }

    handleAddCard(cardId) {
        let rect = { x: -1, y: -1, width: 100, height: 150 };
        let newCardMoniker = new CardMoniker(cardId, rect);
        CardsActions.addCardOnTable(newCardMoniker);
    }

    render() {
        let tableCmp = (
            <div style={{ backgroundColor: 'lightblue', margin: 5, padding: 5 }}
                onDragOver={this.handleDragOver}
                onDrop={this.handleDrop}
            >
                <TableCmp cardMonikers={this.props.mainState.cardMonikers}
                    selectedCard={this.props.mainState.selectedCard}
                />
            </div>
        );

        let controlsCmp = (
            <ControlsCmp onShowDecks={this.handleShowDecks} />
        );

        let deckListCmp = (
            <DeckListCmp onDeckSelected={this.handleDeckSelected} />
        );

        let cardListCmp = (
            <CardListCmp
                deckMoniker={this.props.mainState.selectedDeck}
                isFaceDown={this.props.mainState.isFaceDown}
                onToggleFaceBack={this.handleToggleFaceBack}
                onAddCard={this.handleAddCard} />
        );

        return (
            <LayoutCmp
                showDecks={this.props.mainState.isDecksVisible}
                onShowDecks={this.handleShowDecks}
                table={tableCmp}
                controls={controlsCmp}
                deckList={deckListCmp}
                cardList={cardListCmp}
            />
        );
    }
}