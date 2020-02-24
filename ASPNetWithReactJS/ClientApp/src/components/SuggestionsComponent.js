import React from 'react';
 
export default class SuggestionsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            text: "",
            suggestions: [],
            userValue: '',
            errors: [],
            isError: false,
            fullData: [],
        };
    }


    componentDidMount() {

    }


    
    //
    // puts the user-selected value
    // in the search text box
    suggestionSelect(value) {

        var searchBox = document.getElementById("search");
        searchBox.value = value;

        this.setState(() => ({
            text: value,
            suggestions: [],
        }));
    }

    render() {

        if (this.props.suggestions.length === 0) {
            return null;
        }

        if (this.props.userValue.length < 2) {
            return null;
        }

        return (

            <div id="suggestions1" suggestions={this.props.suggestions}>
                <div id="suggestions2">
                    <div id="suggestions3">
                        <div className="form-group">
                            <div className="container mt-5 AutoCompleteText" size={this.props.suggestions.length} >

                                {this.props.suggestions.map((item) =>

                                    <div key={item.id} onClick={() => this.suggestionSelect(item.name + " - " + item.workTitle)}
                                        style={{ "border": "1px dotted grey", "height": "100%", "width": "500px" }}>{this.findAndHighLightText(item)}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    //
    // highliting, using a span, the search string runs on the full name
    // and on the work-title
    //
    findAndHighLightText(person) {
        var name, title, finalText, nameText = "", titleText = "", tempText = "", highlighted = "";

        if (this.state !== 'undefined') {

            name = person.name.toLowerCase();
            title = person.workTitle.toLowerCase();
            if (name.indexOf(this.props.userValue.toLowerCase()) > -1) {
                tempText = name.split(this.props.userValue.toLowerCase());
                highlighted = "<span style='background-color:yellow;height:50px;width:300px'>" + this.props.userValue + "</span>";
                nameText = tempText[0] + highlighted + tempText[1];
            }

            if (title.indexOf(this.props.userValue.toLowerCase()) > -1) {
                tempText = title.split(this.props.userValue.toLowerCase());
                highlighted = "<span style='background-color:yellow;height:50px;width:300px'>" + this.props.userValue + "</span>";
                titleText = tempText[0] + highlighted + tempText[1];
            }

            if (titleText === "")
                titleText = person.workTitle;

            if (nameText === "")
                nameText = person.name;

            finalText = nameText + " - " + titleText;

            this.highLightValue = finalText;

        }
        const createMarkup = htmlString => ({ __html: htmlString });

        return (
            <div id="highLighted1" style={{ "height": "100%", "width": "100%" }}>

                <div style={{ "width": "500px", "height": "50px" }}>
                    <div style={{ "backgroundImage": `url(${person.imageUrl})`, "width": "50px", "height": "50px", "marginBottom": "-50px"/*, "marginTop": "10px"*/ }}>
                    </div>
                    <div id="highLighted2" style={{ "width": "320px", "height": "50px", "float": "right", "paddingTop": "12px", "textAlign": "center" }}
                        dangerouslySetInnerHTML={createMarkup(finalText)} />


                </div>
            </div>
        )
    }

}