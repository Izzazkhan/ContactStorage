import React, {useReducer} from 'react'
import axios from 'axios'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // add contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    // delete contact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id})
    } 

    // set current contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact})
    } 

    // clear current contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    } 

    // update contact
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact})
    } 

    // filter contacts
    const filterContacts = text => {
        dispatch({type: FILTER_CONTACTS, payload: text})
    } 

    // clear filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState