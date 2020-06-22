import * as R from 'ramda';

import React, { Fragment, useEffect, useState } from 'react';

const AdaptiveTitle = ({ title }) => {
	const [shortTitle, setShortTitle] = useState(title);

	const sm = window.matchMedia('(max-width: 767px)');
	const md = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
	const lg = window.matchMedia('(min-width: 1200px)');

	const getShortText = (length) =>
		title.length > length ? `${R.take(length, title)}...` : title;

	const fsm = (m) => {
		if (m.matches) {
			setShortTitle(title);
		}
	};

	const fmd = (m) => {
		if (m.matches) {
			setShortTitle(getShortText(12));
		}
	};

	const flg = (m) => {
		if (m.matches) {
			setShortTitle(getShortText(16));
		}
	};

	useEffect(() => {
		sm.addListener(fsm);
		md.addListener(fmd);
		lg.addListener(flg);

		return () => {
			sm.removeListener(fsm);
			md.removeListener(fmd);
			lg.removeListener(flg);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		fsm(sm);
		fmd(md);
		flg(lg);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [title]);

	return <Fragment>{shortTitle}</Fragment>;
};

export default AdaptiveTitle;
