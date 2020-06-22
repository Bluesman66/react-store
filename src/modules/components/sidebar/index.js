import BasketCart from 'components/basketCart';
import Categories from 'components/categories';
import React from 'react';
import Search from 'components/search';

const Sidebar = () => {
	return (
		<div>
			<BasketCart />
			<Search />
			<Categories />
		</div>
	);
};

export default Sidebar;
