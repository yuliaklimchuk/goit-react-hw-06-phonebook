import style from './filter.module.css';
import {useDispatch, useSelector } from 'react-redux';
import { contactsActions } from '../../redux/actions'

const Filter = () => { 
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();
    const onChange = (e) => (dispatch(contactsActions.changeFilter(e.target.value)));
    return <label className={ style.label}>Find contacts by name
        <input className={style.input}
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
            required
        />
    </label>
}

export default Filter;
