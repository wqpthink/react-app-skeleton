import path from 'path';
import fs from 'fs';
import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '_common/header/store/interface';
import {reducer as sidenavReducer} from '_common/sidenav/store/interface';
import {reducer as homeReducer} from '_page/home/store/interface';
import {reducer as loginReducer} from '_page/login/store/interface';


export default combineReducers({
    header: headerReducer,
    sidenav: sidenavReducer,
    home: homeReducer,
    login: loginReducer
});
