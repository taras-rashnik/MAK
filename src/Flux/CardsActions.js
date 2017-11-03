import CardsActionTypes from './CardsActionTypes';
import CardsDispatcher from './CardsDispatcher';


let cardsActions = {
  moveCard: function(coords){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.MOVE_CARD,
      data: coords,
    });
  },
  
  deleteCard: function(cardId){
    CardsDispatcher.dispatch({
      type: CardsActionTypes.DELETE_CARD,
      data: cardId,
    });
  },

}

export default cardsActions;