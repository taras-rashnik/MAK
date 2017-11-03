import Card, { CardSide } from './Card';


export default class Deck {

    constructor(settings) {
        this._id = settings.id;
        this._name = settings.name;
        this._image = new Image();
        this._image.src = settings.imageUrl;

        let sides = [];
        let rowsNumber = settings.cardsInColumn; // 14
        let columnsNumber = settings.cardsInRow; // 6

        for (let row = 0; row < rowsNumber; row++) {
            for (var col = 0; col < columnsNumber; col++) {

                let crop = {
                    x: col * (settings.cardsWidth + settings.horizontalGap),
                    y: row * (settings.cardsHeight + settings.verticalGap),
                    width: settings.cardsWidth,
                    height: settings.cardsHeight,
                };

                let horizontalPercentage = col * 100 / (columnsNumber - 1);
                let verticalPercentage = row * 100 / (rowsNumber - 1);
            
                let styles = {
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${settings.imageUrl})`,
                    backgroundPosition: `${horizontalPercentage}% ${verticalPercentage}%`,
                    backgroundSize: `${columnsNumber * 100}% ${rowsNumber * 100}%`,
                };

                sides.push(new CardSide(this._image, settings.imageUrl, crop, styles));
            }
        }

        this._deckCard = new Card(
            settings.deckPictureIndex,
            settings.id,
            sides[settings.deckPictureIndex],
            sides[settings.backSinedeIndex]
        );

        this._cards = sides
            .slice(0, settings.cardsNumber)
            .map((s, i) => new Card(
                i,
                settings.id,
                sides[i],
                sides[settings.backSideIndex]
            ));
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get cards() {
        return this._cards;
    }

    get deckCard() {
        return this._deckCard;
    }
}
