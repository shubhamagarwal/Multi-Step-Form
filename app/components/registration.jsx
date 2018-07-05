import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../aasets/css/style.css';
import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import Step4 from './Step4.jsx';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
            step: 1,
            fields:{
                name: null,
                email: null,
                password: null,
                reveiverName: null,
                reveiverEmail: null,
                reveiverPassword: null,
                age: null,
                colors: []
            }
        };
        this.getSteps = this.getSteps.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.saveValues = this.saveValues.bind(this);
        this.saveValues1 = this.saveValues1.bind(this);
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    getSteps(){
        switch(this.state.step) {
            case 1:
                return <Step1 fieldValues={this.state.fields} nextStep={this.nextStep} saveValues={this.saveValues}/>
            case 2: 
                return <Step2 fieldValues={this.state.fields} nextStep={this.nextStep} previousStep={this.previousStep} saveValues1={this.saveValues1}/>
            case 3: 
                return <Step3 fieldValues={this.state.fields} submitRegistration={this.submitRegistration} previousStep={this.previousStep}/>
            case 4: 
                return <Step4 fieldValues={this.state.fields}/>
            default:
                return(<div>hello1</div>)
        }
        
    }

    saveValues(values){
        console.log(values);
        this.state.fields.name = values.name;
        this.state.fields.email = values.email;
        this.state.fields.password = values.password;
        this.setState(this.state);

    }

    saveValues1(values){
        this.state.fields.reveiverName = values.reveiverName;
        this.state.fields.reveiverEmail = values.reveiverEmail;
        this.state.fields.reveiverPassword = values.reveiverPassword;
        this.setState(this.state);
    }

    nextStep(){
        this.setState({step: this.state.step+1});
    }

    previousStep(){
        this.setState({step: this.state.step-1});
    }

    submitRegistration(){
        this.nextStep();
    }

    render(){
        return(
        <main>
            <span className="progress-step">Step {this.state.step}</span>
            {this.getSteps()}
        </main>)
    }
}

export default Registration;