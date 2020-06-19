import * as R from 'ramda';

import phones from './mockPhones';

export const fetchPhones = async () => {
	return Promise.resolve(phones);
};

export const loadMorePhones = async ({ offset }) => {
	return Promise.resolve(phones);
};

export const fetchPhoneById = async (id) => {
	return new Promise((resolve) => {
		const phone = R.find(R.propEq('id', id), phones);
		resolve(phone);
	});
};
