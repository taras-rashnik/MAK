import React, {Component} from "react";
import SplitterLayout from 'react-splitter-layout';

export default class Layout extends Component {
  render(){
    return (
      <SplitterLayout vertical={true} primaryIndex={0} primaryMinSize={400} secondaryMinSize={50} secondaryInitialSize={200}>
        <SplitterLayout primaryIndex={0} primaryMinSize={400} secondaryMinSize={50} secondaryInitialSize={200}>
          <div>Main pane</div>
          <div>Right pane</div>
        </SplitterLayout>
        <div>Bottom pane</div>
      </SplitterLayout>
    );
  }
}