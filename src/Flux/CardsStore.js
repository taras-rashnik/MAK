import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import CardsActionTypes from './CardsActionTypes';
import CardsDispatcher from './CardsDispatcher';


class CardsStore extends ReduceStore {
  constructor() {
    super(CardsDispatcher);
  }

  getInitialState() {
    return {
      selectedDeck: null,
      selectedCard: null,
      isFaceDown: false,
      cardMonikers: [],
      isDecksVisible: true,
    };
  }

  _placeNewCard(newCardMoniker, cardMonikers) {
    const shift = 20;
    let rect = newCardMoniker.rect;
    if (rect.x === -1 && rect.y === -1) {
      for (var i = 1; i <= 15; i++) {
        rect.x = i * shift;
        rect.y = i * shift;

        let isPlaceOcupied = false;
        for (var j = 0; j < cardMonikers.length; j++) {
          var card = cardMonikers[j];
          if (rect.x === card.rect.x && rect.y === card.rect.y) {
            isPlaceOcupied = true;
            break;
          }
        }

        if (!isPlaceOcupied) {
          break;
        }
      }
    }
  }

  reduce(state, action) {

    switch (action.type) {
      case CardsActionTypes.ADD_CARD: {
        let newState = { ...state };
        this._placeNewCard(action.cardMoniker, newState.cardMonikers);
        newState.cardMonikers.push(action.cardMoniker);
        return newState;
      }
      case CardsActionTypes.DELETE_CARD: {
        let newState = { ...state };
        newState.cardMonikers = newState.cardMonikers.filter(cm => cm !== action.cardMoniker);
        return newState;
      }
      case CardsActionTypes.SELECT_CARD: {
        if (state.selectedCard !== action.cardMoniker) {
          let newState = { ...state };
          newState.selectedCard = action.cardMoniker;

          // move selected card to the end (top z-buffer)
          newState.cardMonikers = newState.cardMonikers.filter(cm => cm !== action.cardMoniker);
          newState.cardMonikers.push(action.cardMoniker);

          return newState;
        } else {
          return state;
        }
      }
      case CardsActionTypes.FLIP_CARD: {
        let newState = { ...state };
        action.cardMoniker.isFaceDown = !action.cardMoniker.isFaceDown;
        return newState;
      }
      case CardsActionTypes.UNSELECT_ALL_CARD: {
        if (state.selectedCard) {
          let newState = { ...state };
          newState.selectedCard = null;
          return newState;
        } else {
          return state;
        }
      }
      case CardsActionTypes.MOVE_CARD: {
        let cm = action.cardMoniker;
        cm.rect = { ...cm.rect, x: action.coords.x, y: action.coords.y };
        return state;
      }
      case CardsActionTypes.SHOW_DECKS_PANE: {
        let newState = { ...state };
        newState.isDecksVisible = action.show;
        return newState;
      }
      case CardsActionTypes.SELECT_DECK: {
        let newState = { ...state };
        newState.selectedDeck = action.deckMoniker;
        return newState;
      }
      case CardsActionTypes.TOGGLE_FACE_BACK_IN_PANE: {
        let newState = { ...state };
        newState.isFaceDown = !newState.isFaceDown;
        return newState;
      }
      default:
        return state;
    }
  }
}

export default new CardsStore();