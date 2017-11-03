import innerActiveCardsUrl from "./Inner_Active_Cards_1.jpg";
import tarotDeck01 from "./tarot_deck_01.png";
import tarotDeck02 from "./tarot_2.jpg";
import tarotDeck03 from "./tarot_3.png";
import tarotDeck04 from "./playing-cards.gif";

import tarotDeck06 from "./grid_4_3x12_5_InnerActive.jpg";
import tarotDeck07 from "./Raider_Wait.jpg";
import tarotDeck08 from "./grid_6_2x8_6_morena_stories.jpg";
import tarotDeck09 from "./grid_6_2x8_6_morena_steps.jpg";
import tarotDeck10 from "./grid_6_2x8_6_resilio_stories.jpg";
import tarotDeck11 from "./grid_6_1x8_5_oh_stories.jpg";

import Deck from './Deck';


class DeckService {

  get allDecks() {
    return this._decks;
  }

  findDeck(deckId){
    return this._decks.find(d => d.id === deckId);
  }

  findCard(cardId, deckId){
    let deck = this.findDeck(deckId);
    return deck.cards.find(c => c.id === cardId);
  }

  constructor() {
    this._decks = [
      new Deck({
        "id": 6,
        "name": "grid_4_3x12_5_InnerActive",
        "imageUrl": tarotDeck06,
        "cardsWidth": 189,
        "cardsHeight": 336,
        "horizontalGap": 22,
        "verticalGap": 22,
        "cardsInRow": 8,
        "cardsInColumn": 9,
        "cardsNumber": 70,
        "backSideIndex": 71,
        "deckPictureIndex": 69
      }),
      new Deck({
        "id": 7,
        "name": "Raider_Wait",
        "imageUrl": tarotDeck07,
        "cardsWidth": 84,
        "cardsHeight": 153,
        "horizontalGap": 0,
        "verticalGap": 3,
        "cardsInRow": 14,
        "cardsInColumn": 6,
        "cardsNumber": 84,
        "backSideIndex": 0,
        "deckPictureIndex": 0
      }),
      new Deck({
        "id": 8,
        "name": "grid_6_2x8_6_morena_stories",
        "imageUrl": tarotDeck08,
        "cardsWidth": 176,
        "cardsHeight": 244,
        "horizontalGap": 0,
        "verticalGap": 0,
        "cardsInRow": 10,
        "cardsInColumn": 8,
        "cardsNumber": 76,
        "backSideIndex": 79,
        "deckPictureIndex": 69
      }),
      new Deck({
        "id": 9,
        "name": "grid_6_2x8_6_morena_steps",
        "imageUrl": tarotDeck09,
        "cardsWidth": 176,
        "cardsHeight": 244,
        "horizontalGap": 0,
        "verticalGap": 0,
        "cardsInRow": 5,
        "cardsInColumn": 5,
        "cardsNumber": 22,
        "backSideIndex": 24,
        "deckPictureIndex": 0
      }),
      new Deck({
        "id": 10,
        "name": "grid_6_2x8_6_resilio_stories",
        "imageUrl": tarotDeck10,
        "cardsWidth": 176,
        "cardsHeight": 244,
        "horizontalGap": 0,
        "verticalGap": 0,
        "cardsInRow": 10,
        "cardsInColumn": 10,
        "cardsNumber": 99,
        "backSideIndex": 99,
        "deckPictureIndex": 98
      }),
      new Deck({
        "id": 11,
        "name": "grid_6_1x8_5_oh_stories",
        "imageUrl": tarotDeck11,
        "cardsWidth": 173,
        "cardsHeight": 241,
        "horizontalGap": 0,
        "verticalGap": 0,
        "cardsInRow": 10,
        "cardsInColumn": 9,
        "cardsNumber": 88,
        "backSideIndex": 89,
        "deckPictureIndex": 87
      }),
      new Deck({
        "id": 5,
        "name": "Inner Active Cards",
        "imageUrl": innerActiveCardsUrl,
        "cardsWidth": 234,
        "cardsHeight": 415,
        "horizontalGap": 10,
        "verticalGap": 10,
        "cardsInRow": 14,
        "cardsInColumn": 6,
        "cardsNumber": 70,
        "backSideIndex": 71,
        "deckPictureIndex": 69
      }),
      new Deck({
        "id": 1,
        "name": "the first deck",
        "imageUrl": tarotDeck01,
        "cardsWidth": 83,
        "cardsHeight": 141,
        "horizontalGap": 7.5,
        "verticalGap": 6,
        "cardsInRow": 11,
        "cardsInColumn": 5,
        "cardsNumber": 55,
        "backSideIndex": 54,
        "deckPictureIndex": 54
      }),
      new Deck({
        "id": 2,
        "name": "the second deck",
        "imageUrl": tarotDeck02,
        "cardsWidth": 78,
        "cardsHeight": 127,
        "horizontalGap": 1,
        "verticalGap": 1,
        "cardsInRow": 13,
        "cardsInColumn": 6,
        "cardsNumber": 78,
        "backSideIndex": 31,
        "deckPictureIndex": 30
      }),
      new Deck({
        "id": 3,
        "name": "the third deck",
        "imageUrl": tarotDeck03,
        "cardsWidth": 160,
        "cardsHeight": 258,
        "horizontalGap": 1,
        "verticalGap": 1,
        "cardsInRow": 10,
        "cardsInColumn": 7,
        "cardsNumber": 70,
        "backSideIndex": 68,
        "deckPictureIndex": 34
      }),
      new Deck({
        "id": 4,
        "name": "the forth deck",
        "imageUrl": tarotDeck04,
        "cardsWidth": 81,
        "cardsHeight": 117,
        "horizontalGap": 0,
        "verticalGap": 0,
        "cardsInRow": 13,
        "cardsInColumn": 5,
        "cardsNumber": 52,
        "backSideIndex": 52,
        "deckPictureIndex": 54
      }),
    ];
  }
}

var deckService = new DeckService();
export default deckService;

