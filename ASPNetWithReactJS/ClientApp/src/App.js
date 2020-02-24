import React, { Component } from 'react';
import AutoCompleteText from './components/AutoCompleteText'

import './custom.css'

export default class App extends Component {
    static displayName = App.name;



    componentDidMount() {
        this.setState({ loading: false });
    }

    render() {
        return (

            <div className="App">
                <div className="App-Component">
                    <div className="App" style={{ "marginTop": "20px" }}>
                        <header />
                        <h3 className="text-center mb-3">
                            <i>Employee lookup</i>
                        </h3>
                        <AutoCompleteText />
                    </div>
                </div>
            </div>
        );
    }
}

