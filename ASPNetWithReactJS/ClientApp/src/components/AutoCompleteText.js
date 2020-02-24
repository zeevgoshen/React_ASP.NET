import React from 'react';

import '../css/AutoCompleteText.css';
import SuggestionsComponent from './SuggestionsComponent'
import DataService from './DataService';

export default class AutoCompleteText extends React.Component {

    highLightValue = '';

    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
            text: '',   // this is for making our textbox controlled by react (controlled vs unconstrolled), unlike uncontrolled <- which means controlled by the browser
            fullData: [],
            userValue: '',
            errors: [],
            isError: false,
            

        };
    }

    setError(msg) {
        this.setState((prevState) => ({
            errors: [...prevState.errors.errors, msg],
            isError: true,
        }));
    }

    clearAllErrors() {
        this.setState({ errors: [], isError: false, });
    }

    async componentDidMount() {

        // when the component is done loading we are fetching the data from the server
        // in an async way.
        // This is actually the main part of a "service".
        //
        this.getLocalJSONPeople();
        this.setState({ suggestions: this.state.fullData, loading: false });
        this.setState({ items: this.state.fullData });
    }

    async getLocalJSONPeople() {
 
        const response = await fetch('autocomplete').catch((err) => {
            this.setError("Cannot load people data from the server !");
        });


        this.state.fullData = await response.json();
        this.setState({ loading: true });
    }


    onTextChanged = (e) => {

        this.state.userValue = e.target.value;
        let suggestions = this.state.fullData;//[];
        this.setState(() => ({ suggestions, text: this.state.userValue }));
        { this.renderSuggestions() }
    }


    //
    // clicking the search button
    // to filter the results LOCALLY.
    //
    onClick = (e) => {

        // we are checking for the search string in both the name field and the title field.
        // at the end we merge the results, since each employee record contains both the name 
        // and title, and the search string can appear several times in the same line.
        let suggestions = [];
        let suggestionsTitle = [];

        if (this.state.userValue.length > 1) {

            // a good place to dig deeper into prevention of common scripting
            // syntax remote highjacking.

            //this.state.userValue = RegExp.escape(this.state.userValue);

            const regex = new RegExp(`[A-Za-z.\s]*${this.state.userValue}[A-Za-z.\s]*`, 'i');
            suggestions = this.state.fullData.sort().filter(v => regex.exec(v.name));
            suggestionsTitle = this.state.fullData.sort().filter(v => regex.exec(v.workTitle));

            // merging the arrays withut duplicates
            suggestions = suggestions.concat(suggestionsTitle.filter((item) => suggestions.indexOf(item) < 0));
        }
        this.setState(() => ({ suggestions, text: this.state.userValue }));

    }


    render() {
        const { text } = this.state;
        return (

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="form-group">
                            
                            <span>Search</span>
                            <input id="search" value={text} style={{ "fontWeight": "Bold", "width": "500px", "marginLeft":"15px" }} onChange={this.onTextChanged.bind(this)} type="text"
                                className="AutoCompleteText form-control form-control-lg" placeholder="2 Letters minimum...try 'de', 'se'.,." />
                            <input type="button" onClick={(e) => this.onClick(e)} value="Search..." className="" style={{ "marginTop": "20px", "marginLeft": "15px" }} />
                            {this.renderSuggestions()}

                        </div>
                    </div>
                </div>
            </div>


        );
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        const { userValue } = this.state;


        if (suggestions.length === 0) {
            return null;
        }

        if (this.state.userValue.length < 2) {
            return null;
        }

        return (
            <SuggestionsComponent suggestions={suggestions} userValue={userValue} />
        );
    }


}