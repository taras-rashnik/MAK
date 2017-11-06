
export default class DeckMoniker {
  constructor(deckId) {
    this._deckId = deckId;
  }

  get deckId() {
    return this._deckId;
  }
}