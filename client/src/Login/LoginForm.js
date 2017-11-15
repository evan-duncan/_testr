import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { processLogin } from '../actions/user';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember_me: false,
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
            <div>
                <h1>Log in</h1>
                <div>Don&apos;t have an account? <Link to="/register">Sign up</Link>.</div>
                <form className="LoginForm" onSubmit={this.handleSubmit}>
                    <div className="LoginForm--inputGroup">
                        <input className="LoginForm--inputGroupInput" type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                    </div>

                    <div className="LoginForm--inputGroup">
                        <input className="LoginForm--inputGroupInput" type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                    </div>

                    <div className="LoginForm--inputGroup">
                        <label>
                            <input type="checkbox" name="remember_me" onChange={this.handleChange} />
                            Remember me — <Link to="/password_reset">Forgot password?</Link>
                        </label>
                    </div>

                    <input className="btn btn-success" type="submit" value="Log in" />
                </form>
            </div>
        );
    }
}

export default connect(state => ({ user: state.user }))(LoginForm);

