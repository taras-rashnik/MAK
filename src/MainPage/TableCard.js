import Card from '../decks/Card';


export default class TableCard {
  constructor(cardId, rect) {
    this._cardId = cardId;
    this._rect = {...rect};
  }

  get cardId() {
    return this._cardId;
  }

  get rect() {
    return this._rect;
  }
}