import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchPhoneById } from 'actions';
import { useParams } from 'react-router-dom';

const Phone = ({ fetchPhoneById}) => {
	const { id } = useParams();

	useEffect(() => {
		fetchPhoneById(id);
	}, [fetchPhoneById, id]);

	return <div>Phone</div>;
};

const mapDispatchToProps = {
	fetchPhoneById,
};

export default connect(null, mapDispatchToProps)(Phone);
