// import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducer"

// const store =  configureStore({
//     reducer: {
//         contacts:contactsReducer,
//     }
// });

// export default store;

import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    contacts: contactsReducer,
});

const store = createStore(rootReducer);

export default store;