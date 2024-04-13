import { configureStore } from "@reduxjs/toolkit";

import contatosReducer from "./reducers/contatos";
import modalReducer from "./reducers/modal";

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    modal: modalReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
