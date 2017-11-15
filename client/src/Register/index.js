import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { processRegistration } from '../actions/user';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password_confirm: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(processRegistration(this.state));
    }

    handleChange(event) {
        if (event.target.type === 'checkbox') {
            return this.setState({ [event.target.name]: event.target.checked });
        }

        return this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form className="RegisterForm" onSubmit={this.handleSubmit}>
                    <div className="RegisterForm--inputGroup">
                        <input className="RegisterForm--inputGroupInput" type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                    </div>

                    <div className="RegisterForm--inputGroup">
                        <input className="RegisterForm--inputGroupInput" type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                    </div>

                    <div className="RegisterForm--inputGroup">
                        <input className="RegisterForm--inputGroupInput" type="password" placeholder="Password Confirm" name="password_confirm" onChange={this.handleChange} />
                    </div>

                    <input className="btn btn-success" type="submit" value="Register" />
                </form>
            </div>
        );
    }
}

export default connect(state => state)(Register);

