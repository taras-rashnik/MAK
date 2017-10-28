import innerActiveCardsUrl from "./Inner_Active_Cards_1.jpg";
import tarotDeck01 from "./tarot_deck_01.png";
import tarotDeck02 from "./tarot_2.jpg";
import tarotDeck03 from "./tarot_3.png";
import tarotDeck04 from "./playing-cards.gif";

export class Card {

  constructor(id, deck, crop) {
    this._id = id;
    this._deck = deck;
    this._crop = crop;
  }

  get id() {
    return this._id;
  }

  get crop() {
    return this._crop;
  }

  get image() {
    return this._deck.image;
  }
}

export class Deck {
  constructor(settings) {
    this._settings = settings;
    this._image = new Image();
    this._image.src = this._settings.imageUrl;

    let deltaX = settings.horizontalGap;
    let deltaY = settings.verticalGap;

    this._cards = [
      new Card(1, this, { x: 15, y: 15, width: 234, height: 425 }),
      new Card(2, this, { x: 234+2*deltaX, y: 425+2*deltaY, width: 234, height: 425 }),
      new Card(3, this, { x: 2*234+3*deltaX, y: 2*425+3*deltaY, width: 234, height: 425 }),
    ];
  }

  get id() {
    return this._settings._id;
  }

  get name() {
    return this._settings.name;
  }

  get image() {
    return this._image;
  }

  get imageUrl() {
    return this._settings.imageUrl;
  }

  get cards() {
    return this._cards;
  }

  get cardsInRow() {
    return this._settings.cardsInRow;
  }

  get cardsInColumn() {
    return this._settings.cardsInColumn;
  }
}

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
        "cardsNumber": 56,
        "backSideIndex": 57,
        "deckPictureIndex": 58
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

