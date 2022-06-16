import style from './filter.module.css';
import { connect } from 'react-redux';
import { contactsActions } from '../../redux/actions'

const Filter = ({ value, onChange }) => { 
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

const mapStateToProps = state => {
    return ({
        value: state.contacts.filter,
    })
}

const mapDispatchToProps = dispatch => ({
    onChange: (event) => dispatch(contactsActions.changeFilter(event.target.value)),
})

export default connect(mapStateToProps,  mapDispatchToProps)(Filter);
