import * as R from 'ramda';

import { Link, useParams } from 'react-router-dom';

import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getCategories } from 'selectors';

const Categories = ({ categories }) => {
	const { id } = useParams();

	const renderCategory = (category, index) => {
		const getActiveState = R.propEq('id', id);
		const linkClass = classNames({
			'list-group-item': true,
			active: getActiveState(category),
		});
		return (
			<Link to={`/categories/${category.id}`} className={linkClass} key={index}>
				{category.name}
			</Link>
		);
	};

	const renderAllCategory = () => {
		const linkClass = classNames({
			'list-group-item': true,
			active: R.isNil(id),
		});
		return (
			<Link to="/" className={linkClass}>
				All
			</Link>
		);
	};

	return (
		<div className="well">
			<h4>Brand</h4>
			<div className="list-group">
				{renderAllCategory()}
				{categories.map((category, index) => renderCategory(category, index))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	categories: getCategories(state),
});

export default connect(mapStateToProps, null)(Categories);
