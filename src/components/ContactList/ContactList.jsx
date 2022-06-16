import style from './contactList.module.css';
import { ContactItem } from './ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions } from '../../redux/actions'

const ContactList = () => { 
    const items = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);  
    const dispatch = useDispatch();

    const getFilterContacts = (allContacts, filter) => { 
        const normalizeFilter = filter.toLowerCase();
        return  allContacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizeFilter));
    }
    const filterContacts = getFilterContacts(items, filter);

    const clickDelete = (id) => dispatch(contactsActions.clickDelete(id));

    return <ul className={ style.list}>
        {filterContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={ id} name={name} number={number} clickDelete={ clickDelete}/>
        ))}
    </ul>
}

export default ContactList;
