import { Route, Switch } from 'react-router';

import Phones from 'containers/phones';
import React from 'react';

const routes = (
	<Switch>
		<Route exact path="/" component={Phones} />
	</Switch>
);

const Layout = () => (
	<div className="view-container">
		<div className="container">
			<div className="row">
				<div className="col-md-3">Sidebar</div>
				<div className="col-md-9">{routes}</div>
			</div>
		</div>
	</div>
);

export default Layout;
