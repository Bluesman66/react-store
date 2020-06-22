import * as R from 'ramda';

import React, { Fragment, useEffect, useState } from 'react';

const AdaptiveTitle = ({ title }) => {
	const [shortTitle, setShortTitle] = useState(title);

	useEffect(() => {
		const getShortText = (length) =>
			title.length > length ? `${R.take(length, title)}...` : title;

		const fsx = (m) => {
			if (m.matches) {
				setShortTitle(title);
			}
		};

		const fsm = (m) => {
			if (m.matches) {
				setShortTitle(getShortText(5));
			}
		};

		const fmd = (m) => {
			if (m.matches) {
				setShortTitle(getShortText(10));
			}
		};

		const flg = (m) => {
			if (m.matches) {
				setShortTitle(getShortText(14));
			}
		};

		const sx = window.matchMedia('(max-width: 575px)');
		const sm = window.matchMedia('(min-width: 576px) and (max-width: 991px)');
		const md = window.matchMedia('(min-width: 992px) and (max-width: 1199px)');
		const lg = window.matchMedia('(min-width: 1200px)');

		fsx(sx);
		fsm(sm);
		fmd(md);
		flg(lg);

		sx.addListener(fsx);
		sm.addListener(fsm);
		md.addListener(fmd);
		lg.addListener(flg);

		return () => {
			sx.removeListener(fsx);
			sm.removeListener(fsm);
			md.removeListener(fmd);
			lg.removeListener(flg);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Fragment>{shortTitle}</Fragment>;
};

export default AdaptiveTitle;
