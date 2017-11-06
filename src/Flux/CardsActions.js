import CardsActionTypes from './CardsActionTypes';
import CardsDispatcher from './CardsDispatcher';


let cardsActions = {
  
  addCardOnTable: function(cardMoniker){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.ADD_CARD,
      cardMoniker,
    });
  },
  
  deleteCardFromTable: function(cardMoniker){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.DELETE_CARD,
      cardMoniker,
    });
  },

  selectCard: function(cardMoniker){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.SELECT_CARD,
      cardMoniker,
    });
  },

  moveCard: function(cardMoniker, coords){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.MOVE_CARD,
      cardMoniker,
      coords,
    });
  },

  showDecksPane: function(show){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.SHOW_DECKS_PANE,
      show,
    });
  },

  selectDeck: function(deckMoniker){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.SELECT_DECK,
      deckMoniker,
    });
  },

  toggleFaceBackInPane: function(){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.TOGGLE_FACE_BACK_IN_PANE,
    });
  },

}

export default cardsActions;