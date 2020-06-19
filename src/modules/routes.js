import { Route, Switch } from 'react-router-dom';

import Phones from 'containers/phones';
import React from 'react';

const routes = (
	<Switch>
		<Route exact path="/" component={Phones} />
	</Switch>
);

export default routes;
