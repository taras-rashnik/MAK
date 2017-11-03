import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

import CardsActionTypes from './CardsActionTypes';
import CardsDispatcher from './CardsDispatcher';


class CardsStore extends ReduceStore {
  constructor() {
    super(CardsDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {

    switch (action.type) {
      case CardsActionTypes.MOVE_CARD:
        // Do nothing for now, we will add logic here soon!
        return state;

      default:
        return state;
    }
  }
}

export default new CardsStore();