import { Route, Switch } from 'react-router-dom';

import Basket from 'containers/basket'
import Phone from 'containers/phone';
import Phones from 'containers/phones';
import React from 'react';

const routes = (
	<>
		<Switch>
			<Route exact path="/" component={Phones} />
			<Route path='/basket' component={Basket} />
			<Route path="/categories/:id" component={Phones} />
			<Route path="/phones/:id" component={Phone} />
		</Switch>
	</>
);

export default routes;
