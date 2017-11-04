import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import deckService from '../decks/decks-service';
import CardsActionTypes from './CardsActionTypes';
import CardsDispatcher from './CardsDispatcher';


class CardsStore extends ReduceStore {
  constructor() {
    super(CardsDispatcher);
  }

  getInitialState() {
    return {
      decks: deckService.allDecks,
      selectedDeck: deckService.allDecks[0],
      isFaceDown: false,
      tableCards: [],
      isDecksVisible: true,
    };
  }

  reduce(state, action) {

    switch (action.type) {
      case CardsActionTypes.MOVE_CARD: {
        let tcard = action.tableCard;
        tcard.rect = {...tcard.rect, x: action.coords.x, y: action.coords.y};
        return state;
      }
      case CardsActionTypes.ADD_CARD: {
        let newState = { ...state };
        newState.tableCards.push(action.tableCard);
        return newState;
      }
      case CardsActionTypes.SHOW_DECKS_PANE: {
        let newState = { ...state };
        newState.isDecksVisible = action.show;
        return newState;
      }
      case CardsActionTypes.SELECT_DECK: {
        let newState = { ...state };
        newState.selectedDeck = action.deck;
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