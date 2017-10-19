import innerActiveCardsUrl from "./Inner_Active_Cards_1.jpg";
import tarotDeck01 from "./tarot_deck_01.png";

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

  get image() {
    return this._image;
  }

  get cards() {
    return this._cards;
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
    ];
  }
}

var deckService = new DeckService();
export default deckService;

