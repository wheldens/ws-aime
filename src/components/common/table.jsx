import React from 'react';
// import PropTypes from 'prop-types';

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({columns, data, sortColumn, onSort, keyProperty}) => {

    return (
        <table className="table">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}/>

            <TableBody
                data={data}
                columns={columns}
                keyProperty={keyProperty}
            />
        </table>
    );
};

// Table.propTypes = {};

export default Table;
