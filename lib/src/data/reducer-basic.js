import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '_common_/header/store/interface';
import {reducer as sidenavReducer} from '_common_/sidenav/store/interface';
import {reducer as homeReducer} from '_page_/home/store/interface';
import {reducer as loginReducer} from '_page_/login/store/interface';
export default combineReducers({
    header: headerReducer,
    sidenav: sidenavReducer,
    home: homeReducer,
    login: loginReducer
});
