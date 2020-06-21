import { combineReducers } from 'redux';
import phonePage from 'reducers/phonePage';
import phones from 'reducers/phones';
import phonesPage from 'reducers/phonesPage';

export default combineReducers({
	phones,
	phonesPage,
	phonePage,
});
