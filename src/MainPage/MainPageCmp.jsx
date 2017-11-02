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

        let rect = { x: 0, y: 0, width: 100, height: 150 };
        let tableCards = [new TableCard(0, 5, rect)];

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
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
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

    handleDragOver(event) {
        event.preventDefault();
    }

    handleDrop(event) {
        event.preventDefault();

        var data;

        try {
            data = JSON.parse(event.dataTransfer.getData('text'));
        } catch (e) {
            // If the text data isn't parsable we'll just ignore it.
            return;
        }

        // Do something with the data
        console.log(data);

        this.state.tableCards.push(new TableCard(data.cardId, data.deckId, { x: 100, y: 100, width: 100, height: 150 }));
        this.setState({tableCards: this.state.tableCards});
    }

    render() {
        let tableCmp = (
            <div    style={{ backgroundColor: 'lightblue', margin: 5, padding: 5 }}
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDrop}
            >
                <TableCmp tableCards={this.state.tableCards} />
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