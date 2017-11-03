import Card from '../decks/Card';


export default class TableCard {
  constructor(cardId, rect) {
    this._cardId = cardId;
    this._rect = {...rect};
    this._isFaceDown = false;
  }

  get cardId() {
    return this._cardId;
  }

  get rect() {
    return this._rect;
  }

  get isFaceDown() {
    return this._isFaceDown;
  }
  set isFaceDown(val) {
    this._isFaceDown = val;
  }
}