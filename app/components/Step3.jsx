import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../aasets/css/style.css';

class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: ''
        };
    }
    

    render(){
        return(
        <div>
        <h2>Confirm Registration</h2>
        <ul>
          <li><b>Name:</b> {this.props.fieldValues.name}</li>
          <li><b>Email:</b> {this.props.fieldValues.email}</li>
        </ul>
        <ul className="form-fields">
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.props.submitRegistration}>Submit Registration</button>
          </li>
        </ul>
      </div>
        )
    }
}

export default Step3;