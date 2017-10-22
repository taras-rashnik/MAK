import React, { Component } from "react";
import SplitterLayout from 'react-splitter-layout';
import Table from './main_pane/table'

export default class Layout extends Component {
  render() {
    return (
      <SplitterLayout vertical={true} primaryIndex={0} primaryMinSize={400} secondaryMinSize={50} secondaryInitialSize={50}>
        <SplitterLayout primaryIndex={0} primaryMinSize={400} secondaryMinSize={50} secondaryInitialSize={50}>
          <div>
            <span style={{ backgroundColor: 'Aqua' }}>
              <Table>Main pane</Table>
            </span>
          </div>
          <div>Right pane</div>
        </SplitterLayout>
        <div>Bottom pane</div>
      </SplitterLayout>
    );
  }
}