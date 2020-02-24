//import React from 'react';





////export default class DataService extends React.DataService {

//const DataService = {
//    fetchServerData: async function () {
//        const response = await fetch('autocomplete').catch((err) => {
//            this.setError("Cannot load people data from the server !");
//        });
//        this.state.fullData = await response.json();
//    },

//    secondValidationMethod: function (value) {
//        //inspect the value
//    }


//};

//export default DataService;




import React from 'react';

export default class DataService extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',   // this is for making our textbox controlled by react (controlled vs unconstrolled), unlike uncontrolled <- which means controlled by the browser
            fullData: [],
            userValue: '',
            errors: [],
            isError: false,

        };
    }
     

    componentDidMount() {

        this.state.fullData = this.getLocalJSONPeople();
    }

    render() {

        return (
            <span style={{ "backgroundColor": "yellow", "height": "50px", "width": "300px" }}>loading data indicator...</span>
        );
    }
     
     

    async getLocalJSONPeople() {
        const response = await fetch('autocomplete').catch((err) => {
            this.setError("Cannot load people data from the server !");
        });
        return await response.json();
    }


}