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

  flipCard: function(cardMoniker){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.FLIP_CARD,
      cardMoniker,
    });
  },

  unselectAllCards: function(){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.UNSELECT_ALL_CARD
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

  selectCardInDeck: function(cardId){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.SELECT_CARD_IN_DECK,
      cardId,
    });
  },

  toggleFaceBackInPane: function(){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.TOGGLE_FACE_BACK_IN_PANE,
    });
  },

}

export default cardsActions;