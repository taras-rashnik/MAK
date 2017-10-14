import React, {Component} from "react";
import SplitterLayout from 'react-splitter-layout';
import Table from './main_pane/table'

export default class Layout extends Component {
  render(){
    return (
      <SplitterLayout vertical={true} primaryIndex={0} primaryMinSize={400} secondaryMinSize={50} secondaryInitialSize={200}>
        <SplitterLayout primaryIndex={0} primaryMinSize={400} secondaryMinSize={50} secondaryInitialSize={200}>
          <Table>Main pane</Table>
          <div>Right pane</div>
        </SplitterLayout>
        <div>Bottom pane</div>
      </SplitterLayout>
    );
  }
}