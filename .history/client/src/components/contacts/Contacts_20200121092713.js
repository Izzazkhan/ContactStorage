import React, {Fragment, useContext} from 'react'
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContext'
const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts} = contactContext
    return (
        <Fragment>
            {contacts.map(contact => <ContactItem />
            )}
        </Fragment>
    )
}
export default Contacts
