import React, { useMemo, useEffect } from "react";
import ContactsForm from "./ContactsForm/ContactsForm"
import ContactList from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {Section, Title, Container} from "./section.styled"
import { useSelector, useDispatch } from "react-redux"
import { getContacts, getFilter, getIsLoading, getError } from "redux/selectors";
import {fetchContacts} from "../redux/operations"




const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const filter = useSelector(getFilter)
  // const contacts = useSelector(getContacts)

  // console.log(items)

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
    
  }, [dispatch]);

console.log(items)

  // const filteredContacts = useMemo(() => {
  //   return items.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [items, filter]);

    
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

/*import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/operations";
import { getTasks } from "redux/selectors";
export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, isLoading, error } = useSelector(getTasks);
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані
  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};*/