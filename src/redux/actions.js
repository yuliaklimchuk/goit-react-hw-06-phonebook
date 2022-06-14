import shortid from "shortid";
import types from './types'

const addContact = (name, number) => ({
    type: types.ADD,
    payload:{ 
        id: shortid.generate(),
        name: name,
        number: number
    }
})

const clickDelete = (contactId) => ({
    type: types.DELETE,
    payload: contactId
});

const changeFilter = (value) => ({
    type: types.FILTER,
    payload: value
})

export default { addContact, clickDelete, changeFilter };