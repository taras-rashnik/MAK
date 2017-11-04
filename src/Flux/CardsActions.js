import CardsActionTypes from './CardsActionTypes';
import CardsDispatcher from './CardsDispatcher';


let cardsActions = {

  moveCard: function(tableCard, coords){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.MOVE_CARD,
      tableCard,
      coords,
    });
  },
  
  addCardOnTable: function(tableCard){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.ADD_CARD,
      tableCard,
    });
  },
  
  deleteCardFromTable: function(tableCard){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.DELETE_CARD,
      tableCard,
    });
  },

  showDecksPane: function(show){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.SHOW_DECKS_PANE,
      show,
    });
  },

  selectDeck: function(deck){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.SELECT_DECK,
      deck,
    });
  },

  toggleFaceBackInPane: function(){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.TOGGLE_FACE_BACK_IN_PANE,
    });
  },

}

export default cardsActions;