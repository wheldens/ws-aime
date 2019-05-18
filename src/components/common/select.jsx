import React from 'react';


function Select({label, name, options, error, ...rest}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>

            <select name={name} id={name} {...rest} className="form-control">

                <option value="Choose"/>

                {options.map(option => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}

            </select>
            {error && <div className="alert alert-danger">{error}</div>}

        </div>
    );
}

export default Select;