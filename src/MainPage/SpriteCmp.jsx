import React, {Component} from 'react';

export default class SpriteCmp extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={this.props.styles}></div>
        );
    }
    
}