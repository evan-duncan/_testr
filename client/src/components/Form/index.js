import React, { Component } from 'react';
import FormInput from './FormInput';

export default class Form extends Component {
    constructor(props) {
        super(props);

        const obj = {};
        this.formFields
            .map(field  => ({ key: field.name, value: field.defaultState }))
            .forEach(formField => {
                const { key, value } = formField;
                obj[key] = value;
            });

        this.state = obj;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Return form field information to populate
     * initial state and build out the form
     * @returns {Array}
     */
    get formFields() {
        return [];
    }

    /**
     * On submit an action will be dispatched
     * with the state of the form. Tell us which
     * action will be called.
     * @returns {Function}
     */
    get submitEventAction() {
        return () => {};
    }

    get submitComponent() {
        return;
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(this.submitEventAction(this.state));
    }

    handleChange(event) {
        if (event.target.type === 'checkbox') {
            return this.setState({ [event.target.name]: event.target.checked });
        }

        return this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="Form">
                {this.props.title &&
                    <h1>{this.props.title}</h1>
                }

                <form className={this.constructor.name} onSubmit={this.handleSubmit}>
                    {this.formFields.map((field, idx) => (<FormInput key={idx} {...field} />))}
                    {this.submitComponent}
                </form>
            </div>
        );
    }
}



