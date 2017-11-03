import React, { Component } from 'react';
import { Container } from 'flux/utils';

import CardsStore from '../Flux/CardsStore';
import MainPageCmp from './MainPageCmp';


export default class MainContainer extends Component {
  static getStores() {
    return [CardsStore];
  }

  static calculateState(prevState) {
    return {
      mainState: CardsStore.getState(),
    };
  }

  static getState() {
    return {
      mainState: CardsStore.getState(),
    };
  }

  render() {
    return <MainPageCmp mainState={this.state.mainState} />;
  }
}

const container = Container.create(MainContainer);