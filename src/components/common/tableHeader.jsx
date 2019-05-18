import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TableHeader extends Component {

    raiseSort = (path) => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }
        this.props.onSort(sortColumn)
    };

    renderSortIcon = column => {
        const {sortColumn} = this.props;

        if (column.path !== this.props.sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"> </i>
        else return <i className="fa fa-sort-desc"> </i>

    };

    render() {
        const {columns} = this.props;

        return (
            <thead className="thead-light">
            <tr>

                {columns.map(column =>
                    <th className={"clickable"}
                        key={column.path || column.key}
                        onClick={() => this.raiseSort(column.path)} scope="col">
                        {column.label} {this.renderSortIcon(column)}
                    </th>
                )}

            </tr>
            </thead>
        );
    }
}

TableHeader.propTypes = {
    columns: PropTypes.array,
    sortColumn: PropTypes.object,
    onSort: PropTypes.func
};

export default TableHeader;
