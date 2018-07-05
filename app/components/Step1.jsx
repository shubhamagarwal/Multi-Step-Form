import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../aasets/css/style.css';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: ''
        };
    }

    nextStep(e){
        var data = {
            name     : this.usernameField.value,
            password : this.password.value,
            email    : this.email.value,
        }  
        console.log(data);
          
        e.preventDefault();
        this.props.saveValues(data);
        this.props.nextStep();
    }
    

    render(){
        return(
        <div>
            <h2>Sender Form</h2>
            <ul className="form-fields">
            <li>
                <label>Name</label>
                <input type="text" ref={ (input) => { this.usernameField = input } } defaultValue={this.props.fieldValues.name} />
            </li>
            <li>
                <label>Password</label>
                <input type="password" ref={ (input) => { this.password = input } } defaultValue={this.props.fieldValues.password} />
            </li>
            <li>
                <label>Email</label>
                <input type="email" ref={ (input) => { this.email = input } } defaultValue={this.props.fieldValues.email} />
            </li>
            <li className="form-footer">
                <button className="btn -primary pull-right" onClick={this.nextStep.bind(this)}>Save &amp; Continue</button>
            </li>
            </ul>
        </div>
        )
    }
}

export default Step1;