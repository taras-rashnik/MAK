import innerActiveCardsUrl from "./Inner_Active_Cards_1.jpg";
import tarotDeck01 from "./tarot_deck_01.png";
import tarotDeck02 from "./tarot_2.jpg";
import tarotDeck03 from "./tarot_3.png";
import tarotDeck04 from "./playing-cards.gif";

import Deck from './Deck';


class DeckService {

  get allDecks() {
    return this._decks;
  }

  constructor() {
    this._decks = [
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

