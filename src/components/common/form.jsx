import {Component} from 'react';
import Joi from "joi-browser";
import React from "react";
import Input from "../common/input";
import Select from "./select";


class Form extends Component {

    state = {
        data: {},
        errors: {}
    };

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const result = Joi.validate(obj, schema);
        const {error} = result;
        return error ? error.details[0].message : null;
    };


    validate = () => {
        const options = {abortEarly: false};
        const result = Joi.validate(this.state.data, this.schema, options);
        const {error} = result;

        if (!error) return null;

        const errors = {};

        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };


    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors})
    };


    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});

        if (errors) return;

        this.doSubmit();
    };

    renderButton(label) {
        return <button disabled={this.validate()} type="submit" className="btn btn-primary">
            {label}
        </button>
    }


    renderSelect(name, label, options) {
        const {data, errors} = this.state;

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }


    renderInput(name, label, type = 'text') {

        const {data, errors} = this.state;

        return <Input
            onChange={this.handleChange}
            name={name}
            type={type}
            value={data[name]}
            label={label}
            error={errors[name]}
        />
    }
}

export default Form;
