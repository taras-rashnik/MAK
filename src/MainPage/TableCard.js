import Card from '../decks/Card';


export default class TableCard {
  constructor(cardId, deckId, rect) {
    this._cardId = cardId;
    this._deckId = deckId;
    this._rect = {...rect};
  }

  get cardId() {
    return this._cardId;
  }

  get deckId() {
    return this._deckId;
  }

  get rect() {
    return this._rect;
  }
}