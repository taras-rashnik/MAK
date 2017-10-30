import React, { Component } from 'react';
import SplitterLayout from 'react-splitter-layout';
import Sidebar from 'react-sidebar';


export default class LayoutCmp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Sidebar
                sidebar={this.props.deckList}
                open={this.props.showDecks}
                onSetOpen={this.props.onShowDecks}
                touch={true}
                pullRight={true}>
                <SplitterLayout
                    vertical={true} 
                    primaryIndex={0}
                    primaryMinSize={400}
                    secondaryMinSize={150}
                    secondaryInitialSize={150}>
                    <div>
                        <div>{this.props.table}</div>
                        <div>{this.props.controls}</div>
                    </div>
                    {this.props.cardList}
                </SplitterLayout>
            </Sidebar>
        );
    }

}