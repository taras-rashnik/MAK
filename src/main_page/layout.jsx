import React, { Component } from "react";
import SplitterLayout from 'react-splitter-layout';
import Sidebar from 'react-sidebar';
import Table from './main_pane/table';
import DecksList from './deck_pane/decks_list';

export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.handleShowDecks = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(opened) {
    this.setState({ sidebarOpen: opened });
  }

  handleShowDecks(show) {
    this.setState({ sidebarOpen: show });
  }

  render() {
    var sidebarContent = (
      <div style={{ backgroundColor: 'Aqua' }}>
        <DecksList />
      </div>
    );

    return (
      <Sidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        touch={true}
        pullRight={true}>
        <SplitterLayout
          vertical={true} primaryIndex={0}
          primaryMinSize={400}
          secondaryMinSize={50}
          secondaryInitialSize={50}>
          <div>
            <span style={{ backgroundColor: 'Aqua' }}>
              <Table onShowDecks={this.handleShowDecks}>Main pane</Table>
            </span>
          </div>
          <div>Bottom pane</div>
        </SplitterLayout>

      </Sidebar>
    );
  }
}