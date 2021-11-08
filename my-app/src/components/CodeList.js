import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

export default class CodeList extends React.Component {
    state = {
        persons : [],
    };

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=> {
            console.log(res);
            this.setState({persons: res.data});
        });
    }


    render(){
        return this.state.persons.map(person => <li>{person.email}</li>);
    }
}
