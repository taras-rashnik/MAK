import React, { Component } from 'react';
import SplitterLayout from 'react-splitter-layout';
import Sidebar from 'react-sidebar';

import backgroundUrl from "../backgrounds/background-2044512.jpg";


export default class LayoutCmp extends Component {

    render() {
        let style = {
            backgroundImage: `url("${backgroundUrl}")`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        };

        return (
            <div style={style}>
                <Sidebar
                    sidebar={this.props.deckList}
                    open={this.props.showDecks}
                    onSetOpen={this.props.onShowDecks}
                    touch={true}
                    pullRight={true}>
                    <SplitterLayout
                        vertical={true}
                        primaryIndex={0}
                        primaryMinSize={50}
                        secondaryMinSize={150}
                        secondaryInitialSize={150}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>{this.props.table}</div>
                            <div>{this.props.controls}</div>
                        </div>
                        {this.props.cardList}
                    </SplitterLayout>
                </Sidebar>
            </div>
        );
    }

}