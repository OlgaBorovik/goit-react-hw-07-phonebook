import React, { useEffect } from "react";
import ContactsForm from "./ContactsForm/ContactsForm"
import ContactList from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {Section, Title, Container} from "./section.styled"
import { useSelector, useDispatch } from "react-redux"
import { selectContacts, selectIsLoading, selectError, selectVisibleContacts } from "redux/selectors";
import { fetchContacts } from "../redux/operations"
// import { selectVisibleContacts } from '../../redux/selectors'
// import { useSelector} from "react-redux"

const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visible = useSelector(selectVisibleContacts)

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(items)
  console.log(visible)
  
  return (
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <ContactsForm/>
        </Container>
        <Container>
        <Title>Contacts</Title>
          {isLoading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}
          <Filter />
          <ContactList contacts={items} />
      </Container>
      </Section>
    )
  

  
}

export default App

