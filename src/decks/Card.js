
export default class Card {

    constructor(id, deckId, face, back) {
        this._id = id;
        this._deckId = deckId;
        this._face = face;
        this._back = back;
    }

    get id() {
        return this._id;
    }

    get deckId() {
        return this._deckId;
    }

    get face(){
        return this._face;
    }

    get back(){
        return this._back;
    }
}

export class CardSide{

    constructor(image, imageUrl, crop, styles){
        this._image = image;
        this._imageUrl = imageUrl;
        this._crop = crop;
        this._styles = styles;
    }

    get image() {
        return this._image;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    get crop() {
        return this._crop;
    }

    get styles() {
        return this._styles;
    }
}
