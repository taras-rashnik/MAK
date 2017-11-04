import React, { Component } from 'react';

import deckService from '../decks/decks-service';
import LayoutCmp from './LayoutCmp';
import ControlsCmp from './ControlsCmp';
import TableCmp from './TableCmp';
import DeckListCmp from './DeckListCmp';
import CardListCmp from './CardListCmp';
import TableCard from './TableCard';
import CardsActions from '../Flux/CardsActions';


export default class MainPageCmp extends Component {

    constructor(props) {
        super(props);

        let selectedDeck = deckService.allDecks[0];

        let rect = { x: 0, y: 0, width: 100, height: 150 };
        let tableCards = [new TableCard('0-5', rect)];

        this.state = {
            decks: deckService.allDecks,
            selectedDeck: selectedDeck,
            isFaceDown: false,
        };

        this.handleShowDecks = this.handleShowDecks.bind(this);
        this.handleDeckSelected = this.handleDeckSelected.bind(this);
        this.handleToggleFaceBack = this.handleToggleFaceBack.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleShowDecks(show) {
        CardsActions.showDecksPane(show);
    }

    handleDeckSelected(selectedDeck) {
        this.setState({ selectedDeck: selectedDeck });
    }

    handleToggleFaceBack() {
        let isFaceDown = !this.state.isFaceDown;
        this.setState({ isFaceDown: isFaceDown });
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
        let newTableCard = new TableCard(data.cardId, rect);
        CardsActions.addCardOnTable(newTableCard);
    }

    render() {
        let tableCmp = (
            <div style={{ backgroundColor: 'lightblue', margin: 5, padding: 5 }}
                onDragOver={this.handleDragOver}
                onDrop={this.handleDrop}
            >
                <TableCmp tableCards={this.props.mainState.tableCards} />
            </div>
        );

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