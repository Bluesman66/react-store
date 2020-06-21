import * as R from 'ramda';

import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchPhoneById } from 'actions';
import { getPhoneById } from 'selectors';
import { useParams } from 'react-router-dom';

const Phone = ({ fetchPhoneById, phone }) => {
	const { id } = useParams();

	useEffect(() => {
		fetchPhoneById(id);
	}, [fetchPhoneById, id]);

	const renderField = () => {
		const columnField = R.compose(
			R.toPairs,
			R.pick([
				'cpu',
				'camera',
				'size',
				'weight',
				'display',
				'battery',
				'memory',
			])
		)(phone);

		console.log('columns', columnField);

		return columnField.map(([key, value]) => (
			<div className="column" key={key}>
				<div className="ab-details-title">
					<p>{key}</p>
				</div>
				<div className="ab-details-info">{value}</div>
			</div>
		));
	};

	const renderContent = () => (
		<div className="thumbnail">
			<div className="row">
				<div className="col-md-6">
					<img className="img-thumbnail" src={phone.image} alt={phone.name} />
				</div>
				<div className="col-md-6">{renderField()}</div>
			</div>
			<div className="caption-full">
				<h4 className="pull-right">${phone.price}</h4>
				<h4>{phone.name}</h4>
				<p>{phone.description}</p>
			</div>
		</div>
	);

	const renderSidebar = () => {};

	return (
		<div className="view-container">
			<div className="container">
				<div className="row">
					<div className="col-md-9">{phone && renderContent()}</div>
					<div className="col-md-3">{phone && renderSidebar()}</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		phone: getPhoneById(state, state.phonePage.id),
	};
};

const mapDispatchToProps = {
	fetchPhoneById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
