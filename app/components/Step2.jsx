import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../aasets/css/style.css';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: ''
        };
    }

    nextStep(e){
        var data = {
            reveiverName     : this.reveiverNameField.value,
            reveiverPassword : this.reveiverPassword.value,
            reveiverEmail    : this.reveiverEmail.value,
        }  
        console.log(data);
          
        e.preventDefault();
        this.props.saveValues1(data);
        this.props.nextStep();
    }
    

    render(){
        return(
        <div>
            <h2>Receiver Name</h2>
            <ul className="form-fields">
            <li>
                <label>Name</label>
                <input type="text" ref={ (input) => { this.reveiverNameField = input } } defaultValue={this.props.fieldValues.reveiverName} />
            </li>
            <li>
                <label>Password</label>
                <input type="password" ref={ (input) => { this.reveiverPassword = input } } defaultValue={this.props.fieldValues.reveiverPassword} />
            </li>
            <li>
                <label>Email</label>
                <input type="email" ref={ (input) => { this.reveiverEmail = input } } defaultValue={this.props.fieldValues.reveiverEmail} />
            </li>
            <li className="form-footer">
                <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
                <button className="btn -primary pull-right" onClick={this.nextStep.bind(this)}>Save &amp; Continue</button>
            </li>
            </ul>
        </div>
        )
    }
}

export default Step2;