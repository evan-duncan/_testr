import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { removeAll } from '../actions/notifications';
import { processRegistration } from '../actions/user';
import Logo from '../components/Logo';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(processRegistration(this.state));
        dispatch(removeAll());
    }

    handleChange(event) {
        if (event.target.type === 'checkbox') {
            return this.setState({ [event.target.name]: event.target.checked });
        }

        return this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { id, email } = this.props; 
        return !!id && !!email 
            ? <Redirect to={{ pathname: '/login', from: '/register' }} />
            : (
                <div className="RegisterForm">
                    <div className="RegisterForm--wrapper">
                        <div className="RegisterForm--banner">
                            <div className="RegisterForm--logo"><Logo /></div>
                            <h1 className="RegisterForm--hdg">Let's get started</h1>
                            <h2 className="RegisterForm--subHdg">Get up and running with Testr in minutes.</h2>
                        </div>
                        <form className="RegisterForm" onSubmit={this.handleSubmit}>
                            <div className="RegisterForm--inputGroup">
                                <span className="RegisterForm--inputGroupLabel">Name</span>
                                <input className={`RegisterForm--inputGroupInput ${this.props.validationErrors.name ? 'red-border': ''}`} type="text" placeholder="Name" name="name" onChange={this.handleChange} />
                            </div>
                            <div className="RegisterForm--inputGroup">
                                <span className="RegisterForm--inputGroupLabel">Email</span>
                                <input className={`RegisterForm--inputGroupInput ${this.props.validationErrors.email ? 'red-border': ''}`} type="text" placeholder="Email" name="email" onChange={this.handleChange} />
                            </div>
                            <div className="RegisterForm--inputGroup">
                                <span className="RegisterForm--inputGroupLabel">Password</span>
                                <input className={`RegisterForm--inputGroupInput ${this.props.validationErrors.password ? 'red-border': ''}`} type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                                <span className="RegisterForm--passwordRules">must be at least 6 characters</span>
                            </div>
                            <div className="RegisterForm--inputGroup">
                                <input className="btn btn-primary RegisterForm--submit" type="submit" value="Create account" />
                            </div>
                            <div className="RegisterForm--agreement">By logging in you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</div>
                            <div className="RegisterForm--login">Already have an account? <Link to="/login">Log in</Link>.</div>
                        </form>
                    </div>
                </div>
            );
    }
}

export default connect(state => state.user)(Register);
