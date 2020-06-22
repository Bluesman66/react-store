import { Route, Switch } from 'react-router-dom';

import Phone from 'containers/phone';
import Phones from 'containers/phones';
import React from 'react';

const routes = (
	<>
		<Switch>
			<Route exact path="/" component={Phones} />
			<Route path="/categories/:id" component={Phones} />
			<Route path="/phones/:id" component={Phone} />
		</Switch>
	</>
);

export default routes;
