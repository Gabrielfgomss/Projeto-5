import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contatos from "../../models/contato";

const contatosSlice = createSlice({
  name: "contatos",
  initialState: {
    itens: [
      new Contatos("gabriel@teste.com.br", "11112345678", "Gabriel"),
      new Contatos("lucas@teste.com.br", "11112345678", "Lucas"),
      new Contatos("alice@teste.com.br", "11112345678", "Alice"),
      new Contatos("rene@teste.com.br", "11112345678", "Rene"),
      new Contatos("igor@teste.com.br", "11112345678", "Igor"),
      new Contatos("gustavo@teste.com.br", "11112345678", "Gustavo"),
    ],
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexDoContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      );

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
    cadastrar: (state, action) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.email.toLowerCase() === action.payload.email.toLowerCase()
      );

      if (contatoExistente) {
        alert("Já existe um e-mail para esse contato");
      } else {
        state.itens.push(action.payload);
      }
    },
  },
});

export const { remover, editar, cadastrar } = contatosSlice.actions;

export default contatosSlice.reducer;
