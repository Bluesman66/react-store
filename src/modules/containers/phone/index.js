import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchPhoneById } from 'actions';

const Phone = ({ fetchPhoneById, match }) => {
	useEffect(() => {
		fetchPhoneById(match.params.id);
	}, [fetchPhoneById, match.params.id]);

	return <div>Phone</div>;
};

const mapDispatchToProps = {
	fetchPhoneById,
};

export default connect(null, mapDispatchToProps)(Phone);
