import style from './contactList.module.css';
import { ContactItem } from './ContactItem';
import { connect } from 'react-redux';
import contactsAction from '../../redux/actions'

const ContactList = ({ filterContacts, clickDelete}) => { 
    return <ul className={ style.list}>
        {filterContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={ id} name={name} number={number} clickDelete={ clickDelete}/>
        ))}
    </ul>
}

const getFilterContacts = (allContacts, filter) => { 
    const normalizeFilter = filter.toLowerCase();
    return  allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter));
}

const mapStateToProps = state => { 
    const { items, filter } = state.contacts
    return ({
    filterContacts: getFilterContacts(items,filter),
})
}

const mapDispatchToProps = dispatch => ({
    clickDelete: (id) => dispatch(contactsAction.clickDelete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
