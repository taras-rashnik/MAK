import Card, { CardSide } from './Card';


export default class Deck {

    constructor(settings) {
        this._settings = settings;
        this._image = new Image();
        this._image.src = this._settings.imageUrl;

        let sides = [];
        for (let row = 0; row < this._settings.cardsInRow; row++) {
            for (var col = 0; col < this._settings.cardsInColumn; col++) {

                let crop = {
                    x: col * (this._settings.cardsWidth + this._settings.horizontalGap),
                    y: row * (this._settings.cardsHeight + this._settings.verticalGap),
                    width: this._settings.cardsWidth,
                    height: this._settings.cardsHeight
                };

                let styles = {
                    backgroundRepeat: 'no-repeat',
                    width: '100px',
                    height: '150px',
                    backgroundImage: `url(${this._settings.imageUrl})`,
                    backgroundPosition: `${0}% ${0}%`,
                    backgroundSize: `${this._settings.cardsInRow * 100}% ${this._settings.cardsInColumn * 100}%`,
                };

                sides.push(new CardSide(this._image, this._settings.imageUrl, crop, styles));
            }
        }

        this._deckCard = new Card(
            `${this._settings.id}-${this._settings.deckPictureIndex}`,
            sides[this._settings.deckPictureIndex],
            sides[this._settings.backSideIndex]
        );

        this._cards = sides
            .slice(0, this._settings.cardsNumber)
            .map((s, i) => new Card(
                `${this._settings.id}-${i}`,
                sides[i],
                sides[this._settings.backSideIndex]
            ));
    }

    get id() {
        return this._settings.id;
    }

    get name() {
        return this._settings.name;
    }

    get cards() {
        return this._cards;
    }

    get deckCard() {
        return this._deckCard;
    }
}
