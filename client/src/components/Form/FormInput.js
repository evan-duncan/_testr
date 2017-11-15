import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormInput extends Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        onChange: PropTypes.Func,
        meta: PropTypes.object,
    };

    static defaultProps = {
        placeholder: null,
        name: null,
        onChange: () => {},
        meta: null,
    };

    render() {
        return (
            <div className={this.props.className}>
                <label>
                    <input
                        className={`${this.props.className}Input`}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        onChange={this.props.onChange} />
                    {this.props.meta}
                </label>
            </div>
        );
    }
}

