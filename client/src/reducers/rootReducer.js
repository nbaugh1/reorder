import { combineReducers } from 'redux';
import { ordersReducer } from './ordersReducer';
import { itemsReducer } from './itemsReducer';

const rootReducer = combineReducers({
    ordersReducer,
    itemsReducer
})

export default rootReducer;