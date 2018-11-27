import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from "../reducers/items";

export default function configureStore(initialState) {
    return createStore(
        combineReducers({
            items: itemsReducer,
            /* add here as much reducers as you like */
          }),
          initialState,
        applyMiddleware(thunk)
    );
}

