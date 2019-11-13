import { combineReducers } from 'redux';
import listsReducer from './listsReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
    listsReducer,
    itemsReducer
})

export default rootReducer;