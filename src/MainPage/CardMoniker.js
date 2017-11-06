var global_counter = 0;

export default class CardMoniker {
  constructor(id, rect) {
    this._id = id;
    this._rect = {...rect};
    this._isFaceDown = false;

    this._key = ++global_counter;
  }

  get id() {
    return this._id;
  }

  get key() {
    return this._key;
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