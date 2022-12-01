import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

// const contactsInitialState = {
//     contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// } 

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        items: action.payload
      }
    }
  }
})
    // reducers: {
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // fetchingSuccess(state, action) {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = action.payload;
       
    // },
    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // addContact: {
    //     reducer(state, action) {
    //             state.push(action.payload)
    //         },
    //         prepare(name, number) {
    //             return {
    //                 payload: {
    //                 name,
    //                 number,
    //                 id: nanoid(5)
    //                 }
    //             }
    //         }
    //     },
    //     deleteContact: {
    //         reducer(state, action) {
    //             const index = state.findIndex(contact => contact.id === action.payload)
    //             state.splice(index, 1)
    //         }
//     //     }
//     }
//  })

 

// Експортуємо генератори екшенів та редюсер
export const { fetchingInProgress, fetchingSuccess, fetchingError, addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;




