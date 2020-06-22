import basket from 'reducers/basket';
import categories from 'reducers/categories';
import { combineReducers } from 'redux';
import phonePage from 'reducers/phonePage';
import phones from 'reducers/phones';
import phonesPage from 'reducers/phonesPage';

export default combineReducers({
	phones,
	phonesPage,
	phonePage,
	basket,
	categories,
});
