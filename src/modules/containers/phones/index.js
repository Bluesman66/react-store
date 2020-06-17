import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchPhones } from 'actions';

const Phones = ({ fetchPhones }) => {
	useEffect(() => {
		fetchPhones();
	});

	return <div>Phones</div>;
};

const mapDispatchToProps = {
	fetchPhones,
};

export default connect(null, mapDispatchToProps)(Phones);
