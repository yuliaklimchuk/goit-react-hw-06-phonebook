import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction('contacts/add', (name, number) => { 
    return {
        payload: { 
            id: shortid.generate(),
            name: name,
            number: number
    }}
});
const clickDelete = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

export const contactsActions = {
    addContact,
    clickDelete,
    changeFilter
};