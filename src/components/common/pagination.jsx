import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {

    const {itemsCount, pageSize, onPageChange, currentPage} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);

    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <ul className="pagination mt-2">
            {pages.map(page =>
                <li
                    key={page}
                    href=""
                    onClick={() => onPageChange(page)}
                    className={currentPage === page ? 'page-item active' : 'page-item'}>
                    <a className="page-link">{page}</a>
                </li>
            )}
        </ul>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;

