import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { contactsActions} from "./actions";

const items = createReducer([], {
    [contactsActions.addContact]: (state, { payload}) => [...state, payload],
    [contactsActions.clickDelete]: (state, { payload}) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [contactsActions.changeFilter]: (_, {payload}) => payload,
})

export default combineReducers({
    items,
    filter
})