import BasketCart from 'components/basketCart';
import React from 'react';
import Search from 'components/search';

const Sidebar = () => {
	return (
		<div>
			<BasketCart />
			<Search />
		</div>
	);
};

export default Sidebar;
