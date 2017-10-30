import Card from '../decks/Card';


export default class TableCard {
  constructor(card, rect) {
    this._card = card;
    this._rect = {...rect};
  }

  get card() {
    return this._card;
  }

  get rect() {
    return this._rect;
  }
}