import React from 'react';


function Input({label, name, error,  ...rest}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}
                className="form-control" id={name}
                placeholder={`Enter here your ${name}`}
                aria-describedby={`${name}help`}
            />

            <small id={`${name}help`} className="form-text text-muted">We'll never share your {name} with anyone
                else.
            </small>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;
