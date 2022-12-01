import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice"

axios.defaults.baseURL = "https://63874d14e399d2e473fafc01.mockapi.io/contacts/"

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', async () => {
    const response = await axios.get('contacts');
    console.log(response.data)
    return response.data
  }
) 

// export const fetchContacts = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get("contacts");
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };


