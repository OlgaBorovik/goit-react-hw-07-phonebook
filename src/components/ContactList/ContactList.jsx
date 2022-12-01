import React from "react";
import { ContactsUl, ContactItem } from "./ContactList.styled"
import Contact from "../Contact/Contact"
// import { selectVisibleContacts } from '../../redux/selectors'
// import { useSelector} from "react-redux"



function ContactList({contacts}) {
    // const contacts = useSelector(selectVisibleContacts)
    // console.log(contacts)
    return (
            <ContactsUl>
                {contacts.map(contact  => (
                <ContactItem key={contact.id}>
                    <Contact contact={contact}  />    
                </ContactItem>    
                ))}
            </ContactsUl>
        )
    

}


export default ContactList