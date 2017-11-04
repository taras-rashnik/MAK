import React, { Component } from 'react';
import { Container } from 'flux/utils';

import CardsStore from './/CardsStore';
import MainPageCmp from '../MainPage/MainPageCmp';


class MainContainer extends Component {
  static getStores() {
    return [CardsStore];
  }

  static calculateState(prevState) {
    return {
      mainState: CardsStore.getState(),
    };
  }

  render() {
    return <MainPageCmp mainState={this.state.mainState} />;
  }
}

export default Container.create(MainContainer);