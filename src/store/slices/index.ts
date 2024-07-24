import {combineReducers} from 'redux';

import peopleReducer from 'modules/People/redux';

const rootReducer = combineReducers({
    peopleReducer,
});

export default rootReducer;
