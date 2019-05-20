import React from 'react';
// import PropTypes from 'prop-types';

const ListGroup = (props) => {
    const {items, onItemSelect, textProperty, valueProperty, selectedItem} = props;
    return (
        <ul className="list-group col-3">
            {items.map(item =>
                <li
                    key={item[valueProperty]}
                    onClick={() => onItemSelect(item)}
                    className={item === selectedItem ? 'list-group-item active' : 'list-group-item'}
                >{item[textProperty]}
                </li>
            )}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

// ListGroup.propTypes = {};

export default ListGroup;
