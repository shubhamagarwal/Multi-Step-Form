import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../aasets/css/style.css';

class Step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: ''
        };
    }
    

    render(){
        return(
            <div>
                <h2>Successfully Registered!</h2>
                <p>Please check your email <b>{this.props.fieldValues.email}</b> for a confirmation link to activate your account.</p>
            </div>
        )
    }
}

export default Step4;