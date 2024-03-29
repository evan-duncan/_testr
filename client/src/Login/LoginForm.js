import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { processLogin } from '../actions/user';
import { addFooter } from '../actions/app';
import Logo from '../components/Logo';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: this.props.email || '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(processLogin(this.state));
    }

    handleChange(event) {
        if (event.target.type === 'checkbox') {
            return this.setState({ [event.target.name]: event.target.checked });
        }

        return this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="LoginForm">
                <div className="LoginForm--wrapper">
                    <div className="LoginForm--banner">
                        <div className="LoginForm--logo"><Logo /></div>
                        <h1 className="LoginForm--hdg">Log into Testr</h1>
                        <h2 className="LoginForm--subHdg">Glad you're back! We missed you.</h2>
                    </div>
                    <form className="LoginForm" onSubmit={this.handleSubmit}>
                        <div className="LoginForm--inputGroup">
                            <label>
                                <span className="LoginForm--inputGroupLabel">Email</span>
                                <input className="LoginForm--inputGroupInput" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="LoginForm--inputGroup">
                            <label>
                                <span className="LoginForm--inputGroupLabel">Password</span>
                                <span className="LoginForm--forgotPassword">
                                    <Link to="/forgot-password">Forgot password?</Link>
                                </span>
                                <input className="LoginForm--inputGroupInput" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="LoginForm--inputGroup">
                            <input className="btn btn-primary LoginForm--submit" type="submit" value="Log in" />
                        </div>
                        <div className="LoginForm--agreement">By logging in you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</div>
                        <div className="LoginForm--signUp">Don't have an account? <Link to="/register">Sign Up</Link>.</div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(state => state.user)(LoginForm);
