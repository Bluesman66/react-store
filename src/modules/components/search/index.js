import React, { useState } from 'react';

import { connect } from 'react-redux';
import { searchPhone } from 'actions';

const Search = ({ searchPhone }) => {
	const [state, setState] = useState({ value: '' });

	const handleChange = (event) => {
		setState({
			value: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		searchPhone(state.value);
	};

	return (
		<div className="well blosd">
			<h3 className="lead">Quick shop</h3>
			<div className="input-group">
				<form onSubmit={handleSubmit}>
					<input onChange={handleChange} type="text" className="form-control" />
				</form>
				<span className="input-group-btn">
					<button className="btn btn-default" onClick={handleSubmit}>
						<span className="glyphicon glyphicon-search"></span>
					</button>
				</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	searchPhone,
};

export default connect(null, mapDispatchToProps)(Search);
