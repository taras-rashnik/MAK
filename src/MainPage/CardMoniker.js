import Card from '../decks/Card';


export default class CardMoniker {
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
  set rect(val) {
    this._rect = val;
  }

  get isFaceDown() {
    return this._isFaceDown;
  }
  set isFaceDown(val) {
    this._isFaceDown = val;
  }
}