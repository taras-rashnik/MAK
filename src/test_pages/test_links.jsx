import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class TestLinks extends Component {
    render() {
        return (
            <div>
                <h1>Test Links</h1>
                <ul>
                <li><Link to="/main">Main page</Link></li>
                <li><Link to="/layout">Layout</Link></li>
                <li><Link to="/test1">Test 1</Link></li>
                </ul>
            </div>
        );
    }
}